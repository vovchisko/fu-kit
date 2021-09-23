<template>
  <header class="app_header">
    <h1 class="app_header-logo">
      <router-link to="/" active-class="_active" class="app_header-logo-link">FU*KIT COMPONENTS</router-link>
    </h1>
  </header>

  <main class="app_main">
    <nav class="app_main-nav">
      <router-link to="/" active-class="_active" class="app_main-nav-link">Home</router-link>
      <router-link to="/typo" active-class="_active" class="app_main-nav-link">Type</router-link>
      <router-link to="/button" active-class="_active" class="app_main-nav-link">Buttons</router-link>
    </nav>
    <div class="app_main-page">
      <router-view />
    </div>
  </main>

  <footer class="app_footer">
    <small class="app_footer-copy">This is a char in brackets (a) 2021</small>
  </footer>
</template>

<style lang="scss">

</style>

<style lang="scss" scoped>
.app {
  &_header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--lt-header-height);
    padding: 0 var(--lt-horizontal-padding);

    &-logo {
      &-link {
        @include typo(h400);

        color: color(black);
        text-decoration: none;
      }
    }
  }

  &_main {
    min-height: calc(100vh - var(--lt-header-height) - var(--lt-footer-height));
    display: flex;

    &-page {
      padding: 0 var(--lt-horizontal-padding);
    }

    &-nav {
      @include spacing-padding(sp200);

      padding: 0 var(--lt-horizontal-padding);
      position: sticky;
      left: 0;
      top: 0;
      bottom: 0;
      border-right: var(--lt-ui-border-w) solid color(grey100);
      display: flex;
      flex-direction: column;
      gap: spacing(sp200);
      min-width: 200px;

      &-link {
        width: 10em;
        display: block;
        text-decoration: none;

        &._active {
          color: black;
          text-decoration: underline;
        }
      }
    }
  }

  &_footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--lt-footer-height);
    padding: 0 var(--lt-horizontal-padding);

    &-copy {
      @include typo(h100);
      color: color(grey400);
    }
  }
}
</style>
