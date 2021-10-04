<template>
  <button
      v-bind="{
        ...$attrs,
        type: $attrs.type || 'button',
        class: 'fu-button' + (hollow ? ' _hollow' : ''),
      }"
      @mouseup="mUp"
  >
    <slot />
  </button>
</template>

<script>
console.log('ui-button!')

import { defineComponent } from 'vue'

export default /*#__PURE__*/defineComponent({
  name: 'fu-button',
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

.fu-button {
  @include typo(200);
  @include spacing-padding(300, 400);

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  font-family: var(--typo-font-text);
  min-height: var(--ui-lt-h);
  border-width: var(--ui-lt-border-width);
  border-style: var(--ui-lt-border-style);
  border-color: var(--ui-pal);
  border-radius: var(--ui-lt-border-radius);
  transition: var(--ui-transition);
  background: var(--ui-pal);
  color: var(--ui-pal-acc);
  line-height: 1;
  will-change: box-shadow, transform;

  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > * {
    pointer-events: none;
  }

  &:hover {
    text-decoration: none;
    box-shadow: 0 4px 12px -4px var(--ui-pal);
  }

  &:focus {
    box-shadow: 0 4px 12px -4px var(--ui-pal);
  }

  &:active {
    transform: translateY(2px);
    transition-duration: 20ms;
    box-shadow: 0 3px 4px -2px var(--ui-pal);
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--ui-pal-disabled);
    border-color: var(--ui-pal-disabled-border);
    border-style: var(--ui-lt-disabled-border-style);
    color: var(--ui-pal-disabled-border);
    box-shadow: none;
  }

  &._hollow {
    background: transparent;
    color: var(--ui-pal);

    &:hover {
      box-shadow: 0 3px 10px -4px var(--ui-pal);
      color: var(--ui-pal);
    }

    &:focus {
      box-shadow: 0 3px 10px -4px var(--ui-pal);
    }

    &:active {
      box-shadow: 0 1px 4px -2px var(--ui-pal);
    }

    &:disabled {
      color: var(--ui-pal-disabled-border);
      box-shadow: none;
    }
  }
}
</style>
