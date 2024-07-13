<template>
  <button
      v-bind="{
        ...$attrs,
        type: $attrs.type || 'button',
        class: 'ui-button-link',
      }"
      @mouseup="mUp"
  >
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ui-button-link',
  props: {
    hollow: { type: Boolean, default: false },
  },
  setup (props) {
    const mUp = (e) => e.target.blur()
    return { hollow: props.hollow, mUp }
  },
})
</script>

<style lang="scss" scoped>
@import "../../scss";

.ui-button-link {
  @include typo(200);
  padding: spacing(0, 0);

  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  font-family: var(--typo-font-text);
  border: 0 none;
  transition: all var(--ui-transition);
  background: transparent;
  color: var(--pal-link);
  line-height: 1;
  will-change: box-shadow, transform;
  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;

  & > * {
    pointer-events: none;
  }

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    color: var(--pal-link-active);
    text-decoration: underline;
  }

  &:active {
    color: var(--pal-link-active);
    text-decoration: underline;
  }

  &:disabled {
    cursor: default;
    color: var(--ui-pal-disabled);
  }
}
</style>
