<template>
  <div
      class="fu-text"
      v-bind="{ class: $attrs.class }"
      :class="{'_disabled': $attrs.disabled !== undefined || $attrs.readOnly  !== undefined }"
  >
    <textarea
        ref="textarea"
        v-bind="{...$attrs, class: undefined}"
        :value="modelValue"
        class="fu-text_textarea"
        @input="handleInput"
    />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'fu-textarea',
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

.fu-text {
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
    @include spacing-padding(200);
    @include spacing-margin(100);

    color: var(--ui-pal-text);
    caret-color: var(--ui-pal);
    border: none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    flex: 1;
    display: block;
    min-width: 0;
    resize: var(--ui-textarea-resize, vertical);
    min-height: var(--ui-lt-h);
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
    box-shadow: 0 5px 12px -4px rgb(var(--rgb-dark), 0.2);
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
