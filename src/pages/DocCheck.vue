<template>
  <div class="doc-check">
    <div class="doc-text_col">
      <h4>ui-check</h4>
      <ui-check v-model="val">Default</ui-check>
      <ui-check v-model="val" class="primary">Check primary</ui-check>
      <ui-check v-model="val" class="secondary">Check secondary</ui-check>
      <ui-check v-model="val" class="positive">Check positive</ui-check>
      <ui-check v-model="val" class="negative">Check negative</ui-check>
      <ui-check v-model="val" class="warning">Check warning</ui-check>
      <ui-check v-model="val" disabled>Disabled</ui-check>
    </div>
    <div class="doc-text_col">
      <h4>with switch-like</h4>
      <ui-check v-model="val" switch-like>Default</ui-check>
      <ui-check v-model="val" class="primary" switch-like>Switch primary</ui-check>
      <ui-check v-model="val" class="secondary" switch-like>Switch secondary</ui-check>
      <ui-check v-model="val" class="positive" switch-like>Switch positive</ui-check>
      <ui-check v-model="val" class="negative" switch-like>Switch negative</ui-check>
      <ui-check v-model="val" class="warning" switch-like>Switch warning</ui-check>
      <ui-check v-model="val" disabled switch-like>Disabled</ui-check>
    </div>

    <div class="doc-text_col">
      <ui-check v-model="val2" switch-like @change="logInput">Separate with log</ui-check>
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
    const val2 = ref(false)
    const logInput = (ev) => {
      console.log('log input:', ev, val2.value)
    }
    return { example, val, val2, logInput }
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
