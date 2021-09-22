<template>
  <label class="fu-text">
    <span v-if="label" class="fu-text_label">{{ label }}</span>
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
  --fu-text-bg: black;
  --fu-text-border-color: #{pal($pal-primary)};
  --fu-text-border-width: 1px;
}
</style>
<style lang="scss" scoped>
.fu-text {
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
    height: var(--fu-height);
    border-width: var(--fu-text-border-width);
    border-color: var(--fu-text-border-color);
    border-style: solid;

    &:focus {
      outline: none;
    }
  }
}
</style>
