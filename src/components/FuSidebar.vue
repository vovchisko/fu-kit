<template>
  <div class="fu-sidebar" :class="{'_shown':isOpen}" @click.self="$emit('close')">
    <transition name="bounce">
      <div class="fu-sidebar_content" v-if="isOpen">
        <slot />
      </div>
    </transition>
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
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: var(--lt-z-nav);
  background: var(--pal-overlay);
  transition-timing-function: linear;
  transition-duration: 600ms;
  transition-property: opacity, visibility;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;

  &._shown {
    opacity: 1;
    visibility: visible;
    pointer-events: unset;
  }

  &_content {
    @include scrollbar-awesome();

    overflow: auto;
    position: fixed;
    left: auto;
    top: 0;
    right: 0;
    bottom: 0;
    background: var(--pal-bg);
    max-width: 100vw;
    min-width: 25vw;
    transform-origin: 100% 50%;
  }
}

.bounce-enter-active {
  animation: bounce-in 200ms;
}

.bounce-leave-active {
  animation: bounce-in 200ms reverse;
}

@keyframes bounce-in {
  0% {
    transform: translateX(100%) scaleX(1);
  }
  100% {
    transform: translateX(0);
  }
}
</style>