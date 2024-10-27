let slowSec1 = 0;
let slowSec2 = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  
  // Get the current time
  let now = new Date();
  let sec = now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600; // Total seconds since midnight
  
  // Slow down the clock
  slowSec1 = sec / 12; // Divide by 12 to slow down the clock
  slowSec2 = sec /144;
  
  // Calculate the angle for rotation
  let angle1 = map(slowSec1 % 60, 0, 60, 0, 360); // Loop slowSec for the seconds
  let angle2 = map(slowSec2 % 60, 0, 60, 0, 360);

  
  // Dream layer 2 circle
  push();
  translate(width / 3, height / 2); 
  rotate(angle2);
  fill(100, 150, 100);
  drawingContext.setLineDash([10, 50]);
  ellipse(0, 0, 400, 400);
  pop();
  
  // Dream layer 1 circle
  push();
  translate(width / 2, height / 2); 
  rotate(angle1);
  fill(100, 150, 200);
  drawingContext.setLineDash([10, 50]);
  ellipse(0, 0, 300, 300);
  pop();

  //dream layer 1 circle time
  // Calculate hours, minutes, and seconds for display
  let hours1 = floor(slowSec1 / 3600) % 24; // Total seconds to hours
  let minutes1 = floor(slowSec1 / 60) % 60; // Total seconds to minutes
  let seconds1 = floor(slowSec1) % 60;       // Total seconds to seconds
  
  // Determine AM/PM
  let ampm1 = hours1 >= 12 ? 'PM' : 'AM';
  hours1 = hours1 % 12; // Convert to 12-hour format
  
  if (hours1 === 0) {
    hours1 = 12; // If hours is 0, set it to 12
  } else {
    // Do nothing; hours remains unchanged
  }
  
  //  time display format hh:mm:ss (AM/PM)
  let timeDisplay1 = nf(hours1, 2) + ':' + nf(minutes1, 2) + ':' + nf(seconds1, 2) + ' ' + ampm1;

  // time display (on screen)
  fill(0); // Set text color to black
  textSize(32); // Set text size for time
  text(timeDisplay1, width / 2, height / 2); // Center the time text

  //dream layer 2 circle time
  let hours2 = floor(slowSec2 / 3600) % 24;
  let minutes2 = floor(slowSec2 / 60) % 60;
  let seconds2 = floor(slowSec2) % 60;
  
  //AM/PM
  let ampm2 = hours2 >= 12 ? 'PM' : 'AM';
  hours2 = hours2 % 12;
  if (hours2 === 0) {
    hours2 = 12;
  } else {
  }
  
  // time display format hh:mm:ss (AM/PM)
  let timeDisplay2 = nf(hours2, 2) + ':' + nf(minutes2, 2) + ':' + nf(seconds2, 2) + ' ' + ampm2;

  
  //time display (on screen)
  fill(0);
  textSize(32);
  text(timeDisplay2, width / 3, height / 2);
}
