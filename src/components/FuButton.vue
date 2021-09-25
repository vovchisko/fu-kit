<template>
  <button
      v-bind="{
        ...$attrs,
        type: $attrs.type || 'button',
        class: 'fu-button' + (hollow ? ' _hollow' : ''),
        style: $attrs.style + 'oh my'
      }"
      @mouseup="mUp"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'fu-button',
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
  --button-pal: #{pal(primary)};
  --button-pal-text: #{pal(acc-primary)};
  --button-pal-shadow: #{pal(acc-primary)};
  --button-disabled-pal: #{pal(ui-disabled)};
  --button-disabled-pal-border: var(--pal-ui-disabled-border);
  --button-disabled-border-style: var(--ui-lt-disabled-border-style);
}
</style>

<style lang="scss" scoped>
.fu-button {
  @include typo(200);
  @include spacing-padding(200, 400);

  display: flex;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  font-family: var(--typo-font-text);
  min-height: var(--ui-lt-h);
  border-width: var(--ui-lt-border-width);
  border-style: var(--ui-lt-border-style);
  border-color: var(--button-pal);
  border-radius: var(--ui-lt-border-radius);
  transition: var(--ui-transition);
  background: var(--button-pal);
  color: var(--button-pal-text);
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
    box-shadow: var(--button-hover-shadow, 0 3px 10px -4px var(--button-pal));
  }

  &:focus {
    box-shadow: var(--button-hover-shadow, 0 3px 10px -4px var(--button-pal));
  }

  &:active {
    transform: translateY(2px);
    transition-duration: 20ms;
    box-shadow: var(--button-hover-shadow, 0 2px 4px -2px var(--button-pal));
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--button-disabled-pal);
    border-color: var(--button-disabled-pal-border);
    border-style: var(--button-disabled-border-style);
    box-shadow: none;
  }

  &._hollow {
    background: transparent;
    color: var(--button-pal);

    &:hover {
      box-shadow: 0 3px 10px -6px var(--button-pal);
      color: var(--button-pal);
    }
    &:focus {
      box-shadow: var(--button-hover-shadow, 0 3px 10px -6px var(--button-pal));
    }
    &:active {
      box-shadow: 0 2px 4px -2px var(--button-pal);
    }

    &:disabled {
      color: var(--button-disabled-pal);
      box-shadow: none;
    }
  }
}
</style>
