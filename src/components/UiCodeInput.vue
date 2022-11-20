<template>
  <div class="code-input">
    <div class="code-input_wrapper">
      <input
          ref="inp"
          :maxlength="$props.length"
          :value="$props.modelValue"
          class="code-input_inp"
          type="text"
          v-bind="{ ...$attrs }"
          @input="handleInput"
          @focus.passive="selectionUpdate"
          @dragend.passive="selectionUpdate"
          @mouseup.passive="selectionUpdate"
          @keydown.passive="selectionUpdate"
          @keyup.passive="selectionUpdate"
      />
      <div
          v-for="i in $props.length"
          :key="'char' + i"
          :class="{
            '_select': i - 1 >= selection.from && i - 1 < selection.to && selection.from !== selection.to,
            '_cursor': i - 1 === selection.to,
          }"
          class="code-input_char"
      >
        <span class="code-input_char-item">{{ chars[i - 1] || '' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

export default {
  name: 'ui-code-input',
  props: {
    modelValue: {
      type: String,
    },
    length: {
      type: Number,
      default: 6,
    },
  },
  setup (props, { emit }) {
    const selection = reactive({ from: 0, to: 0 })
    const inp = ref(null)

    const selectionUpdate = (e) => {
      selection.from = e.target.selectionStart
      selection.to = e.target.selectionEnd
    }

    const handleInput = (e) => {
      emit('update:modelValue', e.target.value)
    }

    const chars = computed(() => (props.modelValue).split(''))

    onMounted(() => { })
    onBeforeUnmount(() => { })

    return { chars, selection, selectionUpdate, inp, handleInput }
  },
}
</script>

<style lang="scss" scoped>
.code-input {
  --charbox-width: 34px;
  --chabox-height: 48px;

  display: flex;

  &_wrapper {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: spacing(400);
  }

  &_inp {
    padding: 14px;
    position: absolute;
    width: 100%;
    border: none;
    background: transparent;
    font-family: var(--typo-font-mono);
    font-size: var(--typo-h200);
    letter-spacing: 41px;
    outline: none;
    opacity: 0;
  }

  &_char {
    width: var(--charbox-width);
    height: var(--ui-lt-h);
    border: 1px solid var(--charbox-border-color, var(--pal-grey300));
    border-radius: var(--ui-lt-border-radius);
    color: var(--charbox-text-color, var(--pal-grey900));
    align-items: center;
    justify-content: center;
    display: flex;

    &-item {
      border-width: 2px 0;
      border-style: solid;
      border-color: transparent;
      background: transparent;
      min-width: 0.75em;
      min-height: 1.5em;
      text-align: center;
    }

    &._select &-item {
      color: var(--pal-front);
      background: var(--pal-primary);
    }

    input:focus ~ &._cursor {
      border-color: var(--ui-pal);
    }

    input:focus ~ &._cursor &-item {
      border-bottom-color: var(--pal-front);
    }
  }
}
</style>
