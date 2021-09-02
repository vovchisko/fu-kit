<template>
  <button
      v-bind="$attrs"
      :type="$attrs.type || 'button'"
      class="fu-button"
  >
    <slot />
  </button>
</template>

<script>
console.log('fu button: loaded')
export default {
  name: 'fu-button',
  setup(){
    console.log('fu button: setup!')
  }
}
</script>

<style lang="scss" scoped>
.fu-button {
  background: deeppink;
  color: white;
  border: 0 none;
}
</style>
