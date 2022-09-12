<template>
  <div class="doc-check">
    <div class="doc-text_col">
      <h4>ui-check</h4>
      <ui-check v-model="val">Default</ui-check>
      <ui-check class="primary" v-model="val">Check primary</ui-check>
      <ui-check class="secondary" v-model="val">Check secondary</ui-check>
      <ui-check class="brand" v-model="val">Check brand</ui-check>
      <ui-check class="positive" v-model="val">Check positive</ui-check>
      <ui-check class="negative" v-model="val">Check negative</ui-check>
      <ui-check class="warning" v-model="val">Check warning</ui-check>
      <ui-check disabled v-model="val">Disabled</ui-check>
    </div>
    <div class="doc-text_col">
      <h4>with switch-like</h4>
      <ui-check switch-like v-model="val">Default</ui-check>
      <ui-check switch-like class="primary" v-model="val">Switch primary</ui-check>
      <ui-check switch-like class="secondary" v-model="val">Switch secondary</ui-check>
      <ui-check switch-like class="brand" v-model="val">Switch brand</ui-check>
      <ui-check switch-like class="positive" v-model="val">Switch positive</ui-check>
      <ui-check switch-like class="negative" v-model="val">Switch negative</ui-check>
      <ui-check switch-like class="warning" v-model="val">Switch warning</ui-check>
      <ui-check switch-like disabled v-model="val">Disabled</ui-check>
    </div>
  </div>
  <ui-code-view label="Example">{{ example }}</ui-code-view>
</template>

<script>
import { ref }                 from 'vue'
import { UiCheck, UiCodeView } from '../entry.js'

const example = `
// simple check
<ui-check v-model="val">Check</ui-check>

// switch-like
<ui-check switch-like v-model="val">Switch-like</ui-check>
`

export default {
  name: 'doc-text',
  components: { UiCodeView, UiCheck },
  setup () {
    const val = ref(false)
    return { example, val }
  },
}
</script>

<style lang="scss">
.doc-check {
  display: flex;
  gap: spacing(600);

  &_row {
    padding: spacing(300);

    gap: 1em;
    display: flex;
    flex-direction: column;
  }

  .icon {
    height: 2em;
    width: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>