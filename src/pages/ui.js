import { reactive, watch } from 'vue'
import browserTheme        from '../utils/browserTheme.js'

const THEMES = { ...browserTheme.SYS_THEMES, CUSTOM: 'fu' }

const state = reactive({
  browser: '',
  selected: '',
  actual: '',
})

const applyTheme = () => {
  state.actual = !state.selected
      ? state.actual = state.browser
      : state.actual = state.selected

  document.querySelector('html').setAttribute('data-theme', state.actual)
}

const selectTheme = (theme = '') => {
  state.selected = theme
  applyTheme()
}

browserTheme.change.on(theme => {
  state.browser = theme
  applyTheme()
})

function init () {
  selectTheme(localStorage.getItem('fu-kit-theme') || '')
  watch(state, () => localStorage.setItem('fu-kit-theme', state.selected))
}

export const UI = { selectTheme, init, state, THEMES }
