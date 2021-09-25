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
      <fu-button class="primary">primary buttons with a long text inside</fu-button>
    </div>

    <fu-code-view label="Example">{{ example }}</fu-code-view>
  </div>
</template>

<script>
import FuButton   from '@/components/FuButton.vue'
import FuCodeView from '@/components/FuCodeView.vue'

const example = `
nope
`

export default {
  name: 'doc-buttons',
  components: { FuCodeView, FuButton },
  setup () {
    return { example }
  },
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
    --button-pal: #{pal(secondary)};
  }

  .success {
    --button-pal: #{pal(success)};
  }

  .warning {
    --button-pal: #{pal(warning)};
  }

  .danger {
    --button-pal: #{pal(danger)};
  }
}
</style>