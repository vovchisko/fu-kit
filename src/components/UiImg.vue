<template>
  <div class="ui-img">
    <img :src="src"
         :alt="alt"
         @load="isLoaded = true"
         @error="err = true"
         class="ui-img_image"
         :class="{'_loading': !isLoaded}"
    />
    <div v-if="!isLoaded && !err" class="ui-img_overlay">...</div>
    <div v-if="err" class="ui-img_overlay _err">Ops!<br />Failed to load image.</div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ui-img',
  props: {
    src: String,
    alt: String,
  },
  setup () {
    const isLoaded = ref(false)
    const err = ref(false)

    return { err, isLoaded }
  },
}


</script>

<style scoped lang="scss">
.ui-img {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  position: relative;
  object-fit: cover;
  overflow: inherit;

  &_overlay {
    @include typo(100);

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    &._err {
      padding: spacing(200, 300);
      color: var(--pal-negative-acc);
      background: rgba(var(--rgb-negative), 0.3);
    }
  }

  &_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: inherit;
    transition: all linear var(--ui-transition);

    &._loading {
      opacity: 0;
    }
  }
}
</style>
