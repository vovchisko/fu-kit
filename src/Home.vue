<template>
  <div class="home">
    <h1 class="home_hero">FU*KIT</h1>
    <fu-copy value="npm i fu-kit" class="home_pre">📋 npm i fu-kit</fu-copy>
    <p class="home_slogan">Just the right amount of UI for your Vue 3 Application!</p>
    <p class="home_slogan">Flexible, but not too much.</p>
    <p class="home_slogan">Customizable, but not power-creep.</p>
    <p class="home_slogan">Not too bad, not too good.</p>
    <p class="home_slogan">Just right.</p>

  </div>
</template>

<script>
import FuCopy from '@/components/FuCopy.vue'

export default {
  name: 'Home',
  components: { FuCopy },
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 25vh;

  &_hero {
    @include typo(900);
  }

  &_pre {
    @include typo(300);
    @include spacing-padding(100, 400);
    @include spacing-margin(400, 0);

    background: color(grey100);
    border: 1px solid color(grey200);
    font-weight: 600;
    border-radius: 3px;
  }

  &_slogan {
    @include typo(200);
  }
}
</style>