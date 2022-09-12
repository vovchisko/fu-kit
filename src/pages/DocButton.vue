<template>
  <div class="doc-button">
    <div class="doc-button_row">
      <ui-button>default</ui-button>
      <ui-button class="primary">primary</ui-button>
      <ui-button class="secondary">secondary</ui-button>
      <ui-button class="positive">positive</ui-button>
      <ui-button class="warning">warning</ui-button>
      <ui-button class="negative">negative</ui-button>
      <ui-button disabled>disabled</ui-button>
    </div>
    <div class="doc-button_row">
      <ui-button hollow>default</ui-button>
      <ui-button hollow class="primary">primary</ui-button>
      <ui-button hollow class="secondary">secondary</ui-button>
      <ui-button hollow class="positive">positive</ui-button>
      <ui-button hollow class="warning">warning</ui-button>
      <ui-button hollow class="negative">negative</ui-button>
      <ui-button hollow disabled>disabled</ui-button>
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
      <ui-button :is-loading="isLoading" @click="isLoading = !isLoading">
        <ui-icon name="gear" />
        <span>with loading</span>
      </ui-button>
      <ui-button class="negative" :is-loading="isLoading" @click="isLoading = !isLoading">
        <ui-icon name="gear" />
        <span>with loading</span>
      </ui-button>
      <ui-button hollow :is-loading="isLoading" @click="isLoading = !isLoading">
        <ui-icon name="gear" />
        <span>with loading</span>
      </ui-button>
      <ui-button hollow class="negative" :is-loading="isLoading" @click="isLoading = !isLoading">
        <ui-icon name="gear" />
        <span>with loading</span>
      </ui-button>
      <ui-button naked :is-loading="isLoading" @click="isLoading = !isLoading">
        <ui-icon name="gear" />
        <span>with loading</span>
      </ui-button>
    </div>

    <ui-code-view label="Example">{{ example }}</ui-code-view>
  </div>
</template>

<script>
import { ref }    from 'vue'
import UiButton   from '../components/UiButton.vue'
import UiCodeView from '../components/UiCodeView.vue'
import UiIcon     from '../components/UiIcon.vue'

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
  components: { UiCodeView, UiButton, UiIcon },
  setup () {
    const isLoading = ref(false)
    return { example, isLoading }
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
