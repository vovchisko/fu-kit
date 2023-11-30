<template>
  <div class="doc-themes">

    <h2>Theme: {{ UI.state.selected || 'auto' }}</h2>

    <p>// todo: theme generator?</p>

  </div>
</template>

<script>
import UiButton from '../components/UiButton.vue'
import { UI }   from './ui.js'

const example = ``

export default {
  name: 'themes',
  components: { UiButton },
  setup () {
    return { example, UI }
  },
}
</script>

<style lang="scss">
.doc-themes {

}
</style>
