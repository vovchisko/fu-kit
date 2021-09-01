<template>
  <label class="ui-text">
    <span v-if="label" class="ui-text_label">{{ label }}</span>
    <input
        v-bind="$attrs"
        :value="modelValue"
        class="ui-text_input"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'ui-text',
  props: {
    modelValue: {
      type: [String, Number],
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
<style lang="scss" scoped>
.ui-text {
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
    border-width: var(--ui-text-border-width);
    border-color: var(--ui-text-border-color);
    border-style: solid;

    &:focus {
      outline: none;
    }
  }
}
</style>
