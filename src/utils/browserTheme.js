import Signal from 'a-signal'

const SYS_THEMES = Object.freeze({
  DARK: 'dark',
  LIGHT: 'light',
  AUTO: '',
})

const query = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null

const change = new Signal({ memorable: true, late: true })

const doResolve = () => {
  const theme = query && query.matches ? SYS_THEMES.DARK : SYS_THEMES.LIGHT
  change.emit(theme)
}

if (query) {
  query.addEventListener('change', doResolve)
} else {
  console.warn(`Theme detection is not supported by your browser! (window.matchMedia)`)
}

doResolve()

export default { change, SYS_THEMES, doResolve }
