<template>
  <label
      class="fu-check"
      :class="{'_disabled': $attrs.disabled !== undefined,  '_checked': modelValue }"
      v-bind="{ class: $attrs.class, style: $attrs.style }"
  >
    <input
        v-bind="{...$attrs, class: undefined, style: undefined, type: 'checkbox'}"
        class="fu-check_input"
        @input="$emit('update:modelValue', $event.target.checked)"
        :checked="modelValue"
    >
    <span class="fu-check_box" :class="switchLike ? 'fu-check_switch' : 'fu-check_check'" />
    <slot />
  </label>
</template>

<script>
export default {
  name: 'fu-check',
  props: {
    modelValue: { type: [ Boolean ], default: false },
    switchLike: { type: Boolean, default: false },
  },
  emits: [ 'update:modelValue' ],
}
</script>
<style lang="scss" scoped>
@import "../../scss";

.fu-check {
  @include typo(200);

  user-select: none;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: stretch;
  height: var(--ui-lt-h);
  position: relative;
  outline: none;
  color: var(--pal-text-dimm);
  font-family: var(--typo-font-text);

  &_input {
    opacity: 0; // weird, but it's working inside the label
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
  }

  &_check {
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
  }

  &_switch {
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
  }

  &._checked &_switch:before {
    transform: translateX(var(--ui-lt-h-sub));
    background-color: var(--ui-pal);
  }

  &._checked {
    color: var(--pal-text);
  }

  &._checked &_check:before {
    transform: scale(1);
  }

  &:hover &_box {
    box-shadow: 0 5px 12px -4px rgb(var(--rgb-dark), 0.2);
  }

  &:hover {
    color: var(--pal-text);
  }

  &:focus-within &_box {
    border-color: var(--ui-pal);
  }

  &._disabled {
    color: var(--ui-pal-disabled-border);
    cursor: not-allowed;
  }

  &._disabled &_box {
    border: var(--ui-lt-border-width) var(--ui-lt-disabled-border-style) var(--ui-pal-disabled-border);
    box-shadow: none;
  }
}
</style>
