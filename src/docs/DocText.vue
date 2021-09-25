<template>
  <div class="doc-text">
    <div class="doc-text_row">
      <fu-text v-model="val" placeholder="placeholder" />
      <fu-text class="secondary" v-model="val" placeholder="placeholder" />
      <fu-text disabled v-model="val" placeholder="placeholder" />
    </div>
    <div class="doc-text_row">
      <fu-text v-model="val" placeholder="disabled placeholder" class="doc-sandbox_row-text">
        <template #left>
          <p class="icon"> ❤️</p>
        </template>
        <template #right>
          <p class="icon"> ❤️</p>
        </template>
      </fu-text>
    </div>
    <fu-code-view label="Example">{{ example }}</fu-code-view>
  </div>
</template>

<script>
import FuCodeView from '@/components/FuCodeView.vue'
import FuText     from '@/components/FuText.vue'
import { ref }    from 'vue'
import FuButton   from '@/components/FuButton.vue'

const example = `
tbd
`

export default {
  name: 'doc-text',
  components: { FuButton, FuText, FuCodeView },
  setup () {
    const val = ref('')
    return { example, val }
  },
}
</script>

<style scoped lang="scss">
.doc-text {
  &_row {
    @include spacing-padding(300);
    gap: 1em;
    display: flex;
  }

  .brand {
    --text-focus-pal: var(--pal-brand);
  }

  .primary {
    --text-focus-pal: var(--pal-primary);
  }

  .secondary {
    --text-focus-pal: var(--pal-secondary);
  }

  .positive {
    --text-focus-pal: var(--pal-positive);
  }

  .warning {
    --text-focus-pal: var(--pal-warning);
  }

  .negative {
    --text-focus-pal: var(--pal-negative);
  }

  .icon {
    height: 2em;
    width: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>