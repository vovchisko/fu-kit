<template>
  <div
      class="fu-dropdown-item"
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
export default {
  name: 'fu-dropdown-item',
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
}
</script>

<style lang="scss" scoped>
@import "../../scss";

.fu-dropdown-item {
  &:first-child {
    margin-top: spacing(200);
  }

  &:last-child {
    margin-bottom: spacing(200);
  }

  padding: spacing(200) calc(#{spacing(200)} + 1px);
  display: flex;
  align-items: center;

  &._interactive {
    color: var(--ui-pal-text);
    cursor: pointer;

    &:hover {
      color: var(--ui-pal-acc);
      background-color: var(--ui-pal);
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

  &._selected {
    color: black;
    background-color: orange;
  }
}
</style>
