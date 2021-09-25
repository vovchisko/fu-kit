<template>
  <label class="fu-select-x" v-bind="$attrs">
    <input
        tabindex="0"
        class="fu-select-x_input"
        ref="refSearch"
        v-model="search"
        :placeholder="model"
        @keydown="onTextKeydown"
        @focus="onTextFocus"
        @blur="onSomeBlur"
        spellcheck="false"
    />
    <span class="fu-select-x_list" v-show="filteredItems.length" ref="refList" @keydown="onArrows">
      <fu-button
          link-like
          class="fu-select-x_list-item"
          :class="{'_selected': e.value === model}"
          tabindex="-1"
          v-for="(e) in filteredItems"
          @click="onSelect($event,e)"
          @blur="onSomeBlur"
      >
        {{ e.label }}
      </fu-button>
    </span>
  </label>
</template>

<script>
import { computed, nextTick, ref, watch } from 'vue'

import UiText   from './FuText.vue'
import FuButton from './FuButton.vue'

export default {
  name: 'fu-select-x',
  components: { FuButton, UiText },
  props: {
    modelValue: { type: [ String, Number ], default: '' },
    options: { type: Array, default: [] },
    allowCustom: { type: Boolean, default: false },
  },
  emits: [ 'update:modelValue', 'select' ],
  setup (props, { emit }) {
    const refSearch = ref(null)
    const refList = ref(null)
    const search = ref('')
    const model = ref(props.modelValue)

    watch(() => props.modelValue, (value) => {
      model.value = value
      search.value = value
    })

    const normalItems = computed(() => {
      return props.options.map(o => {
        if (typeof o === 'object' && o !== null && !Array.isArray(o)) {
          return o
        } else {
          return { value: o, label: o }
        }
      })
    })

    const filteredItems = computed(() => {
      if (!search.value || search.value === model.value) return normalItems.value
      return normalItems.value.filter((i) => String(i.label).includes(search.value))
    })

    const selectedItem = computed(() => normalItems.value.find(o => model.value === o.value))

    const onSelect = (event, item) => {
      search.value = item.value
      model.value = item.value
      emit('update:modelValue', model.value)
      emit('select', model.value)

      event.target.blur()
    }

    const onTextFocus = async (e) => {
      search.value = model.value
      await nextTick()
      e.target.setSelectionRange(0, -1)
    }

    const onTextKeydown = (e) => {
      if (![ 'ArrowDown', 'ArrowUp', 'Enter', 'Escape' ].includes(e.key)) return

      if (e.key === 'Escape') return document.activeElement.blur()

      const nodes = Array.prototype.slice.call(refList.value.children)

      if (e.key === 'Enter') {
        if (nodes[0]) {
          nodes[0].click()
        } else if (props.allowCustom) {
          onSelect(e, { label: search.value, value: search.value })
        }

        e.preventDefault()
        e.target.blur()

        return
      }

      if (!nodes.length) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          nodes[0].focus()
          break
        case 'ArrowUp':
          e.preventDefault()
          nodes[nodes.length - 1].focus()
          break
      }

      e.preventDefault()
    }

    const onArrows = (e) => {
      if (![ 'ArrowDown', 'ArrowUp', 'Escape' ].includes(e.key)) return

      if (e.key === 'Escape') return document.activeElement.blur()

      if (refList.value !== document.activeElement.parentElement) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          focusJump(+1)
          break
        case 'ArrowUp':
          e.preventDefault()
          focusJump(-1)
          break
      }
    }

    const focusJump = (next = -1) => {
      const foElm = document.activeElement.parentElement
      if (foElm !== refList.value && foElm === refSearch.value) return

      const nodes = Array.prototype.slice.call(refList.value.children)
      const liRef = document.activeElement
      const fi = nodes.indexOf(liRef)


      if (next > 0) {
        if (fi === nodes.length - 1) return nodes[0].focus()
        if (nodes[fi + 1]) nodes[fi + 1].focus()
      } else if (next < 0) {
        if (fi === 0) return nodes[nodes.length - 1].focus()
        if (nodes[fi - 1]) nodes[fi - 1].focus()
      }
    }

    const onSomeBlur = async (e) => {
      await nextTick() // todo: investigate why it's required
      if (
          refSearch.value !== document.activeElement &&
          refList.value !== document.activeElement.parentElement
      ) {
        search.value = model.value
      }
    }

    return {
      refSearch,
      refList,
      search,
      model,
      filteredItems,
      selectedItem,
      onTextKeydown,
      onArrows,
      onSelect,
      onTextFocus,
      onSomeBlur,
    }
  },
}
</script>

<style lang="scss">
:root {
  --select-x-bg: black;
  --select-x-border-color: #{pal(primary)};
  --select-x-border-width: 1px;
}
</style>

<style lang="scss" scoped>
.fu-select-x {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: left;
  position: relative;

  &_input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: var(--ui-lt-h);
    border-width: var(--select-x-border-width);
    border-color: var(--select-x-border-color);
    border-style: solid;

    &:focus {
      outline: none;
    }

    &:not(:focus)::placeholder {
      color: pal(prime);
    }
  }

  &_list {
    @include scrollbar-awesome();

    overflow: auto;
    max-height: 30vh;
    max-width: 100vw;
    display: none;
    flex-direction: column;
    justify-content: stretch;
    border-width: var(--select-x-border-width);
    border-color: var(--select-x-border-color);
    border-style: solid;
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: spacing(100);
    min-width: 100%;
    background-color: pal(bg);

    &-item {
      @include spacing-padding(0, 100);
      @include typo(200, 400);

      text-decoration: none;
      border-radius: 0;
      justify-content: left;
      text-align: left;
      font-weight: inherit;

      &:hover {
        color: pal(prime);
        background-color: pal(pal-block-light, 0.3);
      }

      &:focus {
        color: pal(prime);
        outline: none;
        background-color: pal(block);
      }

      &._selected {
        background-color: pal(primary);
        color: pal(bg);
      }
    }
  }

  &:focus-within &_list {
    display: flex;
  }
}
</style>
