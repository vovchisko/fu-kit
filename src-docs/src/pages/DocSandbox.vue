<template>
  <div class="doc-sandbox">
    <div class="doc-sandbox_row" v-for="c in classes" :class="c">
      <fu-button class="doc-sandbox_row-btn">{{ c }}</fu-button>
      <fu-select v-model="selectVal">
        <option v-for="i in list" :value="i.value">{{ i.label }}</option>
      </fu-select>
      <fu-select-x v-model="selectVal" :options="list" />
      <fu-text class="doc-sandbox_row-text" v-model="textVal" :placeholder="c + ' placeholder'" />
    </div>

    <div class="doc-sandbox_row">
      <fu-button disabled class="doc-sandbox_row-btn">disabled</fu-button>
      <fu-text disabled v-model="textVal" placeholder="disabled placeholder" class="doc-sandbox_row-text" />
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
  name: 'doc-sandbox',
  components: {},
  setup () {
    const classes = [ 'default', 'primary', 'brand', 'secondary', 'positive', 'warning', 'negative' ]
    const textVal = ref('')

    const selectVal = ref('val1')
    const list = [
      { value: 'val1', label: 'label 1' },
      { value: 'val2', label: 'label 2' },
      { value: 'val3', label: 'label 3' },
    ]
    return { example, textVal, classes, selectVal, list }
  },
}
</script>

<style lang="scss">
.doc-sandbox {
  display: flex;
  flex-direction: column;
  gap: 1em;

  &_row {
    gap: 1em;
    display: flex;

    &-text {
      max-width: 15em;
    }

    &-btn {
      width: 8em;
    }
  }
}
</style>