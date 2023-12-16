<template>
  <ui-button
      :class="{'_hot': isCopied}"
      :hollow="!isCopied"
      class="ui-copy"
      v-bind="$attrs"
      @click="handleCopyToClipboard"
  >
    <slot />
  </ui-button>
</template>

<script>
import { defineComponent, onBeforeUnmount, ref } from 'vue'
import UiButton                                  from './UiButton.vue'

export default defineComponent({
  name: 'ui-copy',
  components: { UiButton },
  props: {
    value: { type: [ String, null ], required: true },
  },
  setup (props) {
    const isCopied = ref(false)
    let timeout

    onBeforeUnmount(() => {
      if (timeout) clearTimeout(timeout)
    })

    const handleCopyToClipboard = (event) => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(props.value)
      } else {
        execCopy()
      }

      isCopied.value = false
      requestAnimationFrame(() => (isCopied.value = true))

      if (timeout) clearTimeout(timeout)
      timeout = setTimeout(() => isCopied.value = false, 1000)

      event.target.blur()
    }

    // fallback
    const execCopy = () => {
      const textArea = document.createElement('textarea')
      textArea.value = props.value
      textArea.setAttribute('readonly', '')
      textArea.style.position = 'absolute'
      textArea.style.left = '-9999px'
      document.body.appendChild(textArea)
      textArea.select()

      try {
        document.execCommand('copy')
      } catch (err) {
        console.error(err)
      } finally {
        document.body.removeChild(textArea)
      }
    }

    return {
      handleCopyToClipboard,
      isCopied,
    }
  },
})
</script>

<style lang="scss" scoped>
@import "../../scss";

.ui-copy {
  @include ellipsis();

  &._hot {
  }
}
</style>
