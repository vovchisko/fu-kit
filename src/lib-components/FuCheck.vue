<template>
  <label
      class="fu-check"
      :class="{'_disabled': $attrs.disabled !== undefined }"
      v-bind="{ class: $attrs.class, style: $attrs.style }"
  >
    <input
        v-bind="{...$attrs, class: undefined, style: undefined, type: 'checkbox'}"
        class="fu-check_input"
        @input="$emit('update:modelValue', $event.target.checked)"
        :checked="modelValue"
    >
    <span class="fu-check_box" :class="{ '_checked': modelValue, '_disabled': $attrs.disabled }" />
    <slot />
  </label>
</template>

<script>
import { defineComponent } from 'vue'

export default /*#__PURE__*/defineComponent({
  name: 'fu-check',
  props: {
    modelValue: { type: [ Boolean ], default: false },
    look: { type: String, default: 'box' },
  },
  emits: [ 'update:modelValue' ],
})
</script>
<style lang="scss" scoped>
@import "../../scss";

.fu-check {
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
    width: var(--ui-lt-h-sub);
    border-radius: var(--ui-lt-border-radius);
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    margin-right: spacing(200);

    &:before {
      content: "";
      display: block;
      background-color: var(--ui-pal);
      border-radius: calc(var(--ui-lt-border-radius) - #{spacing(100)});
      margin: spacing(100);
      flex: 1;
      transform: scale(0);
      transition: all var(--ui-transition);
    }

    &._checked {
      &:before {
        transform: scale(1);
      }
    }

  }

  &:hover &_box {
    box-shadow: 0 5px 12px -4px rgb(var(--rgb-dark), 0.2);
  }

  &:focus-within &_box {
    border-color: var(--ui-pal);
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
