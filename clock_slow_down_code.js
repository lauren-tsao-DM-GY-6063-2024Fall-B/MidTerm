let slowSec = 0;

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
  slowSec = sec / 12; // Divide by 12 to slow down the clock
  
  // Calculate the angle for rotation
  let angle2 = map(slowSec % 60, 0, 60, 0, 360); // Loop slowSec for the seconds
  
  // Dream layer 1 circle
  push();
  translate(width / 2, height / 2); 
  rotate(angle2);
  fill(100, 150, 200);
  drawingContext.setLineDash([10, 50]);
  ellipse(0, 0, 500, 500);
  pop();
  
  // Calculate hours, minutes, and seconds for display
  let hours = floor(slowSec / 3600) % 24; // Total seconds to hours
  let minutes = floor(slowSec / 60) % 60; // Total seconds to minutes
  let seconds = floor(slowSec) % 60;       // Total seconds to seconds
  
  // Format time as hh:mm:ss
  let timeString = nf(hours, 2) + ':' + nf(minutes, 2) + ':' + nf(seconds, 2);
  
  // Display the time
  fill(0); // Set text color to black
  textSize(32); // Set text size
  text(timeString, width / 2, height / 2); // Center the text
}
