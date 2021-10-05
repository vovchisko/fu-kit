const { version } = require('../package.json')
const path = require('path')
const { exec } = require('child_process')

const pack_file = `fu-kit-${ version }.tgz`

function run (cmd, ...args) {
  return new Promise((resolve, reject) => {
    const child = exec(cmd, ...args)
    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
    child.stdin.pipe(process.stdin)
    child.on('close', (code) => {
      code !== 0 ? reject() : resolve(code)
    })
  })
}

async function main () {

  console.log(`RE-LINK: PACK AS FOR NPM`)
  await run(`npm pack`)

  console.log(`RE-LINK: LINK PACKAGE - [ npm i ../${ pack_file } ]`)
  await run(`npm i ../${ pack_file }`, { cwd: path.resolve('src-docs') })

  console.log(`RE-LINK: INSTALL EVERYTHING ELSE`)
  await run(`npm i`, { cwd: path.resolve('src-docs') })

  console.log(`RE-LINK: BUILDING DOCS`)
  await run(`npm run build`, { cwd: path.resolve('src-docs') })
}


main()
