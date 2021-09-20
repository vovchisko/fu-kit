<template>
  <div class="app">
    <div class="app_nav">
      <router-link to="/" class="app_nav-link">Home</router-link>
    </div>
    <div class="app_content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  gap: spacing(sp200);
  
  &_nav {
    position: sticky;
    left: 0;
    top: 0;
    bottom: 0;
    background: silver;
    &-link {
      width: 10em;
      display: block;
    }
  }

  &_content {

  }
}
</style>
