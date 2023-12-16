<template>
  <button
      v-bind="{
        ...$attrs,
        type: $attrs.type || 'button',
        class: [
            'ui-button',
            (!hollow && !naked ? ' _solid' : ''),
            (hollow ? ' _hollow' : ''),
            (naked ? ' _naked' : ''),
            (isLoading ? ' _loading' : '')
        ].join(''),
      }"
      @mouseup="mUp"
  >
    <slot />
    <ui-icon v-if="isLoading" class="ui-button_loader" name="spinner" />
  </button>
</template>

<script>
import { defineComponent } from 'vue'

import UiIcon from './UiIcon.vue'

export default defineComponent({
  name: 'ui-button',
  components: { UiIcon },
  props: {
    hollow: { type: Boolean, default: false },
    naked: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
  },
  setup () {
    const mUp = (e) => e.target.blur()
    return { mUp }
  },
})
</script>

<style lang="scss" scoped>
@import "../../scss";

.ui-button {
  @include typo(200);

  --icon-size: 1em;

  -webkit-tap-highlight-color: transparent;

  outline: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  line-height: 1;
  will-change: box-shadow, transform;
  transition: all var(--ui-transition);

  &._solid {
    padding: var(--ui-button-padding, #{spacing(200, 400)});
    font-family: var(--typo-font-ui);
    min-height: var(--ui-lt-h);
    border-width: var(--ui-lt-border-width);
    border-style: var(--ui-lt-border-style);
    border-color: var(--ui-pal);
    border-radius: var(--ui-lt-border-radius);
    background: var(--ui-pal);
    color: var(--ui-pal-acc);
    gap: var(--ui-button-gap, #{spacing(300)});
  }

  &._hollow {
    background: transparent;
    padding: var(--ui-button-padding, #{spacing(300, 400)});
    color: var(--ui-pal);
    border-width: var(--ui-lt-border-width);
    border-style: var(--ui-lt-border-style);
    border-color: var(--ui-pal);
    border-radius: var(--ui-lt-border-radius);
    gap: var(--ui-button-gap, #{spacing(300)});
    min-height: var(--ui-lt-h);


    &:hover {
      box-shadow: 0 3px 10px -4px var(--ui-pal);
    }

    &:focus {
      box-shadow: 0 3px 10px -4px var(--ui-pal);
    }

    &:active {
      box-shadow: 0 1px 4px -2px var(--ui-pal);
    }

    &:disabled {
      color: var(--ui-pal-disabled-border);
      box-shadow: none;
    }
  }

  &._naked {
    background: transparent;
    color: var(--ui-pal);
    border: 1px solid transparent;
    padding: var(--ui-button-padding, #{spacing(300, 400)});
    gap: var(--ui-button-gap, #{spacing(300)});
    min-height: var(--ui-lt-h);

    &:hover {
      box-shadow: none;
    }

    &:focus {
      box-shadow: none;
    }

    &:active {
      box-shadow: none;
    }

    &:disabled {
      color: var(--ui-pal-disabled-border);
      box-shadow: none;
    }
  }

  //
  // DON'T
  //

  & > * {
    pointer-events: none;
  }

  //
  // STATES
  //

  &:hover {
    text-decoration: none;
    box-shadow: 0 4px 12px -4px var(--ui-pal);
  }

  &:focus {
    box-shadow: 0 4px 12px -4px var(--ui-pal);
  }

  &:active {
    transition-duration: 20ms;
    box-shadow: 0 3px 4px -2px var(--ui-pal);
  }

  &:disabled {
    cursor: not-allowed;
    background: var(--ui-pal-disabled);
    border-color: var(--ui-pal-disabled-border);
    border-style: var(--ui-lt-disabled-border-style);
    color: var(--ui-pal-disabled-border);
    box-shadow: none;
  }

  //
  // LOADER
  //

  &._loading {
    color: transparent;
  }

  &_loader {
    --icon-size: 1.4em;
    --icon-color: var(--ui-pal-acc);

    position: absolute;
    animation: spin 2s infinite;
  }

  &._hollow > &_loader, &._naked > &_loader {
    --icon-size: 1.4em;
    --icon-color: var(--ui-pal);

    position: absolute;
    animation: spin 2s infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
