let slowSec = 0;
let circleReal = { x: 0, y: 0, d: 200 };
let circle1 = { x: 0, y: 0, d: 300 };
let circle2 = { x: 0, y: 0, d: 400 };
let circle3 = { x: 0, y: 0, d: 500 };
let circle4 = { x: 0, y: 0, d: 1000 };

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
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


  // Dream layer 4 circle (limbo)
  push();
  translate(width / 2, height / 2);
  rotate(angle4);
  fill(100);
  drawingContext.setLineDash([10, 50]);
  ellipse(circle4.x, circle4.y, circle4.d);
  pop();

  //layer 4 time
  let hours4 = floor(slowSec4 / 3600) % 24; // total slowSec4 seconds to hours
  let minutes4 = floor(slowSec4 / 60) % 60; // total slowSec4 seconds to mins
  let seconds4 = floor(slowSec4) % 60; // total slowSec4 seconds to secs

  //layer 4 AM/PM
  let ampm4;

  if (hours4 >= 12) {
    ampm4 = "PM";
  } else {
    ampm4 = "AM";
  }
  hours4 = hours4 % 12; // convert to 12-hour format
  if (hours4 === 0) {
    hours4 = 12; // if hours is 0, set it to 12
  } else {
    // no change
  }

  // layer 4 time display format hh:mm:ss (AM/PM)
  let timeDisplay4 =
    nf(hours4, 2) + ":" + nf(minutes4, 2) + ":" + nf(seconds4, 2) + " " + ampm4;

  // layer 4 time display (on screen)
  fill(0);
  textSize(25);
  text(timeDisplay4, width / 2, height / 2);


  ////////////


  // Dream layer 3 circle
  push();
  translate(width - width / 2, height / 2);
  rotate(angle3);
  fill(100, 80, 100);
  drawingContext.setLineDash([10, 50]);
  ellipse(circle3.x, circle3.y, circle3.d);
  pop();

  // layer 3 time
  let hours3 = floor(slowSec3 / 3600) % 24;
  let minutes3 = floor(slowSec3 / 60) % 60;
  let seconds3 = floor(slowSec3) % 60;

  // layer 3 AM/PM
  let ampm3;

  if (hours3 >= 12) {
    ampm3 = "PM";
  } else {
    ampm3 = "AM";
  }
  hours3 = hours3 % 12;
  if (hours3 === 0) {
    hours3 = 12;
  } else {
  }

  // layer 3 time display format hh:mm:ss (AM/PM)
  let timeDisplay3 =
    nf(hours3, 2) + ":" + nf(minutes3, 2) + ":" + nf(seconds3, 2) + " " + ampm3;

  // layer 3 time display (on screen)
  fill(0);
  textSize(25);
  text(timeDisplay3, width / 2, height / 2);


  ////////////


  // Dream layer 2 circle
  push();
  translate(width / 2, height / 2);
  rotate(angle2);
  fill(100, 150, 100);
  drawingContext.setLineDash([10, 50]);
  ellipse(circle2.x, circle2.y, circle2.d);
  pop();

  // layer 2 time
  let hours2 = floor(slowSec2 / 3600) % 24;
  let minutes2 = floor(slowSec2 / 60) % 60;
  let seconds2 = floor(slowSec2) % 60;

  // layer 2 AM/PM
  let ampm2;

  if (hours2 >= 12) {
    ampm2 = "PM";
  } else {
    ampm2 = "AM";
  }
  hours2 = hours2 % 12;
  if (hours2 === 0) {
    hours2 = 12;
  } else {
  }

  // layer 2 time display format hh:mm:ss (AM/PM)
  let timeDisplay2 =
    nf(hours2, 2) + ":" + nf(minutes2, 2) + ":" + nf(seconds2, 2) + " " + ampm2;

  // layer 2 time display (on screen)
  fill(0);
  textSize(25);
  text(timeDisplay2, width / 2, height / 2);
  

  ////////////


  // Dream layer 1 circle
  push();
  translate(width / 2, height / 2);
  rotate(angle1);
  fill(100, 150, 200);
  drawingContext.setLineDash([10, 50]);
  ellipse(circle1.x, circle1.y, circle1.d);
  pop();

  // layer 1 time
  let hours1 = floor(slowSec1 / 3600) % 24; 
  let minutes1 = floor(slowSec1 / 60) % 60; 
  let seconds1 = floor(slowSec1) % 60;

  // layer 1 AM/PM trigger
  let ampm1;

  if (hours1 >= 12) {
    ampm1 = "PM";
  } else {
    ampm1 = "AM";
  }

  // layer 1 hour reset trigger
  hours1 = hours1 % 12; 

  if (hours1 === 0) {
    hours1 = 12; 
  } else {
  }

  //  layer 1 time display format hh:mm:ss (AM/PM)
  let timeDisplay1 =
    nf(hours1, 2) + ":" + nf(minutes1, 2) + ":" + nf(seconds1, 2) + " " + ampm1;

  // layer 1 time display (on screen)
  fill(0);
  textSize(25);
  text(timeDisplay1, width / 2, height / 2);


  ////////////


  // Reality circle
  push();
  translate(width / 2, height / 2);
  rotate(angle0);
  fill(200, 100, 0);
  drawingContext.setLineDash([10, 50]);
  ellipse(circleReal.x, circleReal.y, circleReal.d);
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
  text(timeDisplay0, width / 2, height / 2);



}

// NEXT STEPS:
// turn circles into custom functions for adding details
// adding arrays for mouse roll overs
