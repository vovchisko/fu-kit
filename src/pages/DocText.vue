<template>
  <div class="doc-text">
    <div class="doc-text_row">
      <ui-text v-model="val" placeholder="placeholder" />
      <ui-text v-model="val" class="secondary" placeholder="placeholder" />
      <ui-text v-model="val" class="primary" placeholder="placeholder" />
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
    <ui-code-view label="Example">{{ example }}</ui-code-view>
  </div>
</template>

<script>
import { ref }                from 'vue'
import { UiCodeView, UiText } from '../entry.js'

const example = `
TBD
`

export default {
  name: 'doc-text',
  components: { UiCodeView, UiText },
  setup () {
    const val = ref('')
    return { example, val }
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
