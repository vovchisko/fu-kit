import fs        from 'fs'
import path      from 'path'
import { JSDOM } from 'jsdom'

const svgDir = 'icons'
const outputFile = 'src/components/UiIconProvider.vue'

fs.readdir(svgDir, (err, files) => {
  if (err) {
    console.error('Error reading directory', err)
    return
  }

  let combinedSvgContent = '<template>\n' +
                           '<svg data-icon-set="fu-kit" style="display: none;" xmlns="http://www.w3.org/2000/svg">'

  files.forEach(file => {
    if (file.endsWith('.svg')) {
      const filePath = path.join(svgDir, file)
      const svgContent = fs.readFileSync(filePath, 'utf8')
      const dom = new JSDOM(svgContent)
      const svgElement = dom.window.document.querySelector('svg')
      const symbol = dom.window.document.createElement('symbol')
      symbol.setAttribute('id', path.basename(file, '.svg'))
      symbol.setAttribute('viewBox', svgElement.getAttribute('viewBox'))

      while (svgElement.childNodes.length > 0) {
        symbol.appendChild(svgElement.firstChild)
      }

      console.log(symbol.getAttribute('id'))

      combinedSvgContent += symbol.outerHTML + '\n'
    }
  })

  combinedSvgContent += '</svg>\n' +
                        '</template>\n' +
                        '\n' +
                        '<script>\n' +
                        'export default {\n' +
                        'name: \'ui-icon-provider\',\n' +
                        '}\n' +
                        '</script>\n' +
                        '\n' +
                        '<style lang="scss" scoped>\n' +
                        '\n' +
                        '</style>'

  combinedSvgContent = combinedSvgContent.replaceAll('></path>', ' />')
  combinedSvgContent = combinedSvgContent.replaceAll('viewbox', 'viewBox')
  combinedSvgContent = combinedSvgContent.replaceAll('stroke="black"', 'stroke="var(--icon-color, currentColor)" stroke-width="var(--icon-stroke-width, 1px)"')

  fs.writeFileSync(outputFile, combinedSvgContent)

  console.log('SVGs combined into', outputFile)
})
