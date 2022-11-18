<template>
  <div :class="{'_shown':isOpen}" class="ui-modal" @click.self="$emit('close')">
    <transition name="bounce">
      <div v-if="isOpen" class="ui-modal_window">
        <ui-button-link class="ui-modal_window-close" @click="$emit('close')">
          <ui-icon class="ui-modal_window-close-icon" name="cross" />
        </ui-button-link>
        <slot />
      </div>
    </transition>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

import UiButtonLink from './UiButtonLink.vue'
import UiIcon       from './UiIcon.vue'

export default defineComponent({
  name: 'ui-modal',
  components: { UiButtonLink, UiIcon },
  emits: [ 'close' ],
  props: {
    isOpen: { type: Boolean, default: false },
  },
  watch: {
    isOpen (val) {
      if (val) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = 'visible'
    },
  },
})
</script>

<style lang="scss" scoped>
@import "../../scss";

.ui-modal {
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

  &_window {
    @include scrollbar-awesome();

    position: relative;
    margin: auto;
    border-radius: var(--ui-lt-border-radius);
    background: var(--pal-white);
    max-width: 100vw;

    &-close {
      position: absolute;
      right: spacing(400);
      top: spacing(400);
      cursor: pointer;

      &-icon {
        --icon-size: 24px;
        --icon-color: var(--pal-grey800);
      }
    }
  }
}

.bounce-enter-active {
  animation: slide-down 200ms;
}

.bounce-leave-active {
  animation: slide-down 200ms reverse;
}

@keyframes slide-down {
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