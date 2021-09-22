<template>
  <div class="fu-sidebar">
    <div class="fu-sidebar_overlay" :class="{'_shown': isOpen}" @click.self="$emit('close')"></div>
    <div class="fu-sidebar_content" :class="{'_shown': isOpen}">
      <slot />
    </div>
  </div>
</template>

<script>
import FuButton from './FuButton.vue'

export default {
  name: 'FuSidebar',
  emits: [ 'close' ],
  components: { FuButton },
  props: { isOpen: { type: Boolean, default: false } },
}
</script>

<style scoped lang="scss">
.fu-sidebar {
  &_overlay {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: var(--lt-z-modal-backdrop);
    background: pal(prime, 0.3);
    transition-timing-function: linear;
    transition-duration: 200ms;
    transition-property: opacity, visibility;
    will-change: opacity, visibility;
    visibility: hidden;
    opacity: 0;

    &._shown {
      opacity: 1;
      visibility: visible;
    }
  }

  &_content {
    @include scrollbar-awesome();

    overflow: auto;
    position: fixed;
    left: auto;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: var(--lt-z-modal);
    background: pal(bg);
    transition: transform ease-out 200ms;
    transform: translateX(101%);
    will-change: transform;
    max-width: 100vw;

    &._shown {
      transform: translateX(0);
    }
  }
}
</style>