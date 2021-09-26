<template>
  <div class="doc-sidebar">
    <fu-sidebar side="right" :is-open="rightIsOpen" @close="rightIsOpen = false">
      <div class="doc-sidebar_content">
        <h4>What is Lorem Ipsum?</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.</p>
        <fu-button @click="rightIsOpen = false">Open Right One</fu-button>
      </div>
    </fu-sidebar>
    <fu-button @click="rightIsOpen = true">Open Right One</fu-button>
  </div>
</template>

<script>
import FuCodeView from '@/components/FuCodeView.vue'
import FuSidebar  from '@/components/FuSidebar.vue'
import { ref }    from 'vue'
import FuButton   from '@/components/FuButton.vue'

const example = `
TBD

`

export default {
  name: 'doc-sidebar',
  components: { FuButton, FuSidebar, FuCodeView },
  setup () {
    const rightIsOpen = ref(false)
    return { example, rightIsOpen }
  },
}
</script>

<style scoped lang="scss">
.doc-sidebar {
  &_content {
    @include spacing-padding(400);

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