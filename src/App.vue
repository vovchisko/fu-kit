<template>
  <div class="app">
    <div class="app_nav">
      <router-link to="/" class="app_nav-link">Home</router-link>
      <router-link to="/fu-button" class="app_nav-link">Buttons</router-link>
    </div>
    <div class="app_content">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  font-family: var(--typo-font-text);
  color: var(--pal-text);
  background: var(--pal-bg);
  gap: spacing(sp300);
  display: flex;

  &_nav {
    position: sticky;
    left: 0;
    top: 0;
    bottom: 0;
    border-right: var(--lt-ui-border-w) solid color(grey400);

    &-link {
      width: 10em;
      display: block;
    }
  }

  &_content {

  }
}
</style>
