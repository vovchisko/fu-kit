<template>
  <div class="ui-tag-input" :class="{ naked }" @mousedown.stop.prevent="focusSearch">
    <div class="ui-tag-input_value">
      <div v-if="!!selectedItems.length" class="ui-tag-input_tags">
        <div v-for="item in selectedItems" :key="item.value" class="ui-tag-input_tags-tag">
          <span>{{ item.label }}</span>
          <ui-icon
              name="cross"
              class="ui-tag-input_tags-tag-remove"
              @click.stop.capture="onSelect($event, item)"
          />
        </div>
      </div>
      <div v-else class="ui-tag-input_empty">
        <slot name="empty" />
      </div>
      <input
          tabindex="0"
          class="ui-tag-input_input"
          :class="{ _margin: selectedItems.length }"
          ref="refSearch"
          v-model="search"
          :placeholder="placeholder"
          @keydown="onTextKeydown"
          @keyup="onTextKeyup"
          @focus="onTextFocus"
          spellcheck="false"
      />
    </div>
    <ui-icon
        :name="isLoading ? 'spinner' : 'chevron-down'"
        class="ui-tag-input_value-chevron"
        :class="{ _loading: isLoading }"
    />
    <div class="ui-tag-input_list" ref="refList" @keydown="onArrows">
      <button
          class="ui-tag-input_list-item"
          :class="{'_selected': modelValue.includes(item.value)}"
          tabindex="-1"
          type="button"
          v-for="item in filteredItems"
          @click="onSelect($event, item)"
      >
        <ui-icon name="check" class="ui-tag-input_list-item-check" />
        <span class="ui-tag-input_list-item-lbl">{{ item.label }}</span>
      </button>
      <span v-if="!filteredItems.length" class="ui-tag-input_list-item _disabled">No items found</span>
    </div>
  </div>
</template>

<script>
import { computed, nextTick, ref } from 'vue'
import UiIcon                      from './UiIcon.vue'

const CUSTOM_OPTION = { value: Symbol('custom'), label: '+ Add new', isCustom: true }

