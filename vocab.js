let img, ear;
let choice1, choice2, choice3, choice4;
let button_offset = 100;
let canvasX = 500,
  canvasY = 500;
let imgH = 100,
  imgW = 100;

function preload() {
  ear = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2FIMG_9868.JPG?v=1634933264371"
  );
}
function setup() {
  createCanvas(canvasX, canvasY);
  background(250);
}

function draw() {
  img = ear;
  image(img, canvasX / 2 - imgW / 2, canvasY / 4 - imgH / 2, 100, 100); //displays image, image(src, x, y, width, height)
  choice1 = createButton("Choice 1"); //Create button
  choice1.position(canvasX / 3 - button_offset, canvasY / 2 - imgH / 2); //Position Button
  choice1.mousePressed(startVocab); //When myButton is pressed
  choice4 = new Clickable(23, 42);
  choice4.draw();

  choice2 = createButton("Choice 2");
  choice2.position(2 * (canvasX / 3) - button_offset, canvasY / 2 - imgH / 2);
  choice2.mousePressed(startVocab);

  choice2 = createButton("Choice 3");
  choice2.position(3 * (canvasX / 3) - button_offset, canvasY / 2 - imgH / 2);
  choice2.mousePressed(startVocab);
}

function startVocab() {
  rect(mouseX, mouseY, 100, 100);
}
