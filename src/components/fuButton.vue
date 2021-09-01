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
  name: 'ui-button',
}
</script>

<style lang="scss" scoped>
.ui-button {
  background: deeppink;
  color: white;
  border: 0 none;
}
</style>
