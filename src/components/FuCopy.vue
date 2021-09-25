<template>
  <fu-button
      class="fu-copy"
      fill="none"
      @click="handleCopyToClipboard"
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
  @include spacing-padding(0, 200);

  text-decoration: none;
  border: 1px solid transparent;
  transition: all 1000ms ease-out;
  color: color(dark);
  justify-content: flex-start;

  --button-pal: #{color(dark, 0.5)};

  &:hover {
    color: color(black);
  }

  &._hot {
    transition: none;
    border-color: pal(positive);
  }
}
</style>
