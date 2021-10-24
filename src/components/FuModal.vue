<template>
  <div class="fu-modal" :class="{'_shown':isOpen}" @click.self="$emit('close')">
    <transition name="bounce">
      <div class="fu-modal_window" v-if="isOpen">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'fu-modal',
  emits: [ 'close' ],
  props: {
    isOpen: { type: Boolean, default: false },
  },
  // todo: lock global scroll when opened
}
</script>

<style scoped lang="scss">
@import "../../scss";

.fu-modal {
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
  padding: spacing(300);

  &._shown {
    background: var(--pal-overlay);
    visibility: visible;
    pointer-events: unset;
  }

  &._shown {
    background: var(--pal-overlay);
    visibility: visible;
    pointer-events: unset;
  }

  &_window {
    @include scrollbar-awesome();

    margin: auto;
    border-radius: var(--ui-lt-border-radius);
    background: var(--pal-bg);
    max-width: 100vw;
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
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>