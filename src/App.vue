<template>
  <div>
    <header class="app_header">
      <h1 class="app_header-logo">
        <router-link active-class="_active" class="app_header-logo-link" to="/">FU*KIT COMPONENTS</router-link>
      </h1>

      <div class="app_header-themes">
        <ui-button :hollow="UI.state.selected!==UI.THEMES.LIGHT" @click="UI.selectTheme(UI.THEMES.LIGHT)">Light</ui-button>
        <ui-button :hollow="UI.state.selected!==UI.THEMES.DARK" @click="UI.selectTheme(UI.THEMES.DARK)">Dark</ui-button>
        <ui-button :hollow="UI.state.selected!==UI.THEMES.CUSTOM" @click="UI.selectTheme(UI.THEMES.CUSTOM)">Fu</ui-button>
        <ui-button :hollow="UI.state.selected!==UI.THEMES.AUTO" @click="UI.selectTheme(UI.THEMES.AUTO)">Auto</ui-button>
      </div>
    </header>

    <main class="app_main">
      <nav class="app_main-nav">
        <router-link active-class="_active" class="app_main-nav-link" to="/">Home</router-link>
        <router-link active-class="_active" class="app_main-nav-link" to="/theme">Theme</router-link>
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
import { UI }             from './pages/ui.js'

import UiButtonLink from './components/UiButtonLink.vue'
import UiButton     from './components/UiButton.vue'

export default {
  name: 'app',
  components: { UiButton, UiButtonLink, UiIconProvider },
  setup () {
    return { UI }
  },
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

    &-themes {
      display: flex;
      gap: spacing(300);
      align-items: center;
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
      position: sticky;
      left: 0;
      top: 0;
      bottom: 0;
      border-width: 0 1px 0 0;
      border-color: rgba(var(--rgb-grey500, black), 0.1);
      border-style: solid;
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
        padding: spacing(300) var(--lt-horizontal-padding);

        &:hover {
          text-decoration: underline;
        }

        &._active {
          background: var(--pal-grey300);
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
