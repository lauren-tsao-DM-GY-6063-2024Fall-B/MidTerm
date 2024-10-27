//read up on how to make something rotate every millis()
//to make the circle layers rotate at different times

let angle1 = 0; // Angle for the first circle
let angle2 = 0; // Angle for the second circle
let startTime;

function setup() {
  createCanvas(windowWidth, windowHeight); // Create a canvas that fills the window
  angleMode(DEGREES); // Set angle mode to degrees
  startTime = millis(); // Record the start time
}

function draw() {
  background(220); // Clear the background

  // Calculate the elapsed time in seconds
  let elapsedTime = (millis() - startTime) / 1000;

  // Map elapsed time to angles for rotation
  angle1 = map(elapsedTime, 0, 60, 0, 360); // 1 rotation in 60 seconds
  angle2 = map(elapsedTime, 0, 120, 0, 360); // 1 rotation in 120 seconds

  // Draw the first circle
  push(); // Save the current drawing state
  translate(width / 2, height / 2); // Move to the center
  rotate(angle1); // Rotate by angle1
  fill(100, 150, 200); // Color of the first circle
  ellipse(100, 0, 50, 50); // Draw the first circle
  pop(); // Restore the previous state
  
  // Draw the second circle
  push(); // Save the current drawing state
  translate(width / 2, height / 2); // Move to the center
  rotate(angle2); // Rotate by angle2
  fill(200, 150, 100); // Color of the second circle
  ellipse(150, 0, 50, 50); // Draw the second circle
  pop(); // Restore the previous state
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust the canvas size when the window is resized
}
