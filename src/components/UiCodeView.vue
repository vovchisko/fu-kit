<template>
  <div class="ui-code-view">
    <ui-button-link
        v-if="collapse"
        class="ui-code-view_toggle"
        @click="isShown = !isShown"
    >
      {{ isShown ? 'Hide' : 'Show' }} {{ label }}
    </ui-button-link>
    <p v-else-if="label" class="ui-code-view_title">{{ label }}</p>
    <pre v-if="collapse ? isShown : true" class="ui-code-view_pre"><slot /></pre>
  </div>
</template>

<script>
import { defineComponent, ref, toRaw } from 'vue'

import UiButtonLink from './UiButtonLink.vue'

export default defineComponent({
  name: 'ui-code-view',
  components: { UiButtonLink },
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
})
</script>

<style lang="scss" scoped>
@import "../../scss";

.ui-code-view {
  margin: spacing(200, 0);

  &_title {
    @include typo(100);

    font-weight: bold;
    margin-bottom: spacing(200);
  }

  &_pre {
    @include scrollbar-awesome();
    padding: spacing(300, 200);

    font-family: var(--typo-font-mono);
    overflow: auto;
    max-width: 100%;
    background: var(--pal-block);
    border-width: 1px;
    border-style: solid;
    border-color: var(--pal-block-border, black);
    border-radius: var(--ui-lt-border-radius);

    --ui-scroll-bg: var(--pal-block);
  }
}
</style>