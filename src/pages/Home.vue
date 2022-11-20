<template>
  <div class="home">
    <div class="home_splash">
      <div class="home_splash-hero">FU*KIT UI</div>
      <div class="home_splash-version">v{{ version }}</div>

      <h2 class="home_splash-slogan">Unreasonable UI<br>for unreasonable man.</h2>

      <p class="home_text">* Not too complicated, intuitive, but no docs.</p>
      <p class="home_text">* Flexible, but not too much.</p>
      <p class="home_text">* Customizable, but not an "options-creep".</p>
      <p class="home_text">* Not too bad, not too good.</p>
      <p class="home_text">* Just right.</p>
    </div>
  </div>
</template>

<script>
import { UiCopy }  from '../entry.js'
import { version } from '../../package.json'

export default {
  name: 'Home',
  components: { UiCopy },
  setup () {
    return { version }
  },
}
</script>


<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-width: 0;

  &_splash {
    --pal-text: white;

    padding: spacing(600, 500);
    border-radius: 16px;
    aspect-ratio: 1 / 1.1;
    max-width: 100%;
    min-height: 780px;
    background-image: url('../assets/splash-screen.jpg');
    background-size: cover;
    background-position: 50%;
    color: var(--pal-text);

    &-hero {
      font-size: 90px;

      --typo-font-text: Impact, Avenir, Helvetica, Arial, sans-serif;
    }

    &-version {
      @include typo(700);
      padding: spacing(200, 400);

      background: var(--pal-negative);
      display: inline-flex;
      color: var(--pal-acc-negative);
    }

    &-slogan {
      @include typo(500);
      margin: spacing(500, 0);

      text-transform: uppercase;
      font-weight: 100;
    }

    &-copy {
      @include typo(400);

      margin: spacing(500, 300);
      padding: spacing(300) spacing(400) !important;
      font-weight: 600;
    }
  }

  &_text {
    @include typo(200);
    margin: spacing(300, 300);
  }
}
</style>