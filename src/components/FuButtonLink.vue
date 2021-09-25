<template>
  <button
      v-bind="{
        ...$attrs,
        type: $attrs.type || 'button',
        class: 'fu-button-link',
      }"
      @mouseup="mUp"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'fu-button-link',
  props: {
    hollow: { type: Boolean, default: false },
  },
  setup (props) {
    const mUp = (e) => e.target.blur()
    return { hollow: props.hollow, mUp }
  },
}
</script>

<style lang="scss">
:root {
  --button-link-pal: var(--pal-link);
  --button-link-pal-active: var(--pal-link-active);
  --button-link-disabled-pal: var(--pal-ui-disabled);
}
</style>

<style lang="scss" scoped>
.fu-button-link {
  @include typo(200);
  @include spacing-padding(0, 0);

  display: inline-block;
  font-weight: normal;
  box-sizing: border-box;
  cursor: pointer;
  font-family: var(--typo-font-text);
  border: 0 none;
  transition: var(--ui-transition);
  background: transparent;
  color: var(--button-link-pal);
  line-height: 1;
  will-change: box-shadow, transform;
  outline: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  text-decoration: underline;

  & > * {
    pointer-events: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:focus {
    color: var(--button-link-pal-active);
    text-decoration: underline dashed;
  }

  &:active {
    color: var(--button-link-pal-active);
    text-decoration: underline dashed;
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--pal-link-active);
  }
}
</style>
