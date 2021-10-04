<template>
  <div class="doc-select">
    <div class="doc-select_row">
      <label>Boring Select</label>
      <fu-select v-model="val">
        <option v-for="i in list" :value="i.value">{{ i.label }}</option>
      </fu-select>
    </div>

    <div class="doc-select_row brand">
      <label>Fancy select with search</label>
      <fu-select-x v-model="val" :options="list" />
    </div>

    <div class="doc-select_row positive">
      <label>Fancy select with search</label>
      <fu-select-x v-model="val" :options="list" />
    </div>

    <div class="doc-select_row negative">
      <label>Fancy select with search</label>
      <fu-select-x v-model="val" :options="list" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import FuButton  from '../../lib-components/FuButton.vue'
import FuSelect  from '../../lib-components/FuSelect.vue'
import FuSelectX from '../../lib-components/FuSelectX.vue'

export default {
  name: 'doc-buttons',
  components: { FuSelectX, FuSelect, FuButton },
  setup () {
    const val = ref('val1')
    const list = [
      { value: 'val1', label: 'label 1' },
      { value: 'val2', label: 'label 2' },
      { value: 'val3', label: 'label 3' },
    ]
    return { val, list }
  },
}
</script>

<style scoped lang="scss">
@import "../../../scss";

.doc-select {
  display: flex;
  flex-direction: column;
  gap: spacing(300);
}
</style>