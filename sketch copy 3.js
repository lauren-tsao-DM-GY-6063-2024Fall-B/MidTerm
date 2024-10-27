function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  let sec = second();

  // Map elapsed time to angles for rotation
  let angle1 = map(sec, 0, 60, 0, 360); // 1 rotation in 60 seconds
  let angle2 = map(sec, 0, 720, 0, 360); // 12 times slower
  let angle3 = map(sec, 0, 8640, 0, 360); // 144 times slower
  let angle4 = map(sec, 0, 103680, 0, 360); // 1728 times slower

// dream layer 4 circle
push();
translate(width / 2, height / 2);
rotate(angle4);
fill(200, 100, 100);
drawingContext.setLineDash([10, 80, 20, 50]);
ellipse(0, 0, 1100, 1100);
pop();

// dream layer 3 circle
push();
translate(width / 2, height / 2);
rotate(angle3);
fill(200, 200, 100);
drawingContext.setLineDash([10, 80, 20, 50]);
ellipse(0, 0, 800, 800);
pop();

// dream layer 1 circle
push();
translate(width / 2, height / 2); 
rotate(angle2);
fill(100, 150, 200);
drawingContext.setLineDash([10, 50]);
ellipse(0, 0, 500, 500);
pop();

// Reality circle
push();
translate(width / 2, height / 2);
rotate(angle1);
fill(200, 150, 100);
drawingContext.setLineDash([10, 80, 20, 50]);
ellipse(0, 0, 300, 300);
pop();

// Reality orbit circle
push();
translate(width / 2, height / 2); 
rotate(angle1);
fill(100, 150, 200);
ellipse(150, 0, 50, 50);
pop();


push(); 
translate(width / 2, height / 2);
rotate(angle2);
fill(100, 150, 200);
ellipse(250, 0, 50, 50); 
pop(); 

}
