<template>
  <div class="doc-tag-input">
    <ui-tag-input
        :model-value="state.model"
        @update:modelValue="updateValue"
        @add="handleAdd"
        @remove="handleRemove"
        :options="options"
        :allow-custom="state.allowCustom"
        :placeholder="state.allowCustom ? 'Search or add new item' : 'Search items'"
        :is-loading="state.isLoading"
    />
    <ui-code-view>{{ state.model }}</ui-code-view>
    <ui-button @click="pickRandom()">random</ui-button>
    <ui-check v-model="state.allowCustom">Allow custom</ui-check>
    <ui-check v-model="state.simulateLoading">Simulate loading</ui-check>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'

import UiTagInput from '../components/UiTagInput.vue'
import UiCheck    from '../components/UiCheck.vue'
import UiCodeView from '../components/UiCodeView.vue'
import UiButton   from '../components/UiButton.vue'


export default {
  name: 'doc-tag-input',
  components: { UiButton, UiCodeView, UiCheck, UiTagInput },
  setup () {
    const state = reactive({
      isLoading: false,
      allowCustom: true,
      simulateLoading: true,
      model: [],
    })

    const options = reactive([
      { value: 'id1', label: 'Apple' },
      { value: 'id2', label: 'Banana' },
      { value: 'id3', label: 'Carrot' },
      { value: 'id4', label: 'Donut' },
      { value: 'id5', label: 'Eggplant' },
      { value: 'id6', label: 'Fish' },
      { value: 'id7', label: 'Grapes' },
      { value: 'id8', label: 'Hamburger' },
      { value: 'id9', label: 'Ice cream' },
      { value: 'id0', label: 'Juice' },
    ])

    const pickRandom = () => {
      state.model.splice(0)

      while (state.model.length < 5) {
        const randomIndex = Math.floor(Math.random() * options.length)
        const randomValue = options[randomIndex].value

        if (!state.model.includes(randomValue)) {
          state.model.push(randomValue)
        }
      }
    }

    const updateValue = value => {
      state.model.splice(0)
      state.model.push(...value)
    }

    const handleAdd = (item) => {
      console.log('added', item)
    }

    const handleRemove = (item) => {
      console.log('removed', item)
    }

    onMounted(() => pickRandom())

    return { state, options, updateValue, handleAdd, handleRemove, pickRandom }
  },
}
</script>

<style lang="scss" scoped>
.doc-tag-input {
  width: 420px;
  display: flex;
  flex-direction: column;
  gap: spacing(300);
}
</style>
