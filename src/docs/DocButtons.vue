<template>
  <div class="buttons">
    <div class="row">
      <fu-button>default</fu-button>
      <fu-button class="primary">primary</fu-button>
      <fu-button class="secondary">secondary</fu-button>
      <fu-button class="positive">positive</fu-button>
      <fu-button class="warning">warning</fu-button>
      <fu-button class="negative">negative</fu-button>
      <fu-button disabled>disabled</fu-button>
    </div>
    <div class="row">
      <fu-button hollow>default</fu-button>
      <fu-button hollow class="primary">primary</fu-button>
      <fu-button hollow class="secondary">secondary</fu-button>
      <fu-button hollow class="positive">positive</fu-button>
      <fu-button hollow class="warning">warning</fu-button>
      <fu-button hollow class="negative">negative</fu-button>
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

  .brand {
    --button-pal: var(--pal-brand);
  }

  .primary {
    --button-pal: var(--pal-primary);
  }

  .secondary {
    --button-pal: var(--pal-secondary);
  }

  .positive {
    --button-pal: var(--pal-positive);
  }

  .warning {
    --button-pal: var(--pal-warning);
  }

  .negative {
    --button-pal: var(--pal-negative);
  }
}
</style>