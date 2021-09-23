<template>
  <label class="fu-select">
    <span v-if="label" class="fu-select_label">{{ label }}</span>
    <select
        v-bind="$attrs"
        :value="modelValue"
        class="fu-select_input"
        @input="$emit('update:modelValue', $event.target.value)"
    >
      <slot />
    </select>
  </label>
</template>

<script>
export default {
  name: 'fu-select',
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
.fu-select {
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
    height: var(--lt-ui-h);
  }
}
</style>
