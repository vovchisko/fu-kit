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
  --fu-button-bg: #{pal(primary)};
  --fu-button-bg-disabled: #{pal(primary, .3)};
  --fu-button-text: #{color(light)};
  --fu-button-border-color: var(--fu-button-bg);
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
  color: var(--fu-button-text);
  border-width: var(--lt-ui-border-w);
  border-style: solid;
  border-color: var(--fu-button-bg);
  border-radius: var(--lt-ui-border-r);
  background: var(--fu-button-bg);
  transition: var(--fu-ui-transition);

  &:active {
    transform: translateY(2px);
    transition-duration: 50ms;
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--fu-button-bg-disabled);
    border-style: dashed;
  }

  &:hover {
    text-decoration: none;
    box-shadow: 0 3px 15px -8px var(--fu-button-bg);
  }
}
</style>
