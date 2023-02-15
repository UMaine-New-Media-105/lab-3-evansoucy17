//Lab 3 Evan Soucy ex3
function setup() {
  createCanvas(400, 400);
}


function draw() {
  addclone(0,0,1,"orange"); // have to add x,y,size to make color work
}

function addclone(x, y, size, customColor) {
  push();
  translate(x, y);
  scale(size);


  noStroke(0);

  if (mouseIsPressed) {
    fill(customColor); // 212th legion
  } else if (mouseX > 100 && mouseX <= 200) {
    fill("dodgerblue"); // 501st legion
  } else if (mouseX > 200 && mouseX <= 300) {
    fill("purple"); //187th legion
  } else if (mouseX > 300 && mouseX < 400) {
    fill("yellow"); //327th legion
  } else if (mouseY > 100 && mouseX < 200) {
    fill(" lightseagreen"); //howzer color
  } else if (mouseY > 200) {
    fill(" palegreen"); //Deppa Bilaba color
  } else {
    fill("red"); //courasaunt guard
  }

  //batallion color
  triangle(50, 0, 200, 400, 350, 0);

  //visor
  fill("black");
  rect(50, 50, 300, 75);
  rect(150, 50, 90, 225);
  triangle(200, 220, 400, 380, 200, 310);
  triangle(200, 220, 0, 380, 200, 310);
  pop();
}
