let slowSec = 0;
let circleD = {r: 200, L1: 300, L2: 400, L3: 500, L4: 1000};
let mImg0;

function preload() {
  mImg0 = loadImage("Reality_Texture.gif");
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
  image(mImg0, -width, 0); //hide graphics

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


  // REALITY CIRCLE
  push();
  let mw0 = map(mouseX, 0, width, width / 9, width - width / 9);
  pop();

  ////drawing circle

  // circle mask (create)
  let maskImg0 = createGraphics(circleD.r, circleD.r); // load gif off-screen (buffer)
  maskImg0.ellipse(circleD.r / 2, circleD.r / 2, circleD.r); // draw a circle in the buffer
  maskImg0.loadPixels();
  
  // prep Gif Image
  let img0WithMask = createImage(circleD.r, circleD.r);
  img0WithMask.copy(mImg0, 0, 0, mImg0.width, mImg0.height, 0, 0, circleD.r, circleD.r);
  img0WithMask.mask(maskImg0); // apply the mask to the gif

  // circle mask (draw)
  push();
  translate(mw0, height / 2);
  rotate(angle0);
  image(img0WithMask, -circleD.r / 2, -circleD.r / 2); // Center the image
  pop();

////drawing time display

  // reality time
  let hours0 = floor(realSec / 3600) % 24;
  let minutes0 = floor(realSec / 60) % 60; 
  let seconds0 = floor(realSec) % 60;

  // reality AM/PM trigger
  let ampm0;

  if (hours0 >= 12) {
    ampm0 = "pm";
  } else {
    ampm0 = "am";
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
  textFont('Courier New');
  textSize(20);
  let tmw0 = map(mouseX, 0, width, width / 9, width - width / 9);
  text('Reality', tmw0, 500)
  text(timeDisplay0, tmw0, 530);

  ////drawing line
  push();
  translate(mw0, height / 2);
  stroke(255)
  line(0, 0, 0, 150);



  

}

