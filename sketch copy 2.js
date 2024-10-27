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
  angle1 = map(elapsedTime, 0, 60, 0, 360); // 1 rotation in 60 seconds (x1)
  angle2 = map(elapsedTime, 0, 720, 0, 360); // 1 rotation in 120 seconds (x20)
  angle3 = map(elapsedTime, 0, 8640, 0, 360); // 1 rotation in 24000 seconds (x400)
  angle4 = map(elapsedTime, 0, 20736, 0, 360); // 1 rotation in 24000 seconds (x400)

  // Draw the second circle
  push(); // Save the current drawing state
  translate(width / 2, height / 2); // Move to the center
  rotate(angle4); // Rotate by angle3
  fill(200, 100, 100); // Color of the second circle
  drawingContext.setLineDash([10, 80, 20, 50]);
  ellipse(0, 0, 1100, 1100); // Draw the second circle at the center
  pop(); // Restore the previous state

  // Draw the second circle
  push(); // Save the current drawing state
  translate(width / 2, height / 2); // Move to the center
  rotate(angle3); // Rotate by angle3
  fill(200, 200, 100); // Color of the second circle
  drawingContext.setLineDash([10, 80, 20, 50]);
  ellipse(0, 0, 800, 800); // Draw the second circle at the center
  pop(); // Restore the previous state
  
  // Draw the first circle
  push(); // Save the current drawing state
  translate(width / 2, height / 2); // Move to the center
  rotate(angle2); // Rotate by angle1
  fill(100, 150, 200); // Color of the first circle
  drawingContext.setLineDash([10, 50]);
  ellipse(0, 0, 500, 500); // Draw the first circle at the center
  pop(); // Restore the previous state
  
  // Draw the second circle
  push(); // Save the current drawing state
  translate(width / 2, height / 2); // Move to the center
  rotate(angle1); // Rotate by angle2
  fill(200, 150, 100); // Color of the second circle
  drawingContext.setLineDash([10, 80, 20, 50]);
  ellipse(0, 0, 300, 300); // Draw the second circle at the center
  pop(); // Restore the previous state

  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust the canvas size when the window is resized
}

