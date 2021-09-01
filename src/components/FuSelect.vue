<template>
  <label class="fu-select">
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
console.log('fu-select: loaded')

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
  setup(){
    console.log('fu-select: setup!')
  },
  emits: [ 'update:modelValue' ],
}
</script>

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
  }
}
</style>
