<template>
  <div class="doc-select">
    <div class="doc-select_row">
      <fu-select v-model="val">
        <option v-for="i in list" :value="i.value">{{ i.label }}</option>
      </fu-select>
      <fu-select-x v-model="val" :options="list" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import FuButton  from '@/components/FuButton.vue'
import FuSelect  from '@/components/FuSelect.vue'
import FuSelectX from '@/components/FuSelectX.vue'

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
.select {
  .row {
    @include spacing-padding(300);
    gap: 1em;
    display: flex;
  }
  .primary {
    // default
  }
  .secondary {
    --button-pal: #{pal(secondary)};
  }
  .positive {
    --button-pal: #{pal(positive)};
  }
  .warning {
    --button-pal: #{pal(warning)};
  }
  .negative {
    --button-pal: #{pal(negative)};
  }
}
</style>