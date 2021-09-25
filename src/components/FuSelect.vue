<template>
  <select
      class="fu-select"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
  >
    <slot />
  </select>
</template>

<script>
export default {
  name: 'fu-select',
  props: {
    modelValue: {
      type: [ String, Number ],
      default: '',
    },
  },
  emits: [ 'update:modelValue' ],
}
</script>
<style lang="scss">
:root {
  --select-color: #{pal(primary)};
  --select-color-disabled: #{pal(ui-disabled)};
  --select-item-active: #{pal-acc(primary)};
  --select-item-disabled: #{pal(ui-disabled-border)};
}
</style>
<style lang="scss" scoped>
.fu-select {
  @include typo(200);
  @include spacing-padding(200);

  box-sizing: border-box;
  cursor: pointer;
  font-family: var(--typo-font-text);
  min-height: var(--ui-lt-h);
  border-width: var(--ui-lt-border-width);
  border-style: solid;
  border-color: var(--select-color);
  border-radius: var(--ui-lt-border-radius);
  transition: var(--ui-transition);
  color: var(--select-color);
  line-height: 1;
  outline: none;

  &:hover:not(:disabled) {
    text-decoration: none;
    box-shadow: 0 3px 12px -6px var(--select-color);
  }

  &:hover:not(:disabled):active {
    transform: translateY(2px);
    transition-duration: 30ms;
    box-shadow: 0 3px 4px -2px var(--select-color);
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--select-color-disabled);
    border-color: var(--select-border-color);
    border-style: var(--select-border-sytyle);
    box-shadow: none;
  }

  background: transparent;
  &:disabled {
    color: var(--select-color-disabled);
  }

  &:hover:not(:disabled) {
    box-shadow: 0 3px 10px -6px var(--select-color);
    color: var(--select-color);
  }

  &:hover:not(:disabled):active {
    box-shadow: 0 2px 4px -2px var(--select-color);
  }
}
</style>
