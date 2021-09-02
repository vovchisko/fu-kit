<template>
  <div class="home">
    <fu-button>Btn!</fu-button>
    <fu-text />
  </div>
</template>

<script>
// @ is an alias to /src
import FuButton from '@/components/FuButton.vue'
import FuText   from '@/components/FuText.vue'

export default {
  name: 'Home',
  components: {
    FuText,
    FuButton,
  },
}
</script>
