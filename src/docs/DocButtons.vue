<template>
  <div class="buttons">
    <fu-button class="primary">primary</fu-button>
    <fu-button class="secondary">secondary</fu-button>
    <fu-button class="warning">warning</fu-button>
    <fu-button class="danger">danger</fu-button>
    <fu-button disabled>disabled</fu-button>
  </div>
</template>

<script>
import FuButton from '@/components/FuButton.vue'

export default {
  name: 'doc-buttons',
  components: { FuButton },
}
</script>

<style scoped lang="scss">
.buttons {
  display: flex;
  gap: 1em;

  .primary {
    // default
  }
  .secondary {
    --fu-button-bg: #{pal(secondary)};
  }
  .warning {
    --fu-button-bg: #{pal(warning)};
  }
  .danger {
    --fu-button-bg: #{pal(danger)};
  }
}
</style>