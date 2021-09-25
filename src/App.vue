<template>
  <header class="app_header">
    <h1 class="app_header-logo">
      <router-link to="/" active-class="_active" class="app_header-logo-link">FU*KIT COMPONENTS</router-link>
    </h1>
  </header>

  <main class="app_main">
    <nav class="app_main-nav">
      <router-link to="/" active-class="_active" class="app_main-nav-link">Home</router-link>
      <router-link to="/typo" active-class="_active" class="app_main-nav-link">Typography</router-link>
      <router-link to="/button" active-class="_active" class="app_main-nav-link">Button</router-link>
      <router-link to="/select" active-class="_active" class="app_main-nav-link">Select</router-link>
      <router-link to="/text" active-class="_active" class="app_main-nav-link">Text</router-link>
      <hr>
      <router-link to="/sandbox" active-class="_active" class="app_main-nav-link">Sandbox</router-link>
    </nav>
    <div class="app_main-page">
      <router-view />
    </div>
  </main>

  <footer class="app_footer">
    <small class="app_footer-copy">This is a char in brackets (a) 2021</small>
  </footer>
</template>

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
        @include typo(400);

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
      flex: 1;
    }

    &-nav {
      @include spacing-padding(200);

      padding: 0 var(--lt-horizontal-padding);
      position: sticky;
      left: 0;
      top: 0;
      bottom: 0;
      border-right: var(--ui-lt-border-width) solid color(grey100);
      display: flex;
      flex-direction: column;
      gap: spacing(200);
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
      @include typo(100);
      color: color(grey400);
    }
  }
}
</style>
