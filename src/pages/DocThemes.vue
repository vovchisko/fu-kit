<template>
  <div class="doc-themes">
    <pre>selected theme: {{ UI.state.browser }}</pre>
    <pre>browser preferred theme: {{ UI.state.browser }}</pre>
    <pre>actual theme: {{ UI.state.actual }}</pre>

    <ui-select v-model="UI.selected" @input="UI.selectTheme($event.target.value)">
      <option :value="''">auto</option>
      <option :value="UI.THEMES.LIGHT">light</option>
      <option :value="UI.THEMES.DARK">dark</option>
      <option :value="UI.THEMES.CUSTOM">custom</option>
    </ui-select>

    <ui-code-view label="Example">{{ example }}</ui-code-view>

    <h1>Theme: {{ UI.state.actual }}</h1>

    <div class="doc-button_row">
      <ui-button class="primary">primary</ui-button>
      <ui-button class="secondary">secondary</ui-button>
      <ui-button class="positive">positive</ui-button>
      <ui-button class="warning">warning</ui-button>
      <ui-button class="negative">negative</ui-button>
    </div>
    <div class="doc-button_row">
      <ui-button class="primary" hollow>primary</ui-button>
      <ui-button class="secondary" hollow>secondary</ui-button>
      <ui-button class="positive" hollow>positive</ui-button>
      <ui-button class="warning" hollow>warning</ui-button>
      <ui-button class="negative" hollow>negative</ui-button>
    </div>
    <div class="doc-button_row">
      <ui-button naked class="primary" hollow>primary</ui-button>
      <ui-button naked class="secondary" hollow>secondary</ui-button>
      <ui-button naked class="positive" hollow>positive</ui-button>
      <ui-button naked class="warning" hollow>warning</ui-button>
      <ui-button naked class="negative" hollow>negative</ui-button>
    </div>
    <div class="doc-button_row">
      <ui-button disabled class="primary" hollow>primary</ui-button>
      <ui-button disabled class="secondary" hollow>secondary</ui-button>
      <ui-button disabled class="positive" hollow>positive</ui-button>
      <ui-button disabled class="warning" hollow>warning</ui-button>
      <ui-button disabled class="negative" hollow>negative</ui-button>
    </div>

    <div class="doc-themes">
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

  </div>
</template>

<script>
import UiButton     from '../components/UiButton.vue'
import UiButtonLink from '../components/UiButtonLink.vue'
import UiCodeView   from '../components/UiCodeView.vue'
import UiIcon       from '../components/UiIcon.vue'
import UiSelect     from '../components/UiSelect.vue'
import { UI }       from './ui.js'

const example = ``

export default {
  name: 'doc-themes',
  components: { UiSelect, UiCodeView, UiButton, UiIcon, UiButtonLink },
  setup () {
    return { example, UI }
  },
}
</script>

<style lang="scss">
.doc-themes {
  &_row {
    padding: spacing(300);

    gap: 1em;
    display: flex;
  }
}
</style>
