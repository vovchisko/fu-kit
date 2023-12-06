<template>
  <div class="doc-icon">
    <div class="doc-icon_options">
      <label>Color
        <ui-select-x v-model="state.color" :options="colorOptions" />
      </label>
      <label>Size
        <ui-select-x v-model="state.size" :options="sizeOptions" />
      </label>

      <label>Stroke Width
        <ui-select-x v-model="state.strokeWidth" :options="strokeWidthOptions" />
      </label>
    </div>
    <div class="doc-icon_icons">
      <div v-for="icon in icons" :key="icon" class="doc-icon_icons-item">
        <ui-icon
            :name="icon"
            :style="{
              '--icon-color': `var(${state.color})`,
              '--icon-size': state.size,
              '--icon-stroke-width': state.strokeWidth,
            }"
        />
        <small>{{ icon }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive }          from 'vue'
import { UiIcon, UiSelectX } from '../entry.js'

export default {
  name: 'doc-icon',
  components: { UiIcon, UiSelectX },
  setup () {
    const state = reactive({
      color: '',
      size: '24px',
      strokeWidth: '',
    })
    const icons = []
    document.querySelectorAll('[data-icon-set]').forEach(icon => {
      icon.querySelectorAll('symbol').forEach((s) => {
        const id = s.getAttribute('id')
        if (id) icons.push(id)
      })
    })
    icons.sort()

    const colorOptions = [
      { value: '', label: 'default' },
      { value: '--pal-front', label: '--pal-front' },
      { value: '--pal-grey100', label: '--pal-grey100' },
      { value: '--pal-grey200', label: '--pal-grey200' },
      { value: '--pal-grey300', label: '--pal-grey300' },
      { value: '--pal-grey400', label: '--pal-grey400' },
      { value: '--pal-grey500', label: '--pal-grey500' },
      { value: '--pal-grey600', label: '--pal-grey600' },
      { value: '--pal-grey700', label: '--pal-grey700' },
      { value: '--pal-grey800', label: '--pal-grey800' },
      { value: '--pal-grey900', label: '--pal-grey900' },
      { value: '--pal-grey100', label: '--pal-grey100' },
      { value: '--pal-back', label: '--pal-back' },
      { value: '--pal-primary', label: '--pal-primary' },
      { value: '--pal-secondary', label: '--pal-secondary' },
      { value: '--pal-positive', label: '--pal-positive' },
      { value: '--pal-warning', label: '--pal-warning' },
      { value: '--pal-negative', label: '--pal-negative' },
    ]
    const sizeOptions = [
      { value: '', label: 'default' },
      { value: '12px', label: '12px' },
      { value: '16px', label: '16px' },
      { value: '20px', label: '20px' },
      { value: '24px', label: '24px' },
      { value: '28px', label: '28px' },
      { value: '32px', label: '32px' },
    ]

    const strokeWidthOptions = [
      { value: '', label: 'default' },
      { value: '1px', label: '1px' },
      { value: '1.5px', label: '1.5px' },
      { value: '2px', label: '2px' },
      { value: '2.5px', label: '2.5px' },
      { value: '3px', label: '3px' },
    ]
    return { state, icons, colorOptions, sizeOptions, strokeWidthOptions }
  },
}
</script>
<style lang="scss" scoped>
.doc-icon {
  &_options {
    margin: spacing(0, 0, 500);
    display: flex;
    gap: spacing(400);
  }

  &_icons {
    --icon-secondary-color: var(--pal-grey300);
    margin: spacing(400, 0);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: spacing(400);
    grid-row-gap: spacing(500);
    @include respond-below(md) {
      grid-template-columns: repeat(8, 1fr);
    }
    @include respond-below(sm) {
      grid-template-columns: repeat(6, 1fr);
    }
    @include respond-below(xs) {
      grid-template-columns: repeat(3, 1fr);
    }

    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: spacing(200);

      & small {
        color: var(--pal-grey500);
      }

      &:hover small {
        color:  var(--pal-grey700);
      }
    }
  }
}
</style>
