<template>
  <div class="doc-sandbox">
    <div class="doc-sandbox_row" v-for="c in classes" :class="c">
      <fu-button class="doc-sandbox_row-btn">{{ c }}</fu-button>
      <fu-select v-model="selectVal">
        <option v-for="i in list" :value="i.value">{{ i.label }}</option>
      </fu-select>
      <fu-select-x v-model="selectVal" :options="list" />
      <fu-text class="doc-sandbox_row-text" v-model="textVal" :placeholder="c + ' placeholder'" />
    </div>

    <div class="doc-sandbox_row">
      <fu-button disabled class="doc-sandbox_row-btn">disabled</fu-button>
      <fu-text disabled v-model="textVal" placeholder="disabled placeholder" class="doc-sandbox_row-text" />
    </div>

    <fu-code-view label="Example">{{ example }}</fu-code-view>
  </div>
</template>

<script>
import FuCodeView from '@/components/FuCodeView.vue'
import FuText     from '@/components/FuText.vue'
import { ref }    from 'vue'
import FuButton   from '@/components/FuButton.vue'
import FuSelect   from '@/components/FuSelect.vue'
import FuSelectX  from '@/components/FuSelectX.vue'

const example = `
tbd
`

export default {
  name: 'doc-sandbox',
  components: { FuSelectX, FuSelect, FuButton, FuText, FuCodeView },
  setup () {
    const classes = [ 'default', 'primary', 'brand', 'secondary', 'positive', 'warning', 'negative' ]
    const textVal = ref('')

    const selectVal = ref('val1')
    const list = [
      { value: 'val1', label: 'label 1' },
      { value: 'val2', label: 'label 2' },
      { value: 'val3', label: 'label 3' },
    ]
    return { example, textVal, classes, selectVal, list }
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