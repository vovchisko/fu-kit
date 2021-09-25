<template>
  <div class="doc-textarea">
    <fu-textarea v-model="val" placeholder="this is a text area" />
    <fu-button>Like submit</fu-button>
    <br>
    <br>
    <br>
    <fu-textarea v-model="val" placeholder="this is a text area" auto-resize/>
    <fu-button>Like submit</fu-button>
    <fu-code-view label="Example">{{ example }}</fu-code-view>
  </div>
</template>

<script>
import FuCodeView from '@/components/FuCodeView.vue'
import FuTextarea from '@/components/FuTextarea.vue'
import { ref }    from 'vue'
import FuButton   from '@/components/FuButton.vue'

const example = `
tbd
`

export default {
  name: 'doc-textarea',
  components: { FuButton, FuTextarea, FuCodeView },
  setup () {
    const val = ref('\'dasdasd\' +\n' +
                    '               \'asdas\\ndasd\' +\n' +
                    '               \'asdasd\\n\' +\n' +
                    '               \'asd\\n\' +\n' +
                    '               \'asd\' +\n' +
                    '               \'as\' +\n' +
                    '               \'das\' +\n' +
                    '               \'d\\n\' +\n' +
                    '               \'asd\\n\' +\n' +
                    '               \'asd\\n\' +\n' +
                    '               \'asd\\n\'')
    return { example, val }
  },
}
</script>

<style scoped lang="scss">
.doc-textarea {
  @include spacing-padding(300);

  gap: 1em;
  display: flex;
  flex-direction: column;

  --text-focus-pal: var(--pal-brand);
}
</style>