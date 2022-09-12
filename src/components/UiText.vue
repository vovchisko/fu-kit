<template>
  <div
      :class="{'_disabled': disabled || $attrs.readOnly !== undefined, 'ui-text': !naked }"
      v-bind="{ class: $attrs.class }"
  >
    <slot />
    <slot name="left" />
    <input
        ref="inputRef"
        :class="{ _naked: naked }"
        :value="modelValue"
        class="ui-text_input"
        v-bind="{...$attrs, disabled, class: undefined}"
        @focus="handleFocus"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <slot name="right" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ui-text',
  props: {
    disabled: { type: Boolean, default: false },
    autoSelect: { type: Boolean, default: false },
    naked: { type: Boolean, default: false },
    modelValue: {
      type: [ String, Number ],
      default: '',
    },
  },
  emits: [ 'update:modelValue' ],
  expose: [ 'focus' ],
  methods: {
    focus () {
      this.$refs.inputRef.focus()
    },
    handleFocus () {
      if (this.autoSelect) this.$refs.inputRef.select()
    },
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
  height: var(--ui-lt-h);
  background: var(--pal-white);

  &_input {
    @include typo(200);
    padding: var(--ui-input-padding, #{spacing(100)} #{spacing(300)});

    font-family: var(--typo-font-ui);
    color: var(--ui-pal-text);
    caret-color: var(--ui-pal);
    min-height: min(100%);
    border: none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    flex: 1;
    display: block;
    min-width: 0;
    margin: 0;

    &::selection {
      background-color: var(--ui-pal);
      color: var(--ui-pal-text-select);
    }

    &::placeholder {
      color: var(--ui-pal-placeholder);
    }

    &[disabled], &[read-only] {
      cursor: not-allowed;
      color: var(--ui-pal-disabled-border);
    }

    &._naked {
      padding: var(--ui-input-padding, 0);
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
    background: var(--ui-pal-bg);
    box-shadow: none;
  }
}
</style>
