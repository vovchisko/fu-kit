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
@import "../../scss";

.fu-progress-radial {
  display: flex;
  position: relative;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  height: calc(var(--progress-radial-size, 64px));
  width: calc(var(--progress-radial-size, 64px));

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
    height: var(--progress-radial-size, 64px);
    width: var(--progress-radial-size, 64px);
  }

  &__svg-bg {
    stroke: var(--progress-radial-bg-stroke, #{pal(primary,0.2)});
    fill: var(--progress-radial-bg-fill, transparent);
    stroke-width: var(--progress-radial-stroke-width, 10);
  }

  &__svg-value {
    fill: none;
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    transition-duration: var(--progress-radial-t-duration, 500ms);
    transition-property: var(--progress-radial-t-property, all);
    transition-timing-function: var(--progress-radial-t-function, linear);
    stroke: var(--progress-radial-color, #{pal(primary)});
    stroke-linecap: var(--progress-radial-stroke-linecap, round);
    stroke-width: var(--progress-radial-stroke-width, 10);
  }
}
</style>
