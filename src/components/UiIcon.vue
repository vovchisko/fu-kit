<template>
  <svg v-bind="{ ...$attrs }">
    <use :href="`#${name}`"></use>
  </svg>
</template>

<script>
/**
 * CSS vars:
 *  - --ui-color: color of the icon
 *  - --ui-size: size of the icon
 */
export default {
  name: 'ui-icon',
  props: {
    name: { type: [ String ], required: true },
  },
}
</script>

<style lang="scss" scoped>
svg {
  display: block;
  height: var(--icon-size, 24px);
  width: var(--icon-size, 24px);
  min-width: var(--icon-size, 24px);
  stroke-width: 2px;
}
</style>
