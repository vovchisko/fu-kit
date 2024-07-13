<template>
  <div class="doc-button">
    <div class="doc-button_row">
      <ui-button :disabled="disabled">default</ui-button>
      <ui-button :disabled="disabled" class="primary">primary</ui-button>
      <ui-button :disabled="disabled" class="secondary">secondary</ui-button>
      <ui-button :disabled="disabled" class="positive">positive</ui-button>
      <ui-button :disabled="disabled" class="warning">warning</ui-button>
      <ui-button :disabled="disabled" class="negative">negative</ui-button>
      <ui-button disabled>disabled</ui-button>
    </div>
    <div class="doc-button_row">
      <ui-button hollow>default</ui-button>
      <ui-button class="primary" hollow>primary</ui-button>
      <ui-button class="secondary" hollow>secondary</ui-button>
      <ui-button class="positive" hollow>positive</ui-button>
      <ui-button class="warning" hollow>warning</ui-button>
      <ui-button class="negative" hollow>negative</ui-button>
      <ui-button disabled hollow>disabled</ui-button>
    </div>
    <div class="doc-button_row">
      <ui-button class="primary">
        primary buttons<br />with a long text inside
      </ui-button>

      <ui-button class="secondary">
        HUGE TEXT
      </ui-button>

      <ui-button naked>
        naked
      </ui-button>
    </div>
    <div class="doc-button_row">
      <ui-button :is-loading="isLoading" :disabled="disabled" @click="isLoading = !isLoading">
        <ui-icon name="cross" />
        <span>with loading</span>
      </ui-button>
      <ui-button :is-loading="isLoading" :disabled="disabled" class="negative" @click="isLoading = !isLoading">
        <ui-icon name="cross" />
        <span>with loading</span>
      </ui-button>
      <ui-button :is-loading="isLoading" :disabled="disabled" hollow @click="isLoading = !isLoading">
        <ui-icon name="cross" />
        <span>with loading</span>
      </ui-button>
      <ui-button :is-loading="isLoading" :disabled="disabled" class="negative" hollow @click="isLoading = !isLoading">
        <ui-icon name="cross" />
        <span>with loading</span>
      </ui-button>
      <ui-button :is-loading="isLoading" :disabled="disabled" naked @click="isLoading = !isLoading">
        <ui-icon name="cross" />
        <span>with loading</span>
      </ui-button>
    </div>

    <div class="doc-button_row">
      <ui-button-link>Button-link is here</ui-button-link>
    </div>

    <div class="doc-button_row">
      <ui-button-route :to="{name: ROUTE_NAMES.DOC_BUTTON}">Button Route</ui-button-route>
    </div>

    <ui-check v-model="disabled">disabled</ui-check>


    <ui-code-view label="Example">{{ example }}</ui-code-view>
  </div>
</template>

<script>
import { ref }       from 'vue'
import UiButton      from '../components/UiButton.vue'
import UiButtonLink  from '../components/UiButtonLink.vue'
import UiCodeView    from '../components/UiCodeView.vue'
import UiIcon        from '../components/UiIcon.vue'
import UiButtonRoute from '../components/UiButtonRoute.vue'

import { ROUTE_NAMES } from '../route-names.js'
import UiCheck         from '../components/UiCheck.vue'


const example = `
/// vue
<ui-button hollow>default</ui-button>
<ui-button hollow class="primary">primary</ui-button>

/// css
.primary {
  --button-pal: var(--pal-primary);
}
`

export default {
  name: 'doc-button',
  components: { UiCheck, UiButtonRoute, UiCodeView, UiButton, UiIcon, UiButtonLink },
  emits: [ 'click' ],
  setup () {
    const disabled = ref(false)

    const isLoading = ref(false)
    return { example, isLoading, ROUTE_NAMES, disabled }
  },
}
</script>

<style lang="scss">
.doc-button {
  &_row {
    padding: spacing(300);

    gap: 1em;
    display: flex;
  }
}
</style>
