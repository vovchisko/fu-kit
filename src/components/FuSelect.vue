<template>
  <label class="fu-select">
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

  &_input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: var(--lt-ui-h);
  }
}
</style>
