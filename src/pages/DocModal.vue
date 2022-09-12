<template>
  <div class="doc-modal">
    <ui-modal :is-open="state.isOpen" @close="state.isOpen = false">
      <div class="doc-modal_content">
        <h4>What is Lorem Ipsum?</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.</p>
        <ui-button @click="state.isOpen = false">Close</ui-button>
      </div>
    </ui-modal>
    <div class="doc-modal_options">
      <ui-button @click="state.isOpen = true">Open modal</ui-button>
    </div>
  </div>
</template>

<script>

import { reactive } from 'vue'

import UiModal   from '../components/UiModal.vue'
import UiButton  from '../components/UiButton.vue'
import UiSelectX from '../components/UiSelectX.vue'

export default {
  name: 'doc-modal',
  components: { UiButton, UiModal, UiSelectX },
  setup () {
    const state = reactive({
      isOpen: false,
    })
    return { state }
  },
}
</script>

<style lang="scss">
.doc-modal {
  &_content {
    padding: spacing(500);
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 400px;
    max-width: 90vw;
  }

  &_title {
    margin-bottom: spacing(400);
    color: pal(text-dimm);
    font-weight: normal;
    border-bottom: 1px solid color(grey200);
  }

  &_options {
    display: flex;
    align-items: center;
    gap: spacing(400);
  }
}
</style>