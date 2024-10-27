let slowSec = 0;
let circleReal = {x: 0, y: 0, d: 200};
let circle1 = {x: 0, y: 0, d: 300};
let circle2 = {x: 0, y: 0, d: 400};
let xcirclePosition = [width / 2, width / 3, width - width/9]

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  
  // current time and date data (real-time)
  let now = new Date();
  let sec = now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600; // Total seconds since midnight
  
  // clock timings
  realSec = sec
  slowSec1 = sec / 12; // 12x slower
  slowSec2 = sec /144; // 144x slower
  
  // rotation angle
  let angle0 = map(realSec % 60, 0, 60, 0, 360)
  let angle1 = map(slowSec1 % 60, 0, 60, 0, 360);
  let angle2 = map(slowSec2 % 60, 0, 60, 0, 360);

  // Reality circle
  push();
  translate(width - width/9, height / 2); 
  rotate(angle0);
  fill(200, 100, 0);
  drawingContext.setLineDash([10, 50]);
  ellipse(circleReal.x, circleReal.y, circleReal.d);
  pop();


  // Dream layer 2 circle
  push();
  translate(width / 3, height / 2); 
  rotate(angle2);
  fill(100, 150, 100);
  drawingContext.setLineDash([10, 50]);
  ellipse(circle2.x, circle2.y, circle2.d);
  pop();
  
  // Dream layer 1 circle
  push();
  translate(width / 2, height / 2); 
  rotate(angle1);
  fill(100, 150, 200);
  drawingContext.setLineDash([10, 50]);
  ellipse(circle1.x, circle1.y, circle1.d);
  pop();

  //layer 1 time
  let hours1 = floor(slowSec1 / 3600) % 24; // Total slowSec1 seconds to hours
  let minutes1 = floor(slowSec1 / 60) % 60; // Total slowSec1 seconds to minutes
  let seconds1 = floor(slowSec1) % 60;       // Total slowSec2 seconds to seconds

  //layer 1 AM/PM trigger
  let ampm1;

if (hours1 >= 12) {
    ampm1 = 'PM'; // If hours1 is 12 or more, set ampm1 to 'PM'
} else {
    ampm1 = 'AM'; // If hours1 is less than 12, set ampm1 to 'AM'
}

// layer 1 hour reset trigger
  hours1 = hours1 % 12; // Convert to 24-hour format
  
  if (hours1 === 0) {
    hours1 = 12; // If hours is 0, set it to 12
  } else {
  //change nothing
  }
  
  //  layer 1 time display format hh:mm:ss (AM/PM)
  let timeDisplay1 = nf(hours1, 2) + ':' + nf(minutes1, 2) + ':' + nf(seconds1, 2) + ' ' + ampm1;

  
  // layer 1 time display (on screen)
  fill(0);
  textSize(32);
  text(timeDisplay1, width / 2, height / 2);

  
  
  //layer 2 time
  let hours2 = floor(slowSec2 / 3600) % 24;
  let minutes2 = floor(slowSec2 / 60) % 60;
  let seconds2 = floor(slowSec2) % 60;
  
  //layer 2 AM/PM
  let ampm2;

if (hours2 >= 12) {
    ampm2 = 'PM'; // If hours1 is 12 or more, set ampm1 to 'PM'
} else {
    ampm2 = 'AM'; // If hours1 is less than 12, set ampm1 to 'AM'
}
  hours2 = hours2 % 12;
  if (hours2 === 0) {
    hours2 = 12;
  } else {
  }
  
  // layer 2 time display format hh:mm:ss (AM/PM)
  let timeDisplay2 = nf(hours2, 2) + ':' + nf(minutes2, 2) + ':' + nf(seconds2, 2) + ' ' + ampm2;

  
  //layer 2 time display (on screen)
  fill(0);
  textSize(32);
  text(timeDisplay2, width / 3, height / 2);
}


//NEXT STEPS:
  // turn circles into custom functions for adding details
  // Enable mouse roll-overs
  // application of for() loops for details starry details in the bg