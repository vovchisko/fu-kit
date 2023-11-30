<template>
  <div class="doc-select">
    <div class="doc-select_row">
      <label>Boring Select</label>
      <ui-select v-model="val">
        <option v-for="i in list" :value="i.value">{{ i.label }}</option>
      </ui-select>
    </div>

    <div class="doc-select_row primary">
      <label>Fancy select with search</label>
      <ui-select-x v-model="val" :options="list" />
    </div>

    <div class="doc-select_row positive">
      <label>Fancy select with search</label>
      <ui-select-x v-model="val" :options="list" />
    </div>

    <div class="doc-select_row negative">
      <label>Fancy select with search</label>
      <ui-select-x v-model="val" :options="list" />
    </div>
  </div>
</template>

<script>
import { ref }                 from 'vue'
import { UiSelect, UiSelectX } from '../entry.js'


export default {
  name: 'doc-buttons',
  components: { UiSelectX, UiSelect },
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

<style lang="scss">

.doc-select {
  display: flex;
  flex-direction: column;
  gap: spacing(300);

  & label {
    @include typo(200);
    margin: spacing(200, 0);
  }
}
</style>