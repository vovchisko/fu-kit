<template>
  <ui-button
      class="ui-button-route"
      :class="$attrs.class"
      :hollow="$props.hollow"
      :naked="$props.naked"
      :isLoading="$props.isLoading"
      :disabled="$props.disabled"
  >
    <router-link
        v-if="!disabled"
        class="ui-button-route_link"
        :class="{_naked: $props.naked}"
        :to="$props.to"
        :replace="$props.replace"
        :activeClass="$props.activeClass"
        :exactActiveClass="$props.exactActiveClass"
        :custom="$props.custom"
        :ariaCurrentValue="$props.ariaCurrentValue"
    >
      <slot />
    </router-link>
    <div v-else class="ui-button-route_link">
      <slot />
    </div>
  </ui-button>
</template>

<script>

import UiButton from './UiButton.vue'

export default {
  name: 'ui-button-route',
  components: { UiButton },
  props: {
    disabled: { type: Boolean, default: false },
    hollow: { type: Boolean, default: false },
    naked: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },

    to: { type: [ String, Object ], required: true },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: 'page' },
  },

  setup () {
    const mUp = (e) => e.target.blur()
    return { mUp }
  },
}
</script>


<style scoped lang="scss">
.ui-button-route {
  padding: 0 !important;

  &_link {
    flex: 1;
    padding: var(--ui-button-padding, #{spacing(300,500)});
    display: flex;
    color: inherit;
    text-decoration: none;
    align-items: inherit;
    justify-content: inherit;
    min-height: inherit;
    box-sizing: inherit;
    gap: inherit;

    &._naked {
      padding: var(--ui-button-padding, var(--lt-sp300));
    }
  }
}
</style>
