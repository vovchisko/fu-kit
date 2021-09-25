<template>
  <div class="fu-code-view">
    <fu-button-link
        v-if="collapse"
        class="fu-code-view_toggle"
        @click="isShown = !isShown"
    >
      {{ isShown ? 'Hide' : 'Show' }} {{ label }}
    </fu-button-link>
    <p class="fu-code-view_title" v-else-if="label">{{ label }}</p>
    <pre v-if="collapse ? isShown : true" class="fu-code-view_pre"><slot /></pre>
  </div>
</template>

<script>
import { ref, toRaw } from 'vue'

import FuButtonLink from './FuButtonLink.vue'

export default {
  name: 'fu-code-view',
  components: { FuButtonLink },
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
  @include spacing-margin(200, 0);

  &_title {
    @include typo(100);

    font-weight: bold;
    margin-bottom: spacing(200);
  }

  &_pre {
    @include scrollbar-awesome();
    @include spacing-padding(300, 200);

    overflow: auto;
    max-width: 100%;
    background: pal(block-light);
    border: 1px solid pal(block);
    border-radius: var(--lt-border-radius-inner);
  }
}
</style>