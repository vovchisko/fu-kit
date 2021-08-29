<template>
  <button
      v-bind="$attrs"
      :type="$attrs.type || 'button'"
      class="ui-button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'fu-button',
}
</script>
<style lang="scss">
:root {
  --ui-button-bg: #{pal($pal-ui)};
  --ui-button-bg-disabled: #{pal($pal-ui, .5)};
  --ui-button-text: #{pal($pal-bg)};
  --ui-button-border-radius: var(--ui-border-radius);
  --ui-button-border-w: var(--ui-border-w);
}
</style>
<style lang="scss" scoped>
.ui-button {
  @include typo(h200, bold);
  @include spacing-padding(sp200, sp400);

  font-family: var(--typo-font-text);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: var(--ui-height);
  cursor: pointer;
  color: var(--ui-button-text);
  border-width: var(--ui-button-border-w);
  border-style: solid;
  border-color: var(--ui-button-bg);
  border-radius: var(--ui-button-border-radius);
  background: var(--ui-button-bg);

  &:disabled {
    cursor: not-allowed;
    background: var(--ui-button-bg-disabled);
  }
}
</style>
