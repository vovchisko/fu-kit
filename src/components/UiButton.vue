<template>
  <button
      v-bind="{
        ...$attrs,
        type: $attrs.type || 'button',
        class: ['ui-button', (hollow ? ' _hollow' : ''), (naked ? ' _naked' : ''), (isLoading ? ' _loading' : '')].join(''),
      }"
      @mouseup="mUp"
  >
    <slot />
    <ui-icon v-if="isLoading" class="ui-button_loader" name="loader" />
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

  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  padding: var(--ui-button-padding, #{spacing(300)} #{spacing(400)});
  font-family: var(--typo-font-ui);
  min-height: var(--ui-lt-h);
  border-width: var(--ui-lt-border-width);
  border-style: var(--ui-lt-border-style);
  border-color: var(--ui-pal);
  border-radius: var(--ui-lt-border-radius);
  transition: all var(--ui-transition);
  background: var(--ui-pal);
  color: var(--ui-pal-acc);
  line-height: 1;
  will-change: box-shadow, transform;
  gap: var(--ui-button-gap, #{spacing(300)});
  outline: none;
  user-select: none;

  --icon-size: 1em;

  -webkit-tap-highlight-color: transparent;

  & > * {
    pointer-events: none;
  }

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

  &._hollow {
    background: transparent;
    color: var(--ui-pal);

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
    border: 0 none;
    padding: var(--ui-button-padding, var(--lt-sp300));

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

  &._loading {
    color: transparent;
  }

  &_loader {
    --icon-size: 1em;
    --icon-color: var(--ui-pal-acc);

    position: absolute;
    animation: spin 2s infinite;
  }

  &._hollow > &_loader, &._naked > &_loader {
    --icon-size: 1em;
    --icon-color: var(--ui-pal);

    position: absolute;
    animation: spin 2s infinite;
  }
}

@keyframes spin {
  0% {
    transform: scale(1) rotate(0);
  }
  50% {
    transform: scale(1.5) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(360deg);
  }
}
</style>
