<template>
  <div class="home">
    <div class="home_splash">
      <div class="home_splash-hero">
        <div class="home_splash-hero-epic">Fu</div>
        <div class="home_splash-hero-sub">
          <p>fu-kit</p>
          <p>v0.0.1</p>
        </div>
      </div>
      <h2 class="home_splash-slogan">Unreasonable UI<br>for unreasonable man.</h2>

      <fu-copy value="npm i fu-kit" class="home_splash-copy">📋 npm i fu-kit</fu-copy>

      <p class="home_text">Just the right amount of UI for your Vue 3 Application!</p>
      <p class="home_text">Flexible, but not too much.</p>
      <p class="home_text">Customizable, but not an "options-creep".</p>
      <p class="home_text">Not too bad, not too good.</p>
      <p class="home_text">Just right.</p>
    </div>
  </div>
</template>

<script>
import FuCopy from '../lib-components/FuCopy.vue'

export default {
  name: 'Home',
  components: { FuCopy },
}
</script>

<style lang="scss">
[route="HOME"] {
  --pal-text: var(--pal-light);
  --pal-bg: var(--pal-dark);
  --pal-link: var(--pal-grey300);
  --pal-link-active: var(--pal-white);
}
</style>

<style lang="scss" scoped>
@import "../../scss";
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 0;

  &_splash {
    @include spacing-padding(600, 500);

    --typo-font-text: Georgia, serif;
    --typo-font-heading: Georgia, serif;

    border-radius: 16px;
    color: var(--pal-white);
    aspect-ratio: 1 / 1.1;
    width: 780px;
    max-width: 100%;
    min-height: 800px;
    background-image: url('assets/splash-screen.jpg');
    background-size: cover;
    background-position: 50%;

    &-hero {
      @include spacing-padding(200);

      letter-spacing: 1px;
      font-weight: normal;
      height: 200px;
      width: 200px;
      border: 1px solid var(--pal-grey400);
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &-epic {
        display: block;
        font-size: 120px;
        color: #c53838;
      }

      &-sub {
        @include typo(500);
        @include spacing-padding(300);

        display: flex;
        justify-content: space-between;

        & p {
          @include typo(500);
        }
      }
    }

    &-slogan {
      @include typo(600);
      @include spacing-margin(500, 300);
    }

    &-copy {
      @include typo(400);
      @include spacing-padding(100, 400);
      @include spacing-margin(500, 300);

      --ui-pal: var(--pal-light);

      border: 1px solid rgba(var(--rgb-light), 0.2);
      font-weight: 600;
      border-radius: 3px;
    }
  }

  &_text {
    @include typo(200);
    @include spacing-margin(100, 300);

    text-shadow: 0 1px 1px black;
    color: var(--pal-light);
  }
}
</style>