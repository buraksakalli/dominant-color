const Jimp = require('jimp');
const cors = require('cors');
const multer = require('multer');
const colorHex = require('./app/utils/rgbtohex');
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3001;

app.use(cors({ credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/app/index.html")
});

app.post('/dominant', upload.single('image'), (req, res) => {
  Jimp.read(req.file.buffer, (err, image) => {
    img = totalPixels(image);
    for (let x = 0; x < img.x; x++) {
      for (let y = 0; y < img.y; y++) {
        const dimension = { x: x, y: y };
        const pixelColor = getPixelColor(image, dimension)
        dominantColor(pixelColor);
      }
    }
    const color = {
      red: Math.floor(r / img.total),
      green: Math.floor(g / img.total),
      blue: Math.floor(b / img.total)
    }

    const rgb = {
      r: color.red,
      g: color.green,
      b: color.blue,
      rgb: `rgb(${color.red},${color.green},${color.blue})`,
      hex: colorHex(color)
    }
    res.json(rgb);
    //res.send(`<html><body style="background-color:rgb(${rgb.r + "," + rgb.g + "," + rgb.b})"></body></html>`)
    reset();
  });
});


reset = () => {
  r = 0, b = 0, g = 0;
}

// Addition all RGB color values.
let r = 0, g = 0, b = 0;
dominantColor = (color) => {
  r += color.r;
  g += color.g;
  b += color.b;
}

// Define width, height and total pixels.
totalPixels = (image) => {
  const width = image.getWidth();
  const height = image.getHeight();
  return dimensions = {
    x: width,
    y: height,
    total: width * height
  }
}

// Convert pixel to RGBA
getPixelColor = (pixel, dimension) => {
  const color = pixel.getPixelColor(dimension.x, dimension.y);
  return Jimp.intToRGBA(color);
}

app.listen(port);