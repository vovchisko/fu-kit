<template>
  <div class="fu-progress-radial">
    <div class="fu-progress-radial__svg-wrap">
      <svg
          class="fu-progress-radial__svg"
          :viewBox="`0 0 ${r2} ${r2}`"
          :width="r2"
          :height="r2"
      >
        <circle
            class="fu-progress-radial__svg-bg"
            :cx="r"
            :cy="r"
            :r="r"
        />
        <circle
            class="fu-progress-radial__svg-value"
            :cx="r"
            :cy="r"
            :r="r"
            :style="valueStyle"
        />
      </svg>
    </div>
    <span
        class="fu-progress-radial__slot"
        v-if="hasSlot('default')">
      <slot />
    </span>
  </div>
</template>

<script>
// todo: setup() composition
export default {
  name: 'fu-progress-radial',
  props: {
    /**
     * Value must be between 0 and 1 (otherwise will be normalized automatically)
     */
    value: { type: Number, default: 0 },
  },
  data () {
    return {
      r: 50, r2: 100,
    }
  },
  computed: {
    normalizeValue () {
      if (this.value > 1) return 1
      if (this.value < 0) return 0
      return this.value
    },
    dasharray () {
      return Math.PI * this.r2
    },
    valueStyle () {
      return {
        'stroke-dasharray': this.dasharray,
        'stroke-dashoffset': this.dasharray * (1 - this.normalizeValue),
      }
    },
  },
  methods: {
    hasSlot (slot) {
      return !!this.$slots[slot]
    },
  },
}
</script>

<style lang="scss" scoped>

.fu-progress-radial {
  display: flex;
  position: relative;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  height: calc(var(--fu-progress-radial-size, 64px));
  width: calc(var(--fu-progress-radial-size, 64px));

  &__svg-wrap {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  &__svg {
    overflow: visible;
    vertical-align: middle;
    transform: rotate(90deg);
    height: var(--fu-progress-radial-size, 64px);
    width: var(--fu-progress-radial-size, 64px);
  }

  &__svg-bg {
    stroke: var(--fu-progress-radial-bg-stroke, #{pal($pal-primary,0.2)});
    fill: var(--fu-progress-radial-bg-fill, transparent);
    stroke-width: var(--fu-progress-radial-stroke-width, 10);
  }

  &__svg-value {
    fill: none;
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    transition-duration: var(--fu-progress-radial-t-duration, 500ms);
    transition-property: var(--fu-progress-radial-t-property, all);
    transition-timing-function: var(--fu-progress-radial-t-function, linear);
    stroke: var(--fu-progress-radial-color, #{pal($pal-primary)});
    stroke-linecap: var(--fu-progress-radial-stroke-linecap, round);
    stroke-width: var(--fu-progress-radial-stroke-width, 10);
  }
}
</style>
