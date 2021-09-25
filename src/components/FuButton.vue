<template>
  <button v-bind="{
        ...$attrs,
        type: $attrs.type || 'button',
        class: 'fu-button' + (hollow ? ' _hollow' : ''),
      }"
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
    return { hollow: props.hollow }
  },
}
</script>

<style lang="scss">
:root {
  --button-color: #{pal(primary)};
  --button-color-disabled: #{pal(ui-disabled)};
  --button-text: #{pal-acc(primary)};
  --button-border-color: #{pal(ui-disabled-border)};
  --button-border-sytyle: var(--pal-ui-disabled-border-style);
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
  min-height: var(--lt-ui-h);
  border-width: var(--lt-ui-border-w);
  border-style: solid;
  border-color: var(--button-color);
  border-radius: var(--lt-ui-border-r);
  transition: var(--ui-transition);
  background: var(--button-color);
  color: var(--button-text);
  line-height: 1;

  &:hover:not(:disabled) {
    text-decoration: none;
    box-shadow: 0 3px 12px -6px var(--button-color);
  }

  &:hover:not(:disabled):active {
    transform: translateY(2px);
    transition-duration: 30ms;
    box-shadow: 0 3px 4px -2px var(--button-color);
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--button-color-disabled);
    border-color: var(--button-border-color);
    border-style: var(--button-border-sytyle);
    box-shadow: none;
  }

  &._hollow {
    background: transparent;
    color: var(--button-color);
    &:disabled {
      color: var(--button-color-disabled);
    }

    &:hover:not(:disabled) {
      box-shadow: 0 3px 10px -6px var(--button-color);
      color: var(--button-color);
    }

    &:hover:not(:disabled):active {
      box-shadow: 0 2px 4px -2px var(--button-color);
    }
  }
}
</style>
