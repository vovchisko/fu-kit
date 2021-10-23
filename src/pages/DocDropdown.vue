<template>
  <div class="doc-select">
    <fu-dropdown class="secondary">
      <fu-button hollow>{{ selectVal || 'not selected' }}</fu-button>
      <template #content="{dropdownClose}">
        <fu-dropdown-item
            v-for="i in list"
            auto-close
            @click="selectVal = i.value"
            :active="selectVal === i.value"
        >
          Interactive Autoclose {{ i.label }}
        </fu-dropdown-item>

        <hr />

        <fu-dropdown-item @click="selectVal = ''" interactive>
          Unselect interactive w/o auto-close
        </fu-dropdown-item>

        <fu-dropdown-item>
          Non-interactive at all
        </fu-dropdown-item>

        <fu-dropdown-item @click="dropdownClose()" interactive>
          Manual close with dropdownClose()
        </fu-dropdown-item>

        <hr />

        <h5>Not even a component</h5>
      </template>
    </fu-dropdown>

    <fu-code-view>
      selectVal: {{ selectVal }}
      list {{ list }}
    </fu-code-view>
  </div>
</template>

<script>
import { ref }                                              from 'vue'
import { FuButton, FuCodeView, FuDropdown, FuDropdownItem } from '../entry.js'

export default {
  name: 'doc-buttons',
  components: { FuDropdownItem, FuButton, FuDropdown, FuCodeView },
  setup () {
    const selectVal = ref('val1')
    const list = [
      { value: 'val1', label: 'label for val1' },
      { value: 'val2', label: 'label for val2' },
      { value: 'val3', label: 'label for val3' },
    ]
    return { selectVal, list }
  },
}
</script>

<style lang="scss">

.doc-select {
  display: flex;
  flex-direction: column;
  gap: spacing(300);

  & label {
    @include typo(200);
    @include spacing-margin(200, 0);
  }
}
</style>