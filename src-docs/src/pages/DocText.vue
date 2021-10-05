<template>
  <div class="doc-text">
    <div class="doc-text_row">
      <fu-text v-model="val" placeholder="placeholder" />
      <fu-text class="secondary" v-model="val" placeholder="placeholder" />
      <fu-text class="brand" v-model="val" placeholder="placeholder" />
      <fu-text disabled v-model="val" placeholder="placeholder" />
    </div>
    <div class="doc-text_row">
      <fu-text v-model="val" placeholder="disabled placeholder" class="doc-sandbox_row-text">
        <template #left>
          <p class="icon"> ❤️</p>
        </template>
        <template #right>
          <p class="icon"> ❤️</p>
        </template>
      </fu-text>
    </div>
    <fu-code-view label="Example">{{ example }}</fu-code-view>
  </div>
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
    const val = ref('')
    return { example, val }
  },
}
</script>

<style lang="scss">

.doc-text {
  &_row {
    @include spacing-padding(300);
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