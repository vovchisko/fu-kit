<template>
  <div class="doc-sandbox">
    <div class="doc-sandbox_row" v-for="c in classes" :class="c">
      <fu-text class="doc-sandbox_row-text" v-model="val" :placeholder="c + ' placeholder'" />
      <fu-button class="doc-sandbox_row-btn">{{ c }}</fu-button>
    </div>

    <div class="doc-sandbox_row">
      <fu-text disabled v-model="val" placeholder="disabled placeholder" class="doc-sandbox_row-text" />
      <fu-button disabled class="doc-sandbox_row-btn">disabled</fu-button>
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
  name: 'doc-sandbox',
  components: { FuButton, FuText, FuCodeView },
  setup () {
    const classes = [ 'default', 'primary', 'brand', 'secondary', 'positive', 'warning', 'negative' ]
    const val = ref('')
    return { example, val, classes }
  },
}
</script>

<style scoped lang="scss">
.doc-sandbox {
  display: flex;
  flex-direction: column;
  gap: 1em;

  &_row {
    @include spacing-padding(300);
    gap: 1em;
    display: flex;

    &-text {
      max-width: 15em;
    }

    &-btn {
      width: 8em;
    }
  }

  .brand {
    --ui-pal: var(--pal-brand);
  }

  .primary {
    --ui-pal: var(--pal-primary);
  }

  .secondary {
    --ui-pal: var(--pal-secondary);
  }

  .positive {
    --ui-pal: var(--pal-positive);
  }

  .warning {
    --ui-pal: var(--pal-warning);
  }

  .negative {
    --ui-pal: var(--pal-negative);
  }

}
</style>