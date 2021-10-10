<template>
  <div class="doc-sandbox">
    <div class="doc-sandbox_row" v-for="c in classes" :class="c">
      <fu-check v-model="isChecked">Check</fu-check>
      <fu-check switch-like v-model="isSwitched">Switcher</fu-check>
      <fu-button class="doc-sandbox_row-btn">{{ c }}</fu-button>
      <fu-button hollow class="doc-sandbox_row-btn">{{ c }}</fu-button>
      <fu-button-link class="doc-sandbox_row-btn">{{ c }}</fu-button-link>
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

    <div class="doc-sandbox_row">
      <fu-check disabled v-model="isChecked">Check</fu-check>
      <fu-check switch-like disabled v-model="isSwitched">Switcher</fu-check>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'

import FuButton     from '@/lib-components/FuButton.vue'
import FuSelect     from '@/lib-components/FuSelect.vue'
import FuSelectX    from '@/lib-components/FuSelectX.vue'
import FuText       from '@/lib-components/FuText.vue'
import FuCodeView   from '@/lib-components/FuCodeView.vue'
import FuCheck      from '@/lib-components/FuCheck.vue'
import FuButtonLink from '@/lib-components/FuButtonLink.vue'

export default {
  name: 'app',
  components: { FuButtonLink, FuCheck, FuCodeView, FuText, FuSelectX, FuSelect, FuButton },
  setup () {
    const classes = [ 'default', 'primary', 'brand', 'secondary', 'positive', 'warning', 'negative' ]
    const textVal = ref('')
    const isChecked = ref(false)
    const isSwitched = ref(false)

    const selectVal = ref('val1')
    const list = [
      { value: 'val1', label: 'label 1' },
      { value: 'val2', label: 'label 2' },
      { value: 'val3', label: 'label 3' },
    ]
    return { textVal, classes, selectVal, list, isChecked, isSwitched }
  },
}
</script>

<style lang="scss">
.doc-sandbox {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: spacing(500);

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