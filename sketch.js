let slowSec = 0;
let circleD = {r: 200, L1: 300, L2: 400, L3: 500, L4: 1000};
let mImg;

function preload() {
  mImg = loadImage("Reality_Texture.gif");
}


// function drawCircle(x, y, diameter, angle, color) {
//   push();
//   translate(x, y);
//   rotate(angle);
//   fill(color);
//   ellipse(0, 0, diameter);
//   pop();
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  image(mImg, -width, 0); //hide graphics

  // current time and date data (real-time)
  let now = new Date();
  let sec = now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600; // total seconds since midnight

  // clock timings
  let realSec = sec;
  let slowSec1 = sec / 12; // 12x slower
  let slowSec2 = sec / 144; // 144x slower
  let slowSec3 = sec / 1728; // 1728x slower
  let slowSec4 = sec / 20736; // 20736x slower

  // rotation angle
  let angle0 = map(realSec % 60, 0, 60, 0, 360);
  let angle1 = map(slowSec1 % 60, 0, 60, 0, 360);
  let angle2 = map(slowSec2 % 60, 0, 60, 0, 360);
  let angle3 = map(slowSec3 % 60, 0, 60, 0, 360);
  let angle4 = map(slowSec4 % 60, 0, 60, 0, 360);


  ////////////


  // looping details in bg
  let spacing = 1.1;

  for (let d = 10; d < width * 2; d *= spacing) {
  push();
    noFill();
    stroke(150);
    strokeWeight(1);
    drawingContext.setLineDash([10, 5, 20, 8, 5, 15]);
    ellipse(width / 6, height / 2, d);
    pop();
  }

  for (let d = 10; d < width * 2; d *= spacing) {
    push();
      noFill();
      stroke(150);
      strokeWeight(1);
      drawingContext.setLineDash([10, 5, 20, 8, 5, 15]);
      ellipse(width - width / 6, height / 2, d);
      pop();
    }


  ////////////


  // Reality circle
  push();
  let mw = map(mouseX, 0, width, width / 9, width - width / 9);
  pop();

  // circle mask (create)
  let maskImg = createGraphics(circleD.r, circleD.r); // load gif off-screen (buffer)
  maskImg.ellipse(circleD.r / 2, circleD.r / 2, circleD.r); // draw a circle in the buffer
  maskImg.loadPixels();
  
  // prep Gif Image
  let imgWithMask = createImage(circleD.r, circleD.r);
  imgWithMask.copy(mImg, 0, 0, mImg.width, mImg.height, 0, 0, circleD.r, circleD.r);
  imgWithMask.mask(maskImg); // apply the mask to the gif

  // circle mask (draw)
  push();
  translate(mw, height / 2);
  rotate(angle0);
  image(imgWithMask, -circleD.r / 2, -circleD.r / 2); // Center the image
  pop();

  // reality time
  let hours0 = floor(realSec / 3600) % 24;
  let minutes0 = floor(realSec / 60) % 60; 
  let seconds0 = floor(realSec) % 60;

  // reality AM/PM trigger
  let ampm0;

  if (hours0 >= 12) {
    ampm0 = "PM";
  } else {
    ampm0 = "AM";
  }

  // reality hour reset trigger
  hours0 = hours0 % 12;

  if (hours0 === 0) {
    hours0 = 12;
  } else {
    // change nothing
  }

  // reality time display format hh:mm:ss (AM/PM)
  let timeDisplay0 =
    nf(hours0, 2) + ":" + nf(minutes0, 2) + ":" + nf(seconds0, 2) + " " + ampm0;

  // reality time display (on screen)
  fill(0);
  textSize(25);
  let tmw = map(mouseX, 0, width, width / 9, width - width / 9);
  text(timeDisplay0, tmw, height / 2);

}

// NEXT STEPS:
// turn circles into custom functions for adding details
// adding arrays for mouse roll overs
