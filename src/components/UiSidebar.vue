<template>
  <div :class="{'_shown':isOpen}" class="ui-sidebar" @mousedown.self="$emit('close')">
    <transition name="bounce">
      <div v-if="isOpen" class="ui-sidebar_content">
        <button v-if="showClose" class="ui-sidebar_close" @click="$emit('close')">
          <ui-icon name="cross" />
        </button>
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import UiIcon from './UiIcon.vue'

export default defineComponent({
  name: 'ui-sidebar',
  components: { UiIcon },
  emits: [ 'close' ],
  props: {
    isOpen: { type: Boolean, default: false },
    // todo: right side as well
    side: { type: String, default: 'right' },
    showClose: { type: Boolean, default: false },
  },
  watch: {
    isOpen (val) {
      if (val) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = 'visible'
    },
  },
})
</script>

<style lang="scss">
@import "../../scss";

html {
  --ui-sidebar-max-w: 45vw;
  --ui-sidebar-min-w: 25vw;
}
</style>

<style lang="scss" scoped>
@import "../../scss";

.ui-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: var(--lt-z-nav);
  background-color: transparent;
  transition-timing-function: linear;
  transition-duration: 200ms;
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
    border-top-left-radius: var(--lt-border-radius);
    border-bottom-left-radius: var(--lt-border-radius);
    background: var(--pal-white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    max-width: var(--ui-sidebar-max-w);
    min-width: var(--ui-sidebar-min-w);
    transform-origin: 100% 50%;
    width: var(--ui-sidebar-width, auto);
  }

  &_close {
    --icon-color: var(--pal-grey800);

    position: absolute;
    top: spacing(500);
    left: spacing(500);
    border: none;
    padding: 0;
    background: transparent;
    cursor: pointer;
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
