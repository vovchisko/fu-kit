<template>
  <label class="fu-text">
    <input
        v-bind="$attrs"
        :value="modelValue"
        class="fu-text_input"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'fu-text',
  props: {
    modelValue: {
      type: [ String, Number ],
      default: '',
    }
  },
  emits: [ 'update:modelValue' ],
}
</script>
<style lang="scss">
:root {
  --text-bg: black;
  --text-border-color: #{pal(primary)};
  --text-border-width: 1px;
}
</style>
<style lang="scss" scoped>
.fu-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: left;

  &_input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: var(--lt-ui-h);
    border-width: var(--text-border-width);
    border-color: var(--text-border-color);
    border-style: solid;

    &:focus {
      outline: none;
    }
  }
}
</style>
