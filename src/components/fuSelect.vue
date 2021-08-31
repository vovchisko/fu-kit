<template>
  <label class="ui-select">
    <span v-if="label" class="ui-select_label">{{ label }}</span>
    <select
        v-bind="$attrs"
        :value="modelValue"
        class="ui-select_input"
        @input="$emit('update:modelValue', $event.target.value)"
    >
      <slot />
    </select>
  </label>
</template>

<script>
export default {
  name: 'ui-select',
  props: {
    modelValue: {
      type: [ String, Number ],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  emits: [ 'update:modelValue' ],
}
</script>
<style lang="scss">
:root {
  // todo: how to style?
}
</style>
<style lang="scss" scoped>
.ui-select {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: left;

  &_label {
    display: block;
    width: 100%;
  }

  &_input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: var(--ui-height);
  }
}
</style>
