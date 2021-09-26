<template>
  <div class="doc-sidebar">
    <fu-sidebar :is-open="rightIsOpen" @close="rightIsOpen = false">
      Right sidebar
      <fu-button @click="rightIsOpen = false">Open Right One</fu-button>
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
  &_col {
    @include spacing-padding(400, 0);
    flex: 1;
  }

  .h100 {
    @include typo(100);
  }

  .h200 {
    @include typo(200);
  }

  .h300 {
    @include typo(300);
  }

  .h400 {
    @include typo(400);
  }

  .h500 {
    @include typo(500);
  }

  .h600 {
    @include typo(600);
  }

  .h700 {
    @include typo(700);
  }

  .h800 {
    @include typo(800);
  }

  .h900 {
    @include typo(900);
  }

  &_title {
    margin-bottom: spacing(400);
    color: pal(text-dimm);
    font-weight: normal;
    border-bottom: 1px solid color(grey200);
  }
}
</style>