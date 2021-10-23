<template>
  <div
      class="fu-dropdown"
      :class="{ '_is-open': !disabled && isOpen }"
      v-click-away="isOpen && handleClickaway"
  >
    <div class="fu-dropdown_trigger" @click="toggle">
      <slot />
    </div>

    <div v-if="!disabled && isOpen" class="fu-dropdown_content" ref="slotWrap">
      <slot name="content" :dropdownClose="close" />
    </div>
  </div>
</template>

<script>
// todo: rewrite to composition

import { directive as clickAway } from 'vue3-click-away'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'fu-dropdown',
  directives: { clickAway },
  props: {
    clickaway: { type: Boolean, default: true },
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

.fu-dropdown {
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
    @include spacing-padding(300, 0);

    overflow: auto;
    max-height: 30vh;
    max-width: 100vw;
    flex-direction: column;
    justify-content: stretch;
    border-width: var(--ui-lt-border-width);
    border-radius: var(--ui-lt-border-radius);
    border-color: var(--ui-pal);
    border-style: solid;
    position: absolute;
    left: 0;
    top: 100%;
    min-width: 100%;
    background: var(--ui-pal-bg);
    margin-top: spacing(200);
    z-index: var(--lt-z-pop);
  }
}
</style>
