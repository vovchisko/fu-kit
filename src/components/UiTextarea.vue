<template>
  <div
      :class="{'_disabled': $attrs.disabled !== undefined || $attrs.readOnly  !== undefined }"
      class="ui-text"
      v-bind="{ class: $attrs.class }"
  >
    <textarea
        ref="textarea"
        :value="modelValue"
        class="ui-text_textarea"
        v-bind="{...$attrs, class: undefined}"
        @input="handleInput"
    />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'ui-textarea',
  props: {
    modelValue: {
      type: [ String, Number ],
      default: '',
    },
    autoResize: { type: Boolean, default: false },
  },
  emits: [ 'update:modelValue' ],
  setup (props, { emit }) {
    const textarea = ref(null)
    const handleInput = async (e) => {
      emit('update:modelValue', e.target.value)
      resize(e.target)
    }
    const resize = (elm) => {
      if (!props.autoResize) return
      elm.style.height = 'auto'
      elm.style.height = `${ elm.scrollHeight }px`
    }
    onMounted(() => resize(textarea.value))

    return { handleInput, textarea }
  },
})
</script>
<style lang="scss" scoped>
@import "../../scss";

.ui-text {
  @include typo(200);

  padding: 0;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: stretch;
  border-style: var(--ui-lt-border-style);
  border-width: var(--ui-lt-border-width);
  border-color: var(--ui-pal-lateral);
  border-radius: var(--ui-lt-border-radius);
  transition-duration: 240ms;
  transition-timing-function: ease-in-out;
  transition-property: border-color, box-shadow;
  min-height: var(--ui-lt-h);
  background: var(--ui-pal-bg);

  &_textarea {
    @include scrollbar-awesome();
    @include typo(200);
    padding: spacing(200, 300);
    margin: spacing(100, 100, 100, 0);

    color: var(--ui-pal-text);
    caret-color: var(--ui-pal);
    border: 0 none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    flex: 1;
    display: block;
    min-width: var(--ui-textarea-min-w, 0);
    max-width: var(--ui-textarea-max-w, unset);
    resize: var(--ui-textarea-resize, vertical);
    min-height: var(--ui-textarea-min-h, 4em);
    max-height: var(--ui-textarea-max-h, 400px);
    height: var(--ui-lt-h);
    font-family: var(--typo-font-ui);

    &::selection {
      background-color: var(--ui-pal);
      color: var(--ui-pal-text-select);
    }

    &[disabled], &[read-only] {
      cursor: text;
      color: var(--ui-pal-disabled-border);
    }
  }

  &:hover {
    outline: none;
    box-shadow: 0 5px 12px -4px rgb(var(--rgb-front), 0.2);
  }

  &:focus-within {
    outline: none;
    box-shadow: 0 0 0 0 var(--ui-pal);
    border-color: var(--ui-pal);
  }

  &._disabled {
    border: var(--ui-lt-border-width) var(--ui-lt-disabled-border-style) var(--ui-pal-disabled-border);
    box-shadow: none;
  }
}
</style>
