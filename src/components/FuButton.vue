<template>
  <button
      v-bind="$attrs"
      :type="$attrs.type || 'button'"
      :class="$props.linkLike ? 'fu-button-link' : 'fu-button'"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'fu-button',
  props: { linkLike: { type: Boolean, default: false } },
}
</script>

<style lang="scss">
:root {
  --button-bg: #{pal(primary)};
  --button-bg-disabled: #{pal(ui-disabled)};
  --button-text: #{color(light)};
  --button-border-color: #{pal(ui-disabled-border)};
  --button-border-sytyle: var(--pal-ui-disabled-border-style);
}
</style>

<style lang="scss" scoped>
.fu-button-link {
  background: transparent;
  color: pal(primary);
  border: 0 none;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: pal(info);
  }
}

.fu-button {
  @include typo(h200, 600);
  @include spacing-padding(sp200, sp400);

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  font-family: var(--typo-font-text);
  min-height: var(--lt-ui-h);
  color: var(--button-text);
  border-width: var(--lt-ui-border-w);
  border-style: solid;
  border-color: var(--button-bg);
  border-radius: var(--lt-ui-border-r);
  background: var(--button-bg);
  transition: var(--ui-transition);

  &:active {
    transform: translateY(2px);
    transition-duration: 50ms;
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--button-bg-disabled);
    border-color: var(--button-border-color);
    border-style: var(--button-border-sytyle);
    box-shadow: none;
  }

  &:hover:not(:disabled) {
    text-decoration: none;
    box-shadow: 0 3px 15px -6px var(--button-bg);
  }
}
</style>
