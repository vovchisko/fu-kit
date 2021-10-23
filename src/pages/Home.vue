<template>
  <div class="home">
    <div class="home_splash">
      <div class="home_splash-hero">FU*KIT UI</div>
      <div class="home_splash-version">v{{ version }}</div>

      <h2 class="home_splash-slogan">Unreasonable UI<br>for unreasonable man.</h2>

      <fu-copy value="npm i fu-kit" class="home_splash-copy">📋 npm i fu-kit</fu-copy>

      <p class="home_text">* Flexible, but not too much.</p>
      <p class="home_text">* Customizable, but not an "options-creep".</p>
      <p class="home_text">* Not too bad, not too good.</p>
      <p class="home_text">* Just right.</p>
    </div>
  </div>
</template>

<script>
import { FuCopy } from '../entry.js'

export default {
  name: 'Home',
  components: { FuCopy },
  setup () {
    return { version: __APP_VERSION__ }
  },
}
</script>


<style lang="scss">
[route="HOME"] {
  --pal-text: var(--pal-light);
  --pal-bg: var(--pal-dark);
  --pal-link: var(--pal-grey300);
  --pal-link-active: var(--pal-white);
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 0;

  &_splash {
    @include spacing-padding(600, 500);

    border-radius: 16px;
    color: var(--pal-white);
    aspect-ratio: 1 / 1.1;
    width: 780px;
    max-width: 100%;
    min-height: 800px;
    background-image: url('../assets/splash-screen.jpg');
    background-size: cover;
    background-position: 50%;

    &-hero {
      font-size: 90px;

      --typo-font-text: Impact, Avenir, Helvetica, Arial, sans-serif;
    }

    &-version {
      @include typo(700);
      @include spacing-padding(200, 400);

      background: var(--pal-negative);
      display: inline-flex;
      color: var(--pal-acc-negative);
    }

    &-slogan {
      @include typo(500);
      @include spacing-margin(500, 0);

      text-transform: uppercase;
      font-weight: 100;
    }

    &-copy {
      @include typo(400);
      @include spacing-margin(500, 300);

      --ui-pal: var(--pal-light);

      padding: spacing(300) spacing(400) !important;
      border: 1px solid rgba(var(--rgb-light), 0.2);
      font-weight: 600;
      border-radius: 3px;
    }
  }

  &_text {
    @include typo(200);
    @include spacing-margin(300, 300);

    text-shadow: 0 1px 1px black;
    color: var(--pal-light);
  }
}
</style>