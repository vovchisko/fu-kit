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
      <fu-button hollow class="primary">primary</fu-button>
      <fu-button hollow class="secondary">secondary</fu-button>
      <fu-button hollow class="success">secondary</fu-button>
      <fu-button hollow class="warning">warning</fu-button>
      <fu-button hollow class="danger">danger</fu-button>
      <fu-button hollow disabled>disabled</fu-button>
    </div>
    <div class="row">
      <fu-button link-like class="primary">primary</fu-button>
      <fu-button link-like class="secondary">secondary</fu-button>
      <fu-button link-like class="success">secondary</fu-button>
      <fu-button link-like class="warning">warning</fu-button>
      <fu-button link-like class="danger">danger</fu-button>
      <fu-button link-like disabled>disabled</fu-button>
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
    @include spacing-padding(300);

    gap: 1em;
    max-width: 13em;
    display: flex;
  }

  .primary {

  }

  .secondary {
    --button-color: #{pal(secondary)};
  }

  .success {
    --button-color: #{pal(success)};
  }

  .warning {
    --button-color: #{pal(warning)};
  }

  .danger {
    --button-color: #{pal(danger)};
  }
}
</style>