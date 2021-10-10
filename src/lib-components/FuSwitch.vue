<template>
  <label
      class="fu-switch"
      :class="{'_disabled': $attrs.disabled !== undefined }"
      v-bind="{ class: $attrs.class, style: $attrs.style }"
  >
    <input
        v-bind="{...$attrs, class: undefined, style: undefined, type: 'checkbox'}"
        class="fu-switch_input"
        @input="$emit('update:modelValue', $event.target.checked)"
        :checked="modelValue"
    >
    <span class="fu-switch_box" :class="{ '_checked': modelValue, '_disabled': $attrs.disabled }" />
    <slot />
  </label>
</template>

<script>
import { defineComponent } from 'vue'

export default /*#__PURE__*/defineComponent({
  name: 'fu-switch',
  props: {
    modelValue: { type: [ Boolean ], default: false },
    look: { type: String, default: 'box' },
  },
  emits: [ 'update:modelValue' ],
})
</script>
<style lang="scss" scoped>
@import "../../scss";

.fu-switch {
  @include typo(200);

  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: stretch;
  height: var(--ui-lt-h);
  position: relative;
  outline: none;

  &_input {
    opacity: 0; // weird, but it's working inside the label
  }

  &_box {
    border-style: var(--ui-lt-border-style);
    border-width: var(--ui-lt-border-width);
    border-color: var(--ui-pal-lateral);
    height: var(--ui-lt-h-sub);
    width: calc(var(--ui-lt-h-sub) * 2);
    border-radius: var(--ui-lt-h-sub);
    margin-right: spacing(200);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: spacing(100);

    &:before {
      content: "";
      display: block;
      background-color: var(--ui-pal-lateral);
      border-radius: calc(var(--ui-lt-h-sub) - #{spacing(100)});
      height: 100%;
      aspect-ratio: 1;
      transition: all var(--ui-transition);
    }

    &._checked {
      &:before {
        transform: translateX(var(--ui-lt-h-sub));
        background-color: var(--ui-pal);
      }
    }
  }

  &:focus-within &_box {
    border-color: var(--ui-pal);
  }

  &:hover &_box {
    box-shadow: 0 5px 12px -4px rgb(var(--rgb-dark), 0.2);
  }

  &._disabled {
    color: var(--ui-pal-disabled-border);
  }

  &._disabled &_box {
    border: var(--ui-lt-border-width) var(--ui-lt-disabled-border-style) var(--ui-pal-disabled-border);
    box-shadow: none;
    cursor: not-allowed;
  }
}
</style>
