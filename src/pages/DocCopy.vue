<template>
  <div class="doc-img">
    <div style="display: flex; gap: 1em; align-items: center">
      <ui-copy value="value">Copy Me</ui-copy>
    </div>
  </div>
</template>

<script>
import UiCopy from '../components/UiCopy.vue'

const example = `<ui-copy value="value">Copy Me</ui-copy>`

const pic = '/img/splash-screen.jpg'


export default {
  name: 'doc-img',
  components: { UiCopy },
  setup () {
    return { example, pic }
  },
}
</script>

<style lang="scss">
.doc-img {

}
</style>
