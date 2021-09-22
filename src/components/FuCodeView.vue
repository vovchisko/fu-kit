<template>
  <div class="fu-code-view">
    <fu-button
        v-if="collapse"
        class="fu-code-view_toggle"
        @click="isShown = !isShown"
    >
      {{ isShown ? 'Hide' : 'Show' }} {{ label }}
    </fu-button>
    <p class="fu-code-view_title" v-else-if="label">{{ label }}</p>
    <pre v-if="collapse ? isShown : true" class="fu-code-view_pre"><slot /></pre>
  </div>
</template>

<script>
import { ref, toRaw } from 'vue'

import FuButton from './FuButton.vue'

export default {
  name: 'fu-code-view',
  components: { FuButton },
  props: {
    label: { type: String, default: '' },
    collapse: { type: Boolean, default: null },
  },
  setup (props) {
    const collapse = ref(toRaw(props.collapse))
    const isShown = ref(false)
    const label = props.label
    return { isShown, label, collapse }
  },
}
</script>

<style scoped lang="scss">
.fu-code-view {
  @include spacing-margin($sp200, 0);

  &_toggle {
    padding: 0;
    background: transparent;
    color: pal($pal-primary);
    border: 0 none;
    border-radius: 0;
    min-height: auto;
    font-weight: bold;
    text-decoration: underline;
  }

  &_title {
    @include typo($h100, bold);

    margin-bottom: spacing($sp200);
  }

  &_pre {
    @include scrollbar-awesome();
    @include spacing-padding($sp300, $sp200);

    overflow: auto;
    max-width: 100%;
    background: pal($pal-block-light);
    border: 1px solid pal($pal-block);
    border-radius: var(--lt-border-radius-inner);
  }
}
</style>