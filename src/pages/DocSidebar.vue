<template>
  <div class="doc-sidebar">
    <ui-sidebar side="right" :is-open="rightIsOpen" @close="rightIsOpen = false">
      <div class="doc-sidebar_content">
        <h4>What is Lorem Ipsum?</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.</p>
        <ui-button @click="rightIsOpen = false">Open Right One</ui-button>
      </div>
    </ui-sidebar>
    <ui-button @click="rightIsOpen = true">Open Right One</ui-button>
  </div>
</template>

<script>
import { ref }                 from 'vue'
import { UiButton, UiSidebar } from '../entry.js'

const example = `
TBD

`

export default {
  name: 'doc-sidebar',
  components: { UiButton, UiSidebar },
  setup () {
    const rightIsOpen = ref(false)
    return { example, rightIsOpen }
  },
}
</script>

<style lang="scss">
.doc-sidebar {
  &_content {
    padding: spacing(400);

    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  &_title {
    margin-bottom: spacing(400);
    color: pal(text-dimm);
    font-weight: normal;
    border-bottom: 1px solid color(grey200);
  }
}
</style>