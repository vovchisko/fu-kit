<template>
  <div>
    <header class="app_header">
      <h1 class="app_header-logo">
        <router-link active-class="_active" class="app_header-logo-link" to="/">FU*KIT COMPONENTS</router-link>
      </h1>
    </header>

    <main class="app_main">
      <nav class="app_main-nav">
        <router-link active-class="_active" class="app_main-nav-link" to="/">Home</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/typo">Typography</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/button">Button</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/select">Select</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/dropdown">Dropdown</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/text">Text</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/textarea">Textarea</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/code-input">Code Input</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/sidebar">Sidebar</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/modal">Modal</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/check">Check</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/progress-radial">Progress</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/icon">Icon</router-link>
      </nav>
      <div class="app_main-page">
        <router-view />
      </div>
    </main>

    <footer class="app_footer">
      <small class="app_footer-copy">MIT License 2021 @vovchisko</small>
    </footer>
  </div>
  <ui-icon-provider />
</template>

<script>
import { UiIconProvider } from './entry.js'

export default {
  name: 'app',
  components: { UiIconProvider },
}
</script>

<style lang="scss" scoped>

.app {
  &_header {
    grid-area: header;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: var(--lt-header-height);
    padding: 0 var(--lt-horizontal-padding);

    &-logo {
      display: flex;
      align-items: center;

      &-link {
        @include typo(300);

        color: var(--pal-text);
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
      padding: 0 var(--lt-horizontal-padding);
      position: sticky;
      left: 0;
      top: 0;
      bottom: 0;
      border-right: 1px solid rgba(var(--rgb-grey500), 0.1);
      display: flex;
      flex-direction: column;
      gap: spacing(200);
      min-width: 180px;

      &-link {
        @include typo(100);

        text-transform: uppercase;
        width: 10em;
        display: block;
        text-decoration: none;
        line-height: 2em;

        &:hover {
          color: var(--pal-link-active);
        }

        &._active {
          color: var(--pal-link-active);
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
