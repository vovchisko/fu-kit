<template>
  <label
      :class="{'_disabled': isDisabled,  '_checked': modelValue }"
      class="ui-check"
      v-bind="{ class: $attrs.class, style: $attrs.style }"
      @mouseup="mouseUp"
  >
    <input
        ref="inputRef"
        :checked="modelValue"
        class="ui-check_input"
        v-bind="{...$attrs, disabled: isDisabled, type: 'checkbox', class: undefined, style: undefined}"
        @input="$emit('update:modelValue', $event.target.checked)"
    >
    <span
        :class="{
          'ui-check_switch': switchLike,
          'ui-check_check': !switchLike,
          _loading: isLoading
        }"
        class="ui-check_box"
    >
        <svg v-if="!switchLike" class="ui-check_check-icon" viewBox="0 0 24 24">
          <path d="m7.5 12.5 4 3 5.5-8" stroke="var(--ui-pal, currentColor)" stroke-linecap="round" stroke-width="2" />
        </svg>
    </span>
    <slot />
  </label>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ui-check',
  props: {
    modelValue: { type: Boolean, default: false },
    switchLike: { type: Boolean, default: false },
    thin: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
  emits: [ 'update:modelValue' ],
  setup (props) {
    const inputRef = ref(null)
    const isDisabled = computed(() => props.disabled || props.disabled === '')


    const mouseUp = () => {
      // oof
      setTimeout(() => {
        inputRef.value.blur()
      }, 0)
    }

    return { isDisabled, inputRef, mouseUp }
  },
})
</script>
<style lang="scss" scoped>
@import "../../scss";

.ui-check {
  @include typo(200);

  user-select: none;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: var(--ui-check-justify-content, stretch);
  height: var(--ui-lt-h);
  position: relative;
  outline: none;
  color: var(--pal-text-dimm);
  font-family: var(--typo-font-text);
  cursor: pointer;
  line-height: 1;

  &_input {
    opacity: 0; // weird, but it's working inside the label
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }

  &_check {
    border-style: var(--ui-lt-border-style);
    border-width: var(--ui-check-border-w);
    border-color: var(--pal-grey700);
    height: var(--ui-check-size);
    width: var(--ui-check-size);
    border-radius: var(--ui-lt-border-radius);
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    margin-right: spacing(200);
    transition: all var(--ui-transition);

    &-icon {
      transition: all var(--ui-transition);
      transform: scale(0);
      width: 100%;
    }
  }

  &._checked &_check {
    border-color: var(--ui-pal);
  }

  &._checked &_check-icon {
    transform: scale(1.4);
  }

  &_switch {
    width: var(--ui-switch-w);
    border-radius: var(--ui-switch-h);
    background-color: var(--pal-grey700);
    border: var(--ui-lt-border-width) solid var(--pal-grey700);
    margin-right: spacing(200);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: var(--ui-switch-h);

    --switch-left: 0;

    &:before {
      transform: translateX(var(--switch-left));
      content: "";
      display: block;
      background-color: white;
      border: var(--ui-lt-border-width) solid transparent;
      border-radius: var(--ui-switch-h);
      height: calc(100% - var(--ui-lt-border-width) * 2);
      aspect-ratio: 1;
      transition: all var(--ui-transition);
    }
  }

  &._checked &_switch {
    background-color: var(--ui-pal);
    border-color: var(--ui-pal);
  }

  &._checked &_switch:before {
    --switch-left: calc(var(--ui-switch-w) - var(--ui-switch-h));
    transform: translateX(var(--switch-left));
  }

  &._checked {
    color: var(--pal-text);
  }

  &:hover:not(&._disabled) &_box {
    box-shadow: 0 5px 12px -4px rgb(var(--rgb-dark), 0.2);
  }

  &:hover {
    color: var(--pal-text);
  }

  &:focus-within &_box {
    box-shadow: 0 0 2px 4px rgba(var(--ui-rgb), 0.3);
  }

  &._disabled {
    color: var(--ui-pal-disabled-border);
    cursor: not-allowed;
  }

  &._disabled &_check {
    border: var(--ui-lt-border-width) var(--ui-lt-disabled-border-style) var(--ui-pal-disabled-border);
    box-shadow: none;
  }

  &._disabled &_switch {
    background-color: rgba(var(--rgb-grey700), 0.25);
    border-color: transparent;
  }

  &._disabled._checked &_switch {
    background-color: rgba(var(--ui-rgb), 0.3);
  }
}

._loading {
  animation: pulse 1000ms infinite;
}

@keyframes pulse {
  40% {
    transform: scale(1.1);
    box-shadow: 0 0 0 5px rgba(var(--ui-rgb), 0.3);
  }

  80% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(var(--ui-rgb), 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(var(--ui-rgb), 0)
  }
}
</style>
