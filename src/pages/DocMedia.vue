<template>
  <div class="home">
    <div class="home_text">
      <h1 class="home_text-head">Title Example</h1>

      <small class="home_text-small">@media scss-kit v{{ version }}</small>

      <p class="home_text-p">* Not too complicated, intuitive, but no docs.</p>
      <p class="home_text-p">* Flexible, but not too much.</p>
      <p class="home_text-p">* Customizable, but not an "options-creep".</p>
      <p class="home_text-p">* Not too bad, not too good.</p>
      <p class="home_text-p">* Just right.</p>
    </div>
  </div>
</template>

<script>
import { version } from '../../package.json'

export default {
  name: 'doc-media',
  setup () {
    return { version }
  },
}
</script>


<style lang="scss">
.home {
  // default "desktop-first" styles

  color: var(--pal-text);

  &_text {
    --pal-text: var(--pal-grey600);

    &-head {
      @include typo(600);

      margin: spacing(500, 0);
      font-weight: bold;
    }

    &-p {
      margin: spacing(400, 0);
    }
  }


  // if mobile-first - use respond-above to describe larger screens/breakpoints
  // if desktop-first - use respond-below

  @include respond-below(md) { // medium screen or below...
    --pal-text: var(--pal-grey500);

    &_text {
      &-head {
        @include typo(500);
      }

      &-p {
        margin: spacing(400, 0);
      }
    }
  }

  @include respond-below(sm) { // small screen or below...
    --pal-text: var(--pal-grey400);

    &_text {
      &-head {
        @include typo(400);
      }

      &-p {
        margin: spacing(300, 0);
      }
    }
  }

  @include respond-below(xs) {
    --pal-text: var(--pal-grey300);

    &-head {
      @include typo(400);
    }

    &_text {
      &-p {
        margin: spacing(200, 0);
      }
    }
  }
}
</style>
