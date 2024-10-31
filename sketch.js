let slowSec = 0;
let circleReal = { d: 200};
let circle1 = { d: 300 };
let circle2 = { d: 400 };
let circle3 = { d: 500 };
let circle4 = { d: 1000 };

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function drawCircle(x, y, diameter, angle, color) {
  push();
  translate(x, y);
  rotate(angle);
  fill(color);
  drawingContext.setLineDash([10, 50]);
  ellipse(0, 0, diameter);
  pop();
}

function draw() {
  background(220);

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
  drawCircle(mw, height / 2, circleReal.d, angle0, color(200, 100, 0));
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
