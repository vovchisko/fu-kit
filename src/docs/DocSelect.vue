<template>
  <div class="buttons">
    <div class="row">
      <fu-select v-model="val" label="Regular Select">
        <option v-for="i in list" :value="i.value">{{ i.label }}</option>
      </fu-select>
    </div>
    <div class="row">
      <fu-select-x v-model="val" :options="list" label="Fancy Select" />
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
    const val = ref('Regular select')
    const list = [
      { value: 'value 1', label: 'label 1' },
      { value: 'value 2', label: 'label 2' },
      { value: 'value 3', label: 'label 3' },
    ]
    return { val, list }
  },
}
</script>

<style scoped lang="scss">
.buttons {
  .row {
    @include spacing-padding(sp300);

    gap: 1em;
    max-width: 13em;
    display: flex;
  }
  .primary {
    // default
  }
  .secondary {
    --button-bg: #{pal(secondary)};
  }
  .success {
    --button-bg: #{pal(success)};
  }
  .warning {
    --button-bg: #{pal(warning)};
  }
  .danger {
    --button-bg: #{pal(danger)};
  }
}
</style>