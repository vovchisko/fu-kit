<template>
  <div
      class="fu-text"
      :class="{'_disabled': $attrs.disabled !== undefined || $attrs.readOnly  !== undefined }"
      v-bind="{ class: $attrs.class }"
  >
    <slot />
    <slot name="left" />
    <input
        v-bind="{...$attrs, class: undefined}"
        :value="modelValue"
        class="fu-text_input"
        @input="$emit('update:modelValue', $event.target.value)"
    >
    <slot name="right" />
  </div>
</template>

<script>
export default {
  name: 'fu-text',
  props: {
    modelValue: {
      type: [ String, Number ],
      default: '',
    },
  },
  emits: [ 'update:modelValue' ],
}
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
  height: var(--ui-lt-h);
  background: var(--ui-pal-bg);

  &_input {
    @include typo(200);
    @include spacing-padding(100, 300);

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
    background: var(--ui-pal-bg);
    box-shadow: none;
  }
}
</style>
