<template>
  <div class="home">
    <fu-button>Btn!</fu-button>
    <fu-text v-model="test" />
  </div>
</template>

<script>
import { ref }  from 'vue'

import FuButton from '@/components/FuButton.vue'
import FuText   from '@/components/FuText.vue'

export default {
  name: 'Home',
  components: {
    FuText,
    FuButton,
  },
  setup () {
    const test = ref('')
  },
}
</script>
