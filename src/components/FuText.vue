<template>
  <label class="fu-text">
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
console.log('fu-text: loaded')

export default {
  name: 'fu-text',
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
  setup(){
    console.log('fu-text: setup!')
  },
  emits: [ 'update:modelValue' ],
}
</script>
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
    height: var(--ui-height);
    border-width: var(--fu-text-border-width);
    border-color: var(--fu-text-border-color);
    border-style: solid;

    &:focus {
      outline: none;
    }
  }
}
</style>
