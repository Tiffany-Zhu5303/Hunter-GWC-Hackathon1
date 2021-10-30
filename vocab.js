let img,
  ear,
  hand,
  knee,
  nose,
  eyes,
  brain,
  heart,
  lungs,
  kidney,
  ribs,
  vocab_array;
let earobj,
  handobj,
  kneeobj,
  noseobj,
  eyesobj,
  brainobj,
  heartobj,
  lungsobj,
  kidneyobj,
  ribsobj;
let bool, chosen;
let selection, index;
let choice1, choice2, choice3, choice4;
let button_offset = 100;
let canvasX = 500,
  canvasY = 500;
let imgH = 100,
  imgW = 100;

class vocab {
  constructor(img, choice1, choice2, choice3, correct) {
    this.img = img;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.correct = correct;
  }
}

function preload() {
  ear = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2FIMG_9868.JPG?v=1634933264371"
  );
  hand = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2Fffafacd2-b200-4313-bc69-793639f38a10.image.png?v=1635112493276"
  );
  knee = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2Fa8c19e74-901b-4dfe-88bf-d7065bd46568.image.png?v=1635112628076"
  );
  nose = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2F735a25f0-4207-42d7-aed5-4ad728f23634.image.png?v=1635112900552"
  );
  eyes = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2F78a9afff-8b22-41e1-b729-25301ef5ea90.image.png?v=1635112949418"
  );
  brain = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2Fd79ff09e-b252-4e99-a330-fb9309bc86fa.image.png?v=1635112977454"
  );
  heart = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2F5d5a4c5f-ed30-4420-afca-6e4f1cf59261.image.png?v=1635113176832"
  );
  lungs = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2F72d4ea88-a769-4a54-8edf-365dc2ecad6c.image.png?v=1635113324728"
  );
  kidney = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2F34431feb-2305-4b35-a94e-9cb0e26126ed.image.png?v=1635113494232"
  );
  ribs = loadImage(
    "https://cdn.glitch.me/d77d3993-1a06-47f6-9450-6a142d694150%2Fc86b1c12-a56b-4c1d-b21a-7f719d692918.image.png?v=1635113553401"
  );
}

function setup() {
  createCanvas(canvasX, canvasY);
  background(250);
  earobj = new vocab(ear, "ear", "kidney", "eyes", "ear");
  handobj = new vocab(hand, "eyes", "hand", "ear", "hand");
  kneeobj = new vocab(knee, "ear", "knee", "eyes", "knee");
  noseobj = new vocab(nose, "nose", "hand", "eyes", "nose");
  eyesobj = new vocab(eyes, "ear", "hand", "eyes", "eyes");
  brainobj = new vocab(brain, "ear", "hand", "brain", "brain");
  heartobj = new vocab(heart, "heart", "hand", "eyes", "heart");
  lungsobj = new vocab(lungs, "heart", "lungs", "eyes", "lungs");
  kidneyobj = new vocab(kidney, "ear", "kidney", "eyes", "kidney");
  ribsobj = new vocab(ribs, "ear", "hand", "ribs", "ribs");

  vocab_array = [
    earobj,
    handobj,
    kneeobj,
    noseobj,
    eyesobj,
    brainobj,
    heartobj,
    lungsobj,
    kidneyobj,
    ribsobj
  ];
  index = 0;
  bool = false;

    choice1 = createButton(vocab_array[index].choice1); //Create button
    choice1.position(canvasX / 3 - button_offset, 1.35*(canvasY / 2 - imgH / 2)); //Position Button
    choice1.mousePressed(choice1Chosen); //When myButton is pressed

    choice2 = createButton(vocab_array[index].choice2);
    choice2.position(2 * (canvasX / 3) - button_offset, 1.35*(canvasY / 2 - imgH / 2));
    choice2.mousePressed(choice2Chosen);

    choice3 = createButton(vocab_array[index].choice3);
    choice3.position(3 * (canvasX / 3) - button_offset, 1.35*(canvasY / 2 - imgH / 2));
    choice3.mouseClicked(choice3Chosen);
}

function draw() {
  img = vocab_array[index].img;
  fill(color(255, 204, 0));
  rect((canvasX / 2 - imgW / 2)-10, (canvasY / 4 - imgH / 2)-10, 122, 122);
  image(img, canvasX / 2 - imgW / 2, canvasY / 4 - imgH / 2, 100, 100); //displays image, image(src, x, y, width, height)
  //   {
  //     console.log("running if");

  //     bool=true;
  //     startVocab(vocab_array[index].choice3);
  //   }
}

function choice3Chosen() {
  chosen = vocab_array[index].choice3;
  if (vocab_array[index].correct == chosen) {
    alert("correct");
    index++;
    console.log(index);
    choice1.remove();
    choice2.remove();
    choice3.remove();
    choice1 = createButton(vocab_array[index].choice1); //Create button
    choice1.position(canvasX / 3 - button_offset, 1.35*(canvasY / 2 - imgH / 2)); //Position Button
    choice1.mousePressed(choice1Chosen); //When myButton is pressed

    choice2 = createButton(vocab_array[index].choice2);
    choice2.position(2 * (canvasX / 3) - button_offset, 1.35*(canvasY / 2 - imgH / 2));
    choice2.mousePressed(choice2Chosen);

    choice3 = createButton(vocab_array[index].choice3);
    choice3.position(3 * (canvasX / 3) - button_offset, 1.35*(canvasY / 2 - imgH / 2));
    choice3.mouseClicked(choice3Chosen);
  } else {
    alert("incorrect");
  }
}
function choice2Chosen() {
  chosen = vocab_array[index].choice2;
  if (vocab_array[index].correct == chosen) {
    alert("correct");
    index++;
    console.log(index);
    choice1.remove();
    choice2.remove();
    choice3.remove();
    choice1 = createButton(vocab_array[index].choice1); //Create button
    choice1.position(canvasX / 3 - button_offset, 1.35*(canvasY / 2 - imgH / 2)); //Position Button
    choice1.mousePressed(choice1Chosen); //When myButton is pressed

    choice2 = createButton(vocab_array[index].choice2);
    choice2.position(2 * (canvasX / 3) - button_offset, 1.35*(canvasY / 2 - imgH / 2));
    choice2.mousePressed(choice2Chosen);

    choice3 = createButton(vocab_array[index].choice3);
    choice3.position(3 * (canvasX / 3) - button_offset, 1.35*(canvasY / 2 - imgH / 2));
    choice3.mouseClicked(choice3Chosen);
    //
  } else {
    alert("incorrect");
  }
}
function choice1Chosen() {
  chosen = vocab_array[index].choice1;
  if (vocab_array[index].correct == chosen) {
    alert("correct");
    index++;
    console.log(index);
    choice1.remove();
    choice2.remove();
    choice3.remove();
    choice1 = createButton(vocab_array[index].choice1); //Create button
    choice1.position(canvasX / 3 - button_offset, 1.35*(canvasY / 2 - imgH / 2)); //Position Button
    choice1.mousePressed(choice1Chosen); //When myButton is pressed

    choice2 = createButton(vocab_array[index].choice2);
    choice2.position(2 * (canvasX / 3) - button_offset, 1.35*(canvasY / 2 - imgH / 2));
    choice2.mousePressed(choice2Chosen);

    choice3 = createButton(vocab_array[index].choice3);
    choice3.position(3 * (canvasX / 3) - button_offset, 1.35*(canvasY / 2 - imgH / 2));
    choice3.mouseClicked(choice3Chosen);
    //
  } else {
    alert("incorrect");
  }
}