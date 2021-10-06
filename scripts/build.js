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
  await run(`npm run build`)
  await run(`npm pack`)
  console.log(` ........... npm i ../${ pack_file }`)


  await run(`npm i ../${ pack_file }`, { cwd: path.resolve('src-docs') })
}


main()
