const fs = require('fs')
const sharp = require('sharp')

function compose ({overlay, background, position, output}) {
  const {height, width, location} = overlay
  return new Promise((resolve, reject) => {
    const fit = (width && height) ? 'fill' : 'cover'
    sharp(location).resize({width, height, fit}).toBuffer().then(data => {
      sharp(background)
        .composite([{...position, input: data}])
        .toFile(output, (err, info) => err ? reject(err) : resolve(info))
    })
  })
}

async function main ({input, top, left, width, height, output, repeat}) {
  sharp.cache(false)
  const location = 'midd.png'
  fs.copyFileSync(input, location)
  for (let i = 0; i < repeat; i++) {
    await compose({
      overlay: {width, height, location},
      background: location,
      position: {top, left},
      output
    })
    fs.renameSync(output, location)
  }
  fs.renameSync(location, output)
  return output
}

module.exports = main