export default {
  name: 'ui-tag-input',
  components: { UiIcon },
  props: {
    modelValue: { type: Array, default: [] },
    options: { type: Array, default: [] },
    allowCustom: { type: Boolean, default: false },
    placeholder: { type: String, default: '' },
    isLoading: { type: Boolean },
    naked: { type: Boolean, default: false },
    backspaceRemove: { type: Boolean, default: false },
  },
  emits: [ 'update:modelValue', 'add', 'remove' ],
  setup (props, { emit }) {
    const refSearch = ref(null)
    const refList = ref(null)
    const search = ref('')
    const prevSearch = ref('')

    const normalItems = computed(() => {
      return props.options.map(option => {
        if (typeof option === 'object' && option !== null) {
          return option
        } else {
          return { value: option, label: option }
        }
      })
    })

    const filteredItems = computed(() => {
      if (!search.value) return normalItems.value
      const filtered = normalItems.value
          .filter((i) => String(i.label).toLowerCase().includes(String(search.value).toLowerCase()))

      return props.allowCustom ? [ CUSTOM_OPTION, ...filtered ] : filtered
    })

    const selectedItems = computed(() => props.modelValue.map(value => {
      const option = normalItems.value.find(item => item.value === value)
      return option || { value, label: value }
    }))

    const onSelect = (event, option) => {
      const item = option.isCustom ? { value: search.value, label: search.value, isCustom: true } : option

      const isAdding = !props.modelValue.includes(item.value)

      if (isAdding) emit('add', item)
      else emit('remove', item)

      const newValue = isAdding
          ? [ ...props.modelValue, item.value ]
          : props.modelValue.filter(it => it !== item.value)

      emit('update:modelValue', newValue)

      search.value = ''
      event.target.blur()
    }

    const onTextFocus = async (e) => {
      // search.value = model.value
      await nextTick()
      e.target.setSelectionRange(0, -1)
    }

    const onTextKeydown = (e) => {
      prevSearch.value = e.target.value
      if (![ 'ArrowDown', 'ArrowUp', 'Enter', 'Escape' ].includes(e.key)) return

      if (e.key === 'Escape') return document.activeElement.blur()

      const nodes = Array.prototype.slice.call(refList.value.children)

      if (e.key === 'Enter') {
        if (nodes[0]) {
          nodes[0].click()
        } else {
          if (props.allowCustom) onSelect(e, { label: search.value, value: search.value })

          search.value = ''
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

    const onClickAway = () => {
      search.value = ''
    }

    const focusSearch = () => {
      if (refSearch.value !== document.activeElement) refSearch.value.focus()
    }

    const onTextKeyup = e => {
      if (props.backspaceRemove && !e.target.value && !prevSearch.value && e.key === 'Backspace' && props.modelValue.length) {
        emit('remove', selectedItems.value[selectedItems.value.length - 1])
        emit('update:modelValue', props.modelValue.slice(0, props.modelValue.length - 1))
      }
    }

    return {
      refSearch,
      refList,
      search,
      filteredItems,
      selectedItems,
      onTextKeydown,
      onArrows,
      onSelect,
      onTextFocus,
      onClickAway,
      focusSearch,
      onTextKeyup,
    }
  },
}
</script>

<style lang="scss" scoped>
@include fx-spin-keyframes();

.ui-tag-input {
  @include typo(200);

  display: flex;
  box-sizing: border-box;
  justify-content: stretch;
  align-items: flex-start;
  border-style: var(--ui-lt-border-style);
  border-width: var(--ui-lt-border-width);
  border-color: var(--ui-pal-lateral);
  border-radius: var(--ui-lt-border-radius);
  transition-duration: 240ms;
  transition-timing-function: ease-in-out;
  transition-property: border-color, box-shadow;
  position: relative;
  min-height: var(--ui-lt-h);

  &.naked {
    border-color: transparent;
  }

  &_value {
    display: flex;
    align-content: center;
    justify-content: flex-start;
    margin: spacing(100, 200);

    &-chevron {
      margin: spacing(200);
      min-height: 100%;
      transform: rotate(0);
      transition: transform var(--ui-transition);


      &._loading {
        --icon-size: 16px;

        animation: fx-spin 2s infinite;
      }
    }
  }

  &_tags {
    display: flex;
    gap: spacing(100);
    flex-wrap: wrap;

    &-tag {
      padding: spacing(300);
      display: flex;
      align-items: center;
      gap: spacing(200);
      background-color: var(--pal-grey100);
      cursor: default;
      border-radius: 4px;

      --icon-size: var(--typo-h200);

      &:hover {
        background-color: var(--pal-grey300);
      }

      &-remove {
        cursor: pointer;
        border-radius: var(--icon-size);
        overflow: hidden;
        display: block;

        &:hover {
          --icon-color: var(--pal-negative);
        }

        &._loading {
          --icon-size: 0.8em;

          animation: fx-spin 2s infinite;
          pointer-events: none;
          cursor: default;
        }
      }
    }
  }

  &:focus-within &_input {
    max-height: unset;
    min-height: var(--ui-lt-h-sub);

    &._margin {
      margin-top: spacing(300);
    }
  }

  &_input {
    @include typo(200);

    padding: 0;
    font-family: var(--typo-font-ui);
    color: var(--ui-pal-text);
    caret-color: var(--ui-pal);
    max-height: 0;
    border: none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    flex: 1;
    display: block;
    min-width: 0;

    &:focus {
      outline: none;
      max-height: unset;
    }

    &::selection {
      background-color: var(--ui-pal);
      color: var(--ui-pal-text-select);
    }

    &::placeholder {
      color: var(--ui-pal-placeholder);
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
    border-width: var(--ui-lt-border-width);
    border-radius: var(--ui-lt-border-radius);
    border-color: var(--ui-pal);
    border-style: solid;
    position: absolute;
    left: calc(var(--ui-lt-border-width) * -1);
    top: 100%;
    min-width: calc(100% + var(--ui-lt-border-width) * 2);
    background: var(--ui-pal-bg);
    margin-top: spacing(200);
    z-index: var(--lt-z-pop);

    &-item {
      @include typo(200, 300);

      color: var(--pal-front);
      padding: spacing(300);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: spacing(300);
      border: 0 none;
      text-decoration: none;
      border-radius: 0;
      text-align: left;
      font-weight: inherit;
      font-family: var(--typo-font-ui);
      background: transparent;
      outline: none;

      --icon-size: 1em;

      &-lbl {
        display: block;
        flex: 1;
      }

      &-check {
        visibility: hidden;
      }

      &._selected &-check {
        visibility: visible;
      }

      &._selected {
        color: var(--ui-pal-acc);
        background-color: rgba(var(--ui-rgb), 0.5);
      }

      &:hover:not(._disabled)._selected {
        color: var(--ui-pal-acc);
        background-color: var(--ui-pal);
      }

      &:hover:not(._disabled) {
        background-color: var(--pal-bg);
        color: var(--ui-pal-text);
      }

      &:focus {
        background-color: var(--pal-bg);
        color: var(--ui-pal-text);
      }

      &._disabled {
        user-select: none;
        cursor: default;
      }
    }
  }

  &_value {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &:focus-within &_list {
    display: flex;
  }

  &:focus-within &_value-chevron {
    transform: rotateX(180deg);
  }

  &:hover {
    outline: none;
  }

  &:focus-within {
    outline: none;
    border-color: var(--ui-pal);
  }

  &:focus-within &_empty {
    display: none;
  }

  &._disabled {
    border: var(--ui-lt-border-width) var(--ui-lt-disabled-border-style) var(--ui-pal-disabled-border);
    background: transparent;
  }
}
</style>
