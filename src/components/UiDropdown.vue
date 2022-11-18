<template>
  <div
      v-click-away="isOpen && handleClickaway"
      :class="{ '_is-open': !disabled && isOpen }"
      class="ui-dropdown"
  >
    <div class="ui-dropdown_trigger" @click="toggle">
      <slot :isOpen="!disabled && isOpen" />
    </div>

    <div v-if="!disabled && isOpen" ref="slotWrap" :class="{ _right: snapToRight }" class="ui-dropdown_content">
      <slot :dropdownClose="close" name="content" />
    </div>
  </div>
</template>

<script>
// todo: rewrite to composition

import { directive as clickAway } from 'vue3-click-away'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ui-dropdown',
  directives: { clickAway },
  props: {
    clickaway: { type: Boolean, default: true },
    snapToRight: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: [ 'open', 'close' ],
  data () {
    return {
      isOpen: false,
    }
  },

  watch: {
    isOpen (value) {
      this.$emit(value ? 'open' : 'close')
    },
  },

  methods: {
    handleClickaway (e) {
      /* v-on-click-outside don't recognize slots */
      const path = e.path || (e.composedPath && e.composedPath())
      if (path.includes(this.$refs.slotWrap)) return

      if (this.clickaway && this.isOpen) {
        this.toggle()
      }
    },
    toggle () {
      if (this.disabled) return
      this.isOpen = !this.isOpen
    },
    close () {
      this.isOpen = false
    },
  },
})
</script>

<style lang="scss" scoped>
@import "../../scss";

.ui-dropdown {
  @include typo(200);

  padding: 0;
  box-sizing: border-box;
  position: relative;

  &_trigger {
    display: flex;
    align-items: center;
    justify-content: stretch;
  }

  &_content {
    @include scrollbar-awesome();

    overflow: auto;
    min-width: 100%;
    max-width: 100vw;
    max-height: var(--ui-dropdown-max-height);
    flex-direction: column;
    justify-content: stretch;
    border-radius: var(--ui-lt-border-radius);
    position: absolute;
    top: 100%;
    background: var(--ui-pal-bg);
    margin-top: spacing(200);
    z-index: var(--lt-z-pop);
    background: var(--pal-white);
    box-shadow: 0 3px 11px rgba(var(--rgb-black), 0.2);

    &:not(._right) {
      left: 0;
    }

    &._right {
      right: 0;
    }
  }
}
</style>
