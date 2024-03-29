<template>
  <label class="ui-select" v-bind="{ class: $attrs.class }">
    <select
        :value="modelValue"
        class="ui-select_select"
        v-bind="{  ...$attrs, class: undefined }"
        @input.stop="$emit('update:modelValue', $event.target.value)"
    >
      <slot />
    </select>
  </label>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ui-select',
  props: {
    modelValue: {
      type: [ String, Number ],
      default: '',
    },
  },
  emits: [ 'update:modelValue' ],
})
</script>

<style lang="scss" scoped>
@import "../../scss";

.ui-select {
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

  &_select {
    @include typo(200);
    padding: spacing(100, 200);

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

    &[disabled] {
      cursor: not-allowed;
      color: var(--ui-pal-disabled-border);
    }

    &:deep(option) {
      line-height: var(--ui-lt-h);
      background: var(--ui-pal-bg);
      color: var(--ui-pal-text);
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
    background: var(--ui-pal-bg);
    box-shadow: none;
  }
}
</style>