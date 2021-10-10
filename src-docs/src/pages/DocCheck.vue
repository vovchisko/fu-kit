<template>
  <div class="doc-check">
    <div class="doc-text_col">
      <h4>fu-check</h4>
      <fu-check v-model="val">Default</fu-check>
      <fu-check class="primary" v-model="val">Check primary</fu-check>
      <fu-check class="secondary" v-model="val">Check secondary</fu-check>
      <fu-check class="brand" v-model="val">Check brand</fu-check>
      <fu-check class="positive" v-model="val">Check positive</fu-check>
      <fu-check class="negative" v-model="val">Check negative</fu-check>
      <fu-check class="warning" v-model="val">Check warning</fu-check>
      <fu-check disabled v-model="val">Disabled</fu-check>
    </div>
    <div class="doc-text_col">
      <h4>fu-switch</h4>
      <fu-switch v-model="val">Default</fu-switch>
      <fu-switch class="primary" v-model="val">Switch primary</fu-switch>
      <fu-switch class="secondary" v-model="val">Switch secondary</fu-switch>
      <fu-switch class="brand" v-model="val">Switch brand</fu-switch>
      <fu-switch class="positive" v-model="val">Switch positive</fu-switch>
      <fu-switch class="negative" v-model="val">Switch negative</fu-switch>
      <fu-switch class="warning" v-model="val">Switch warning</fu-switch>
      <fu-switch disabled v-model="val">Disabled</fu-switch>
    </div>
  </div>
  <fu-code-view label="Example">{{ example }}</fu-code-view>
</template>

<script>
import { ref } from 'vue'

const example = `
TBD
`

export default {
  name: 'doc-text',
  components: {},
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
    @include spacing-padding(300);

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