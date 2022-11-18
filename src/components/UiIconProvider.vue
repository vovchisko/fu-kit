<template>
  <svg data-icon-set="fu-kit" style="display: none;" xmlns="http://www.w3.org/2000/svg">

    <!--  TODO: some icons rely on fill instead of stroke, which isn't great  -->

    <symbol id="loader" viewBox="0 0 24 24">
      <path d="M12 2v4M12 18v4M5 5l2.8 2.8M16.2 16.2l2.9 2.9M2 12h4M18 12h4M5 19l2.8-2.8M16.2 7.8l2.9-2.9"
            stroke="var(--icon-color, currentColor)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2" />
    </symbol>

    <symbol id="cross" viewBox="0 0 24 24">
      <path d="M18 6 6 18M6 6l12 12"
            stroke="var(--icon-color, currentColor)"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2" />
    </symbol>
  </svg>
</template>

<script>
export default {
  name: 'ui-icon-provider',
}
</script>

<style lang="scss" scoped>

</style>
