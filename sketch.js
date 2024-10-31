let slowSec = 0;
let circleD = {r: 200, L1: 300, L2: 400, L3: 500, L4: 1000};
let mImg0;
let mImg1;
let mImg2;
let mImg3;
let mImg4;

function preload() {
  mImg0 = loadImage("Reality_Texture.gif");
  mImg1 = loadImage("Layer1_Texture.gif");
  mImg2 = loadImage("Layer2_Texture.gif");
  mImg3 = loadImage("Layer3_Texture.gif");
  mImg4 = loadImage("Layer4_Texture.gif");
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
  image(mImg1, -width, 0);
  image(mImg2, -width, 0);
  image(mImg3, -width, 0);

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

// LAYER 3 CIRCLE
push();
let mw3 = map(mouseX, 0, width, width / 2.2, width - width / 2.2);
pop();

////drawing circle

// circle mask (create)
let maskImg3 = createGraphics(circleD.L3, circleD.L3); // load gif off-screen (buffer)
maskImg3.ellipse(circleD.L3 / 2, circleD.L3 / 2, circleD.L3); // draw a circle in the buffer
maskImg3.loadPixels();

// prep Gif Image
let img3WithMask = createImage(circleD.L3, circleD.L3);
img3WithMask.copy(mImg3, 0, 0, mImg3.width, mImg3.height, 0, 0, circleD.L3, circleD.L3);
img3WithMask.mask(maskImg3); // apply the mask to the gif

// circle mask (draw)
push();
translate(mw3, height / 2);
rotate(angle3);
image(img3WithMask, -circleD.L3 / 2, -circleD.L3 / 2); // Center the image
pop();

////drawing time display

// reality time
let hours3 = floor(slowSec3 / 3600) % 24;
let minutes3 = floor(slowSec3 / 60) % 60; 
let seconds3 = floor(slowSec3) % 60;

// reality AM/PM trigger
let ampm3;

if (hours3 >= 12) {
  ampm3 = "pm";
} else {
  ampm3 = "am";
}

// reality hour reset trigger
hours3 = hours3 % 12;

if (hours3 === 0) {
  hours3 = 12;
} else {
  // change nothing
}

// reality time display format hh:mm:ss (AM/PM)
let timeDisplay3 =
  nf(hours3, 2) + ":" + nf(minutes3, 2) + ":" + nf(seconds3, 2) + " " + ampm3;

// reality time display (on screen)
fill(0);
textFont('Courier New');
textSize(20);
let tmw3 = map(mouseX, 0, width, width / 2.2, width - width / 2.2);
text('Layer 3', tmw3, 50)
text(timeDisplay3, tmw3, 20);

////drawing line
push();
translate(mw3, height / 2);
line(0, 0, 0, -280);
pop();




// LAYER 2 CIRCLE
push();
let mw2 = map(mouseX, 0, width, width / 3, width - width / 3);
pop();

////drawing circle

// circle mask (create)
let maskImg2 = createGraphics(circleD.L2, circleD.L2); // load gif off-screen (buffer)
maskImg2.ellipse(circleD.L2 / 2, circleD.L2 / 2, circleD.L2); // draw a circle in the buffer
maskImg2.loadPixels();

// prep Gif Image
let img2WithMask = createImage(circleD.L2, circleD.L2);
img2WithMask.copy(mImg2, 0, 0, mImg2.width, mImg2.height, 0, 0, circleD.L2, circleD.L2);
img2WithMask.mask(maskImg2); // apply the mask to the gif

// circle mask (draw)
push();
translate(mw2, height / 2);
rotate(angle2);
image(img2WithMask, -circleD.L2 / 2, -circleD.L2 / 2); // Center the image
pop();

////drawing time display

// reality time
let hours2 = floor(slowSec2 / 3600) % 24;
let minutes2 = floor(slowSec2 / 60) % 60; 
let seconds2 = floor(slowSec2) % 60;

// reality AM/PM trigger
let ampm2;

if (hours2 >= 12) {
  ampm2 = "pm";
} else {
  ampm2 = "am";
}

// reality hour reset trigger
hours2 = hours2 % 12;

if (hours2 === 0) {
  hours2 = 12;
} else {
  // change nothing
}

// reality time display format hh:mm:ss (AM/PM)
let timeDisplay2 =
  nf(hours2, 2) + ":" + nf(minutes2, 2) + ":" + nf(seconds2, 2) + " " + ampm2;

// reality time display (on screen)
fill(0);
textFont('Courier New');
textSize(20);
let tmw2 = map(mouseX, 0, width, width / 3, width - width / 3);
text('Layer 2', tmw2, 580)
text(timeDisplay2, tmw2, 610);

////drawing line
push();
translate(mw2, height / 2);
line(0, 0, 0, 250);
pop();



  
// LAYER 1 CIRCLE
push();
let mw1 = map(mouseX, 0, width, width / 5, width - width / 5);
pop();

////drawing circle

// circle mask (create)
let maskImg1 = createGraphics(circleD.L1, circleD.L1); // load gif off-screen (buffer)
maskImg1.ellipse(circleD.L1 / 2, circleD.L1 / 2, circleD.L1); // draw a circle in the buffer
maskImg1.loadPixels();

// prep Gif Image
let img1WithMask = createImage(circleD.L1, circleD.L1);
img1WithMask.copy(mImg1, 0, 0, mImg1.width, mImg1.height, 0, 0, circleD.L1, circleD.L1);
img1WithMask.mask(maskImg1); // apply the mask to the gif

// circle mask (draw)
push();
translate(mw1, height / 2);
rotate(angle1);
image(img1WithMask, -circleD.L1 / 2, -circleD.L1 / 2); // Center the image
pop();

////drawing time display

// reality time
let hours1 = floor(slowSec1 / 3600) % 24;
let minutes1 = floor(slowSec1 / 60) % 60; 
let seconds1 = floor(slowSec1) % 60;

// reality AM/PM trigger
let ampm1;

if (hours1 >= 12) {
  ampm1 = "pm";
} else {
  ampm1 = "am";
}

// reality hour reset trigger
hours1 = hours1 % 12;

if (hours1 === 0) {
  hours1 = 12;
} else {
  // change nothing
}

// reality time display format hh:mm:ss (AM/PM)
let timeDisplay1 =
  nf(hours1, 2) + ":" + nf(minutes1, 2) + ":" + nf(seconds1, 2) + " " + ampm1;

// reality time display (on screen)
fill(0);
textFont('Courier New');
textSize(20);
let tmw1 = map(mouseX, 0, width, width / 5, width - width / 5);
text('Layer 1', tmw1, 60)
text(timeDisplay1, tmw1, 30);

////drawing line
push();
translate(mw1, height / 2);
line(0, 0, 0, -230);
pop();




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
  line(0, 0, 0, 150);
  pop();


}

