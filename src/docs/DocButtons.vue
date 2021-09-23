<template>
  <div class="buttons">
    <div class="row">
      <fu-button class="primary">primary</fu-button>
      <fu-button class="secondary">secondary</fu-button>
      <fu-button class="success">secondary</fu-button>
      <fu-button class="warning">warning</fu-button>
      <fu-button class="danger">danger</fu-button>
      <fu-button disabled>disabled</fu-button>
    </div>
    <div class="row">
      <fu-button class="primary">primary buttons with a long text inside</fu-button>
    </div>
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