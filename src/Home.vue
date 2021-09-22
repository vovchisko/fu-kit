<template>
  <div class="home">
    <h1>FU-KIT</h1>
    <pre>npm i fu-kit</pre>
    <p>Just the right amount of UI</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style lang="scss" scoped>
.home {
  @include scrollbar-awesome()
}
</style>