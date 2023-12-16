<template>
  <div
      :class="{'_disabled': disabled || $attrs.readOnly !== undefined, 'ui-time': !naked }"
      v-bind="{ class: [$attrs.class, mod] }"
  >
    <slot />
    <slot name="left" />
    <input
        v-bind="{...$attrs, disabled, class: undefined}"
        :value="modelValue"
        class="ui-time_input"
        :class="{ _naked: naked }"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="handleFocus"
        ref="inputRef"
        type="time"
    >
    <slot name="right" />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ui-time',
  props: {
    disabled: { type: Boolean, default: false },
    autoSelect: { type: Boolean, default: false },
    naked: { type: Boolean, default: false },
    modelValue: {
      type: [ String, Number ],
      default: '',
    },
  },
  emits: [ 'update:modelValue' ],
  expose: [ 'focus' ],
  setup (props) {
    const mod = computed(() => {
      if (props.naked) return '_naked'
      return '_line'
    })
    return { mod }
  },
  methods: {
    focus () {
      this.$refs.inputRef.focus()
    },
    handleFocus () {
      if (this.autoSelect) this.$refs.inputRef.select()
    },
  },
}
</script>
<style lang="scss" scoped>
.ui-time {
  @include typo(200);

  display: flex;
  gap: 0;
  padding: var(--ui-input-padding, #{spacing(200, 400)});
  box-sizing: border-box;
  align-items: center;
  justify-content: stretch;
  border-style: var(--ui-lt-border-style);
  border-width: var(--ui-lt-border-width);
  border-color: var(--ui-pal-lateral);
  border-radius: var(--ui-lt-inline-border-radius);
  transition-duration: 240ms;
  transition-timing-function: ease-in-out;
  transition-property: border-color;
  height: var(--ui-lt-h);
  background: var(--ui-pal-bg);

  &_input {
    @include typo(200);

    letter-spacing: spacing(100);
    padding: 0;
    font-family: var(--typo-font-ui);
    color: var(--ui-pal-text);
    caret-color: var(--ui-pal-text);
    min-height: min(100%);
    border: none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    flex: 1;
    display: block;
    min-width: 0;
    margin: 0;

    &::selection {
      background-color: var(--ui-pal);
      color: var(--ui-pal-text-select);
    }

    &::placeholder {
      color: var(--ui-pal-placeholder);
    }

    &[disabled], &[read-only] {
      cursor: not-allowed;
      color: var(--ui-pal-disabled-border);
    }

    &._naked {
      padding: var(--ui-input-padding, 0);
    }
  }

  &:hover {
    outline: none;
    border-color: var(--ui-pal);
  }

  &:focus-within {
    outline: none;
    border-color: var(--ui-pal);
  }

  &._disabled {
    border-color: var(--ui-pal-disabled-border);
    border-style: var(--ui-lt-disabled-border-style);
  }
}
</style>
