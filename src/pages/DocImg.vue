<template>
  <div class="doc-img">


    <div style="display: flex; gap: 1em; align-items: center">
      <ui-img class="doc-img_pic" :src="pic"
              style="aspect-ratio: 16/8; height: 100px"
      />
      <ui-img class="doc-img_pic" :src="pic"
              style="aspect-ratio: 8/16; height: 300px"
      />
      <ui-img class="doc-img_pic" :src="pic"
              style="aspect-ratio: 1/1; height: 400px; object-fit: unset"
      />
      <ui-img class="doc-img_pic" :src="pic"
              style="aspect-ratio: 3/4; height: 300px"
      />
    </div>
    <hr>
  </div>
</template>

<script>
import UiImg from '../components/UiImg.vue'

const example = ``

const pic = '/src/assets/splash-screen.jpg'


export default {
  name: 'doc-img',
  components: { UiImg },
  setup () {
    return { example, pic }
  },
}
</script>

<style lang="scss">
.doc-img {

}
</style>
