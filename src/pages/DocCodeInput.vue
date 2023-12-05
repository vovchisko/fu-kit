<template>
  <div class="doc-code-input">
    <ui-code-input v-model="pin" :class="{_error: error}" />
    <br />
    <ui-check v-model="error">Error</ui-check>
    <br />
    <ui-code-view>{{ pin }}</ui-code-view>
  </div>
</template>

<script>
import UiCodeInput from '../components/UiCodeInput.vue'
import UiCheck     from '../components/UiCheck.vue'
import UiCodeView  from '../components/UiCodeView.vue'
import { ref }     from 'vue'
import UiText      from '../components/UiText.vue'

export default {
  name: 'doc-code-input',
  components: { UiText, UiCodeView, UiCodeInput, UiCheck },
  setup () {
    const pin = ref('')
    const error = ref(false)
    return { pin, error }
  },
}

</script>

<style lang="scss" scoped>
._error {
  --ui-pal: var(--pal-negative);
  --ui-pal-text: var(--pal-warning);
}
</style>
