<template>
  <div class="doc-var">
    <div class="doc-var_options">
      <ui-check v-model="options.multiline">Multiline</ui-check>
      <ui-check v-model="options.nullable">Nullable</ui-check>
    </div>

    <div class="doc-var_options">
      <ui-check v-for="type in types" :key="type" v-model="expect[type]">{{ type }}</ui-check>
    </div>

    <div class="doc-var_items">
      <ui-var line
              v-model="model.data"
              :multiline="options.multiline"
              :nullable="options.nullable"
              :expect="selectedTypes.length ? selectedTypes : null"
              @update:isValid="updateIsValid"
              auto-resize />

      <ui-var line
              v-model="model.data"
              placeholder="This is placeholder"
              :multiline="options.multiline"
              :nullable="options.nullable"
              :expect="selectedTypes.length ? selectedTypes : null"
              @update:isValid="updateIsValid"
              auto-resize />

      <ui-var line
              v-model="model.data"
              label="This is label"
              :multiline="options.multiline"
              :nullable="options.nullable"
              :expect="selectedTypes.length ? selectedTypes : null"
              @update:isValid="updateIsValid"
              auto-resize />

      <ui-var line
              v-model="model.data"
              label="This is label"
              placeholder="This is placeholder"
              :multiline="options.multiline"
              :nullable="options.nullable"
              :expect="selectedTypes.length ? selectedTypes : null"
              @update:isValid="updateIsValid"
              auto-resize />

      <ui-code-view class="doc-var_value">{{ { ...model, isValid: options.isValid } }}</ui-code-view>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'

import UiVar      from '../components/UiVar.vue'
import UiCodeView from '../components/UiCodeView.vue'
import UiCheck    from '../components/UiCheck.vue'

const DATA_TYPES = Object.freeze({
  OBJECT: 'object',
  ARRAY: 'array',
  NUMBER: 'number',
  STRING: 'string',
  BOOLEAN: 'boolean',
  NULL: 'null',
})


export default {
  name: 'doc-var',
  components: { UiVar, UiCodeView, UiCheck },
  setup () {
    const options = reactive({
      multiline: false,
      nullable: false,
      isValid: true,
    })
    const expect = reactive({
      [DATA_TYPES.OBJECT]: false,
      [DATA_TYPES.ARRAY]: false,
      [DATA_TYPES.STRING]: false,
      [DATA_TYPES.NUMBER]: true,
      [DATA_TYPES.BOOLEAN]: false,
    })
    const model = reactive({ data: 123 })

    const types = [
      DATA_TYPES.OBJECT,
      DATA_TYPES.ARRAY,
      DATA_TYPES.STRING,
      DATA_TYPES.NUMBER,
      DATA_TYPES.BOOLEAN,
    ]

    const selectedTypes = computed(() => Object.entries(expect).filter(it => it[1]).map(it => it[0]))

    const updateIsValid = isValid => {
      options.isValid = isValid
    }

    return { model, options, expect, types, selectedTypes, updateIsValid }
  },
}
</script>

<style lang="scss" scoped>
.doc-var {
  &_options {
    display: flex;
    align-items: center;
    gap: spacing(400);
  }

  &_items {
    display: flex;
    flex-direction: column;
    gap: spacing(800);
  }

  &_value {
    margin: spacing(400, 0);
  }
}
</style>
