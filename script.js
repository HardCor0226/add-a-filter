var image;
var imgcanvas;
var red;
var green;
var blue;
var avgColor;

function upload() {
  imgcanvas = document.getElementById("img");
  image = new SimpleImage(imginput)
  var filename = imginput.value;
  image.drawTo(imgcanvas);
  alert("Chose" + filename);
}

function ImageLoaded(){
  if (image == null || ! image.complete()) {
    alert("Image not loaded!");
    return false;
  }
  else {
    return true;
  }
}

function makeGray() {
  for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  imgcanvas = document.getElementById("img");
  image.drawTo(imgcanvas);
}

function makeRed() {
  for (var pixel of image.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(avg*2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else {
      pixel.setRed(255);
      pixel.setGreen(avg*2 - 255);
      pixel.setBlue(avg*2 - 255);
    }
  }
  imgcanvas = document.getElementById("img");
  image.drawTo(imgcanvas);
}

function resetImg() {
  if (image == null || ! image.complete()){
    alert("image not loaded");
    return;
  }
  var canvas = document.getElementById("img");
  ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width,canvas.height);
  image = new SimpleImage(imginput);
  image.drawTo(canvas);
}

function doInvert() {
  for (var pixel of image.values()) {
    var inRed = 255 - pixel.getRed();
    var inGreen = 255 - pixel.getGreen();
    var inBlue = 255 - pixel.getBlue();
    pixel.setRed(inRed);
    pixel.setGreen(inGreen);
    pixel.setBlue(inBlue);
  }
  image.drawTo(imgcanvas);
}

function makeWindow() {
  imgcanvas = document.getElementById("img");
  for (var pixel of image.values()) {
    var thickness1 = 25;
    var thickness2 = 15;
    var x = pixel.getX();
    var y = pixel.getY();
    var width = image.getWidth();
    var height = image.getHeight();
    if (x <= thickness1 || x >= width - thickness1) {
      pixel.setRed(107);
      pixel.setGreen(107);
      pixel.setBlue(107);
    }
    if (y <= thickness1 || y >= height - thickness1) {
      pixel.setRed(107);
      pixel.setGreen(107);
      pixel.setBlue(107);
    }
    if (x >=1/8*width-thickness2/2 && x <=1/8*width+thickness2/2) {
      pixel.setRed(107);
      pixel.setGreen(107);
      pixel.setBlue(107);
    }
    if (x >=1/4*width-thickness2/2 && x <=1/4*width+thickness2/2) {
      pixel.setRed(107);
      pixel.setGreen(107);
      pixel.setBlue(107);
    }
    if (x >=3/8*width-thickness2/2 && x <=3/8*width+thickness2/2) {
      pixel.setRed(107);
      pixel.setGreen(107);
      pixel.setBlue(107);
    }
    if (x >=1/2*width-thickness2/2 && x <=1/2*width+thickness2/2) {
      pixel.setRed(107);
      pixel.setGreen(107);
      pixel.setBlue(107);
    }
    if (x >=5/8*width-thickness2/2 && x <=5/8*width+thickness2/2) {
      pixel.setRed(107);
      pixel.setGreen(107);
      pixel.setBlue(107);
    }
    if (x >=3/4*width-thickness2/2 && x <=3/4*width+thickness2/2) {
      pixel.setRed(107);
      pixel.setGreen(107);
      pixel.setBlue(107);
    }
    if (x >=7/8*width-thickness2/2 && x <=7/8*width+thickness2/2) {
      pixel.setRed(107);
      pixel.setGreen(107);
      pixel.setBlue(107);
    }
  }
  image.drawTo(imgcanvas);
}

function drawRainbow() {
  image = new SimpleImage(imginput);
  var rectHeight = image.getHeight();
  var rectSegment = parseInt(rectHeight) / 7;
  var Y;
  var X;
  for (var pixel of image.values()) {
    X = pixel.getX();
    Y = pixel.getY();
    avgColor = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (Y >= 6 * parseInt(rectSegment)) {
      doRed();
    }
    else if (Y >= (5 * parseInt(rectSegment))) {
      doOrange();
    }
    else if (Y >= (4 * parseInt(rectSegment))) {
      doYellow();
    }
    else if (Y >= (3 * parseInt(rectSegment))) {
      doGreen();
    }
    else if (Y >= (2 * parseInt(rectSegment))) {
      doBlue();
    }
    else if (Y >= parseInt(rectSegment)) {
      doIndigo();
    }
    else {
      doViolet();
    }
  }
}

function doViolet() {
  for (var pixel of image.values()) {
    if (avgColor < 128) {
      red = Math.round(1.6 * avgColor);
      green = 0;
      blue = Math.round(1.6 * avgColor);
    }
    else {
      red = Math.round(0.4 * avgColor + 153 );
      green = Math.round(2 * avgColor - 255);
      blue = Math.round(0.4 * avgColor + 153 );
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
}

function doIndigo() {
  for (var pixel of image.values()) {
    if (avgColor < 128) {
      red = Math.round(.8 * avgColor);
      green = 0;
      blue = Math.round(2 * avgColor);
    }
    else {
      red = Math.round(1.2 * avgColor - 51);
      green = Math.round(2*avgColor - 255);
      blue = 255;
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
}

function doBlue() {
  for (var pixel of image.values()) {
    if (avgColor < 128) {
      red = 0;
      green = 0;
      blue = Math.round(2*avgColor);
    }
    else {
      red = Math.round(2*avgColor-255);
      green =Math.round(2*avgColor-255);
      blue = 255;
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
}

function doGreen() {
  for (var pixel of image.values()) {
    if (avgColor < 128) {
      red = 0;
      green = Math.round(2*avgColor);
      blue = 0;
    }
    else {
      red = Math.round(2*avgColor-255);
      green = 255;
      blue = Math.round(2*avgColor-255);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
}

function doYellow() {
  for (var pixel of image.values()) {
    if (avgColor < 128) {
      red = Math.round(2 * avgColor);
      green = Math.round(2 * avgColor);
      blue = 0;
    }
    else {
      red = 255;
      green = 255;
      blue = Math.round(2 * avgColor - 255);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
}

function doOrange() {
  for (var pixel of image.values()) {
    if (avgColor < 128) {
      red = Math.round(2 * avgColor);
      green = Math.round(.8 * avgColor);
      blue = 0;
    }
    else {
      red = 255;
      green = Math.round(1.2 * avgColor - 51);
      blue =  Math.round(2 * avgColor - 255);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
}

function doRed() {
  for (var pixel of image.values()) {
    if (avgColor < 128) {
      red = Math.round(2*avgColor);
      green = 0;
      blue = 0;
    }
    else {
      red = 255;
      green = Math.round(2*avgColor-255);
      blue = Math.round(2*avgColor-255);
    }
    pixel.setRed(red);
    pixel.setGreen(green);
    pixel.setBlue(blue);
  }
}

function doRainbow() {
  if (ImageLoaded(image)) {
    drawRainbow();
    image.drawTo(imgcanvas);
  }
  else {
    alert("Image Not Loaded");
  }
}