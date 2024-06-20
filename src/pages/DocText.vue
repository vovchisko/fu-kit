<template>
  <div class="doc-text">
    <div class="doc-text_row">
      <ui-text v-model="val" :disabled="disabled" placeholder="placeholder" />
      <ui-text v-model="val" :disabled="disabled" class="secondary" placeholder="placeholder" />
      <ui-text v-model="val" :disabled="disabled" class="primary" placeholder="placeholder" />
      <ui-text v-model="val" :disabled="disabled" disabled placeholder="placeholder" />
      <ui-text v-model="val" disabled placeholder="placeholder" />
    </div>
    <div class="doc-text_row">
      <ui-text v-model="val" class="doc-sandbox_row-text" placeholder="disabled placeholder">
        <template #left>
          <p class="icon"> ❤️</p>
        </template>
        <template #right>
          <p class="icon"> ❤️</p>
        </template>
      </ui-text>
    </div>

    <ui-check v-model="disabled">disabled</ui-check>
    <ui-code-view label="Example">{{ example }}</ui-code-view>
  </div>
</template>

<script>
import { ref }                from 'vue'
import { UiCodeView, UiText } from '../entry.js'
import UiCheck                from '../components/UiCheck.vue'

const example = `
TBD
`

export default {
  name: 'doc-text',
  components: { UiCheck, UiCodeView, UiText },
  setup () {
    const val = ref('')
    const disabled = ref(false)
    return { example, val, disabled }
  },
}
</script>

<style lang="scss">

.doc-text {
  &_row {
    padding: spacing(300);
    gap: 1em;
    display: flex;
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
