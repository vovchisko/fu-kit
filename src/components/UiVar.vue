<template>
  <div class="ui-var">
    <component :is="multiline ? 'ui-textarea' : 'ui-text'"
               :placeholder="placeholder"
               :label="label"
               spellcheck="false"
               :modelValue="val"
               @update:modelValue="updateValue"
               v-bind="{ ...$attrs }"
               :class="hasError ? 'negative' : ''"
               :auto-resize="autoResize"
    />
    <small class="ui-var_type" :class="{ _error: hasError }">
      {{ typeLabel }}
    </small>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'

import UiText         from './UiText.vue'
import UiTextarea     from './UiTextarea.vue'

const getTypeName = value => {
  if (Array.isArray(value)) return 'array'
  if (value === null) return 'null'

  return typeof value
}

export default {
  name: 'ui-var',
  components: { UiText, UiTextarea },
  props: {
    modelValue: {
      validator: modelValue => typeof modelValue !== 'undefined',
    },
    expect: { type: [ String, Array ] },
    nullable: { type: Boolean, default: false },
    multiline: { type: Boolean, default: false },
    autoResize: { type: Boolean, default: false },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
  },
  emits: [ 'update:modelValue', 'update:isValid', 'error' ],
  setup (props, context) {
    const val = ref(typeof props.modelValue === 'string'
        ? props.modelValue
        : JSON.stringify(props.modelValue, null, props.multiline ? 2 : 0))

    const type = ref(getTypeName(props.modelValue))
    const hasError = ref(false)

    const allowedTypes = computed(() => {
      if (!props.expect) return null

      const typesArray = Array.isArray(props.expect) ? props.expect : [ props.expect ]
      return props.nullable ? [ ...typesArray, DATA_TYPES.NULL ] : typesArray
    })

    const isOnlyString = computed(() => {
      return props.expect === DATA_TYPES.STRING ||
             (Array.isArray(props.expect) && props.expect.length === 1 && props.expect[0] === DATA_TYPES.STRING)
    })

    const validateType = (newType) => {
      if (allowedTypes.value && !allowedTypes.value.includes(newType)) {
        context.emit('error', new Error(`Received type: ${ newType }; Expected types: ${ allowedTypes.value.join('/') }`))
        context.emit('update:isValid', false)
        hasError.value = true
      } else {
        context.emit('update:isValid', true)
        hasError.value = false
      }
    }
    validateType(type.value)

    const updateValue = (value) => {
      val.value = value
      let newValue
      try {
        newValue = isOnlyString.value ? val.value : JSON.parse(val.value)
      } catch (e) {
        newValue = val.value
      } finally {
        context.emit('update:modelValue', newValue)
        type.value = getTypeName(newValue)
        validateType(type.value)
      }
    }

    watch(allowedTypes, () => {
      validateType(type.value)
    })

    const typeLabel = computed(() => {
      return (hasError.value ? 'Invalid Value! Expected: ' : '') + allowedTypes.value?.join(', ')
    })

    return { val, type, hasError, allowedTypes, updateValue, typeLabel }
  },
}
</script>

<style lang="scss" scoped>
.ui-var {
  &_type {
    margin: spacing(300, 0);
    color: var(--pal-grey600);
    cursor: default;
    display: block;

    &._error {
      color: var(--pal-negative);
    }
  }
}
</style>
