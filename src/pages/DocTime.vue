<template>
  <div class="doc-time">
    <div class="doc-time-row">
      <ui-time v-model="state.model" />
      <ui-time v-model="state.model" disabled />

      <ui-time v-model="state.model" naked />
      <ui-time v-model="state.model" naked disabled />
    </div>
    <ui-code-view>{{ state.model }}</ui-code-view>
  </div>
</template>

<script>
import { reactive } from 'vue'

import UiTime     from '../components/UiTime.vue'
import UiCodeView from '../components/UiCodeView.vue'

export default {
  name: 'doc-time',
  components: { UiCodeView, UiTime },
  setup () {
    const state = reactive({
      model: '',
    })

    return { state }
  },
}
</script>

<style lang="scss" scoped>
.doc-time {
  display: flex;
  flex-direction: column;
  gap: spacing(500);

  --ui-time-picker-width: 100px;

  &-row {
    display: flex;
    gap: spacing(400);
  }
}
</style>
