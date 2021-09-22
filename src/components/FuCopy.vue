<template>
  <fu-button
      link-like
      class="fu-copy"
      fill="none"
      @click="handleCopyToClipboard"
      :aria-label="isCopied ? 'Copied!' : label "
      data-microtip-position="top"
      data-microtip-size="small"
      role="tooltip"
      :class="{'_hot': isCopied}"
  >
    <slot />
  </fu-button>
</template>

<script>
import { onBeforeUnmount, ref } from 'vue'

import FuButton from './FuButton.vue'

export default {
  name: 'fu-copy',
  components: { FuButton },
  props: {
    value: { type: String, required: true },
    label: { type: String, default: 'Copy value' },
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


}
</script>

<style lang="scss" scoped>
.fu-copy {
  @include spacing-padding(0, $sp200);

  white-space: nowrap;
  background: pal($pal-primary, 0.2);
  text-decoration: none;
  border: 1px solid pal($pal-primary, 0.6);
  transition: all 1000ms ease-out;
  color: pal($pal-prime, 0.8);

  &:hover {
    color: pal($pal-prime);
  }

  &._hot {
    transition: none;
    border-color: pal($pal-success);
    background-color: pal($pal-success, 0.8);
    color: white;
  }
}
</style>
