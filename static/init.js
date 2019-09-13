const STYLES = {
  udnie: window.ml5.styleTransfer('/static/models/udnie', console.log),
  wave: window.ml5.styleTransfer('/static/models/wave', console.log)
}

const convert = (dimensions, style, callback) => {
  let canvas

  document.querySelectorAll('canvas').forEach((c, i) => {
    if (i === 1) {
      canvas = c
    }
  })

  const image = document.getElementById('i2')
  image.height = dimensions.height
  image.width = dimensions.width
  image.src = canvas.toDataURL('image/png')

  window.setImmediate(() => {
    STYLES[style].transfer(document.getElementById('i2'), function (err, result) {
      if (!err) {
        document.getElementById('image').src = result.src
        callback()
      }
    })
  })
}

window.canvasy = {
  convert
}
