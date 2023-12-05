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
            '_cursor': i  === selection.to,
            '_cursor_0': selection.from === 0 && selection.to === 0 && i === 1,
          }"
          class="code-input_char"
      >
        <span class="code-input_char-item">{{ chars[i - 1] || '' }}</span>
      </div>
    </div>
    {{ selection }}
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'

export default {
  name: 'ui-code-input',
  props: {
    type: { type: String, default: 'text' },
    modelValue: { type: String },
    length: { type: Number, default: 4 },
  },
  setup (props, { emit }) {
    const selection = reactive({ from: 0, to: 0 })
    const inp = ref(null)

    const selectionUpdate = (e) => {
      requestAnimationFrame(() => {
        selection.from = e.target.selectionStart
        selection.to = e.target.selectionEnd
      })
    }

    const handleInput = (e) => emit('update:modelValue', e.target.value)

    const chars = computed(() => (props.modelValue).split(''))

    return { chars, selection, selectionUpdate, inp, handleInput }
  },
}
</script>

<style lang="scss" scoped>
.code-input {
  display: flex;
  height: var(--ui-lt-h);

  &_wrapper {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: spacing(400);
  }

  &_inp {
    --extra-indent: calc((var(--ui-lt-h) + #{spacing(200)}));

    position: absolute;
    width: calc(100% + var(--extra-indent));
    height: 100%;
    border: 0 none;
    font-family: var(--typo-font-mono);
    font-size: var(--typo-font-ui);
    letter-spacing: calc(var(--ui-lt-h) + #{spacing(200)});
    margin-left: calc(var(--extra-indent) / -2);
    outline: none;
    background: transparent;
    opacity: 0;
    padding: 0;
  }

  &_char {
    width: var(--ui-lt-h);
    height: 100%;
    border-style: var(--ui-lt-border-style);
    border-width: var(--ui-lt-border-width);
    border-color: var(--ui-pal-lateral);
    border-radius: var(--ui-lt-border-radius);
    background: var(--ui-pal-bg);
    color: var(--ui-pal-text);
    align-items: center;
    justify-content: center;
    display: flex;
    gap: spacing(100);

    &-item {
      font-family: var(--typo-font-mono);
      font-size: var(--typo-h300);
      border-width: 0 2px 0 2px;
      border-style: solid;
      border-color: transparent;
      background: transparent;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: spacing(200);
      min-width: calc(var(--ui-lt-h) / 2);
      min-height: calc(var(--ui-lt-h) / 2);
    }

    &._select &-item {
      color: var(--pal-front);
      background: var(--pal-primary);
    }

    input:focus ~ &._cursor {
      border-color: var(--ui-pal);
    }

    input:focus ~ &._cursor_0 &-item {
      border-left-color: var(--pal-front);
    }

    input:focus ~ &._cursor &-item, {
      border-right-color: var(--pal-front);
    }
  }
}
</style>
