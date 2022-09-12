<template>
  <div class="doc-progress-radial">
    <div class="doc-button_row">
      <ui-progress-radial :value="v">{{ fi }}</ui-progress-radial>
      <ui-progress-radial :value="v" class="secondary">{{ fi }}</ui-progress-radial>
      <ui-progress-radial :value="v" class="warning">{{ fi }}</ui-progress-radial>
      <ui-progress-radial :value="v" class="negative">{{ fi }}</ui-progress-radial>
      <ui-progress-radial :value="v" class="positive">{{ fi }}</ui-progress-radial>
    </div>
    <ui-code-view label="Example">{{ example }}</ui-code-view>
  </div>
</template>

<script>
import { UiCodeView }                     from '../entry.js'
import UiProgressRadial                   from '../components/UiProgressRadial.vue'
import { computed, onBeforeUnmount, ref } from 'vue'

const example = `/// vue
<div class="doc-button_row">
  <ui-progress-radial :value="v">{{ fi }}</ui-progress-radial>
  <ui-progress-radial :value="v" class="secondary">{{ fi }}</ui-progress-radial>
  <ui-progress-radial :value="v" class="warning">{{ fi }}</ui-progress-radial>
  <ui-progress-radial :value="v" class="negative">{{ fi }}</ui-progress-radial>
  <ui-progress-radial :value="v" class="positive">{{ fi }}</ui-progress-radial>
</div>
`

export default {
  name: 'doc-progress-radial',
  components: { UiProgressRadial, UiCodeView },
  setup () {
    const v = ref(0.5)
    const fi = computed(() => v.value.toLocaleString('en-US', { minimumFractionDigits: 3, maximumFractionDigits: 3 }))
    let interval = setInterval(() => v.value = Math.random(), 1000)
    onBeforeUnmount(() => clearInterval(interval))
    return { example, v, fi }
  },
}
</script>

<style lang="scss">
.doc-progress-radial {
  &_row {
    padding: spacing(200);
  }
}
</style>