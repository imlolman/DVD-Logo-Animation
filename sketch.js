let pos = {
  x: 0,
  y: 0
}
let speed = {
  x: 5,
  y: 5
}
let imgPos = {
  height: 70,
  width: 100
}

let r, g, b;
let dvd_logo;

function preload() {
  dvd_logo = loadImage("logo.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  getColorforImage()
}

function draw() {
  background(0)
  tint(r, g, b)
  image(dvd_logo, pos.x, pos.y, imgPos.width, imgPos.height)

  if (pos.x >= width - imgPos.width || pos.x < 0) {
    speed.x *= -1
    getColorforImage()
  }

  if (pos.y >= height - imgPos.height || pos.y < 0) {
    speed.y *= -1
    getColorforImage()
  }

  pos.x += speed.x;
  pos.y += speed.y;
}

function getColorforImage() {
  r = random(100, 256)
  g = random(100, 256)
  b = random(100, 256)
}