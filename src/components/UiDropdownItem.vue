<template>
  <div
      class="ui-dropdown-item"
      :class="{
      '_interactive': interactive || autoClose,
      '_active': active,
    }"
      @click="handleClick"
  >
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ui-dropdown-item',
  props: {
    autoClose: { type: Boolean, default: false },
    interactive: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    look: { type: [ String ], default: 'default' },
  },
  methods: {
    handleClick () {
      if (this.autoClose) {
        this.$parent.close()
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import "../../scss";

.ui-dropdown-item {
  padding: spacing(200) spacing(400);
  display: flex;
  align-items: center;
  min-height: var(--ui-lt-h);

  &._interactive {
    color: var(--ui-pal-text);
    cursor: pointer;

    &:hover {
      color: var(--ui-pal);
    }

    &:focus,
    &:active {
      outline: none;
    }
  }

  &._active {
    outline: none;
    color: var(--ui-pal);

    &:hover {
    }
  }
}
</style>
