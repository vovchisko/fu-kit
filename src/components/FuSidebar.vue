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
export default {
  name: 'fu-sidebar',
  emits: [ 'close' ],
  props: {
    isOpen: { type: Boolean, default: false },
    // todo: right side as well
    side: { type: String, default: 'right' },
  },
}
</script>

<style lang="scss">
@import "../../scss";

:root {
  --ui-sidebar-max-w: 45vw;
  --ui-sidebar-min-w: 25vw;
}
</style>

<style scoped lang="scss">
@import "../../scss";

.fu-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: var(--lt-z-nav);
  background-color: transparent;
  transition-timing-function: linear;
  transition-duration: 600ms;
  transition-property: background-color, visibility;
  pointer-events: none;
  visibility: hidden;

  &._shown {
    background: var(--pal-overlay);
    visibility: visible;
    pointer-events: unset;
  }

  &_content {
    @include scrollbar-awesome();

    overflow: auto;
    position: absolute;
    left: auto;
    top: 0;
    right: 0;
    bottom: 0;
    background: var(--pal-bg);
    max-width: var(--ui-sidebar-max-w);
    min-width: var(--ui-sidebar-min-w);
    transform-origin: 100% 50%;
  }
}

.bounce-enter-active {
  animation: slide-right 200ms;
}

.bounce-leave-active {
  animation: slide-right 200ms reverse;
}

@keyframes slide-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>