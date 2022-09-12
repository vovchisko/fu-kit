<template>
  <div class="doc-dropdown">
    <div class="doc-dropdown_dropdown">
      <span>opens to the right:</span>
      <ui-dropdown>
        <ui-button hollow>{{ selectVal || 'not selected' }}</ui-button>
        <template #content="{dropdownClose}">
          <ui-dropdown-item
              v-for="i in list"
              auto-close
              @click="selectVal = i.value"
              :active="selectVal === i.value"
          >
            Interactive Autoclose {{ i.label }}
          </ui-dropdown-item>

          <hr />

          <ui-dropdown-item @click="selectVal = ''" interactive>
            Unselect interactive w/o auto-close
          </ui-dropdown-item>

          <ui-dropdown-item>
            Non-interactive at all
          </ui-dropdown-item>

          <ui-dropdown-item @click="dropdownClose()" interactive>
            Manual close with dropdownClose()
          </ui-dropdown-item>

          <hr />

          <h5>Not even a component</h5>
        </template>
      </ui-dropdown>

      <span>opens to the left:</span>
      <ui-dropdown class="secondary" snap-to-right>
        <ui-button hollow>{{ selectVal || 'not selected' }}</ui-button>
        <template #content="{dropdownClose}">
          <ui-dropdown-item
              v-for="i in list"
              auto-close
              @click="selectVal = i.value"
              :active="selectVal === i.value"
          >
            Interactive Autoclose {{ i.label }}
          </ui-dropdown-item>

          <hr />

          <ui-dropdown-item @click="selectVal = ''" interactive>
            Unselect interactive w/o auto-close
          </ui-dropdown-item>

          <ui-dropdown-item>
            Non-interactive at all
          </ui-dropdown-item>

          <ui-dropdown-item @click="dropdownClose()" interactive>
            Manual close with dropdownClose()
          </ui-dropdown-item>

          <hr />

          <h5>Not even a component</h5>
        </template>
      </ui-dropdown>
    </div>

    <ui-code-view>
      selectVal: {{ selectVal }}
      list {{ list }}
    </ui-code-view>
  </div>
</template>

<script>
import { ref }                                              from 'vue'
import { UiButton, UiCodeView, UiDropdown, UiDropdownItem } from '../entry.js'

export default {
  name: 'doc-dropdown',
  components: { UiDropdownItem, UiButton, UiDropdown, UiCodeView },
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
.doc-dropdown {
  display: flex;
  flex-direction: column;
  gap: spacing(300);

  &_dropdown {
    display: flex;
    align-items: center;
    gap: spacing(400);
    white-space: nowrap;
  }

  & label {
    @include typo(200);
    margin: spacing(200, 0);
  }
}
</style>
