const fs = require('fs').promises
const path = require('path')

async function readDir(rootDir){
  rootDir = rootDir || path.resolve(__dirname)

  const files = await fs.readDir(rootDir)
  walkFiles(files)
}

function walkFiles(files){
  for(let file of files){
    console.log(file)
  }
}

readDir()