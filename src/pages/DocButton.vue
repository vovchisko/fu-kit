<template>
  <div class="doc-button">
    <div class="doc-button_row">
      <fu-button>default</fu-button>
      <fu-button class="primary">primary</fu-button>
      <fu-button class="secondary">secondary</fu-button>
      <fu-button class="positive">positive</fu-button>
      <fu-button class="warning">warning</fu-button>
      <fu-button class="negative">negative</fu-button>
      <fu-button disabled>disabled</fu-button>
    </div>
    <div class="doc-button_row">
      <fu-button hollow>default</fu-button>
      <fu-button hollow class="primary">primary</fu-button>
      <fu-button hollow class="secondary">secondary</fu-button>
      <fu-button hollow class="positive">positive</fu-button>
      <fu-button hollow class="warning">warning</fu-button>
      <fu-button hollow class="negative">negative</fu-button>
      <fu-button hollow disabled>disabled</fu-button>
    </div>
    <div class="doc-button_row">
      <fu-button class="primary">
        primary buttons<br />with a long text inside
      </fu-button>

      <fu-button class="secondary">
        <h4>HUGE TEXT</h4>
      </fu-button>
    </div>

    <fu-code-view label="Example">{{ example }}</fu-code-view>
  </div>
</template>

<script>
import { FuButton, FuCodeView } from '../entry.js'

const example = `
/// vue
<fu-button hollow>default</fu-button>
<fu-button hollow class="primary">primary</fu-button>

/// css
.primary {
  --button-pal: var(--pal-primary);
}
`

export default {
  name: 'doc-button',
  components: { FuCodeView, FuButton },
  setup () {
    return { example }
  },
}
</script>

<style lang="scss">
.doc-button {
  &_row {
    @include spacing-padding(300);
    gap: 1em;
    display: flex;
  }
}
</style>