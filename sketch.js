var cleo
var game1
var game2

let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 5;

function preload() {
  cat = loadImage('images/tamtam.png')
  bookself = loadImage('images/bookself.png')
  arcade = loadImage('images/arcades.png')
  arcade2 = loadImage('images/arcade2.png')
  desk = loadImage('images/desk.png')
  calculator = loadImage('images/calculator.png')
  science = loadImage('images/science.png')
  rug = loadImage('images/rug.png')

}

function setup() {
  createCanvas(710, 400);
  strokeWeight(20.0);
  stroke(255, 100);
  cleo = new Cleo();
  game = new Game1();
  game2 = new Game2();
  // bookself = new Bookself()



}

function draw() {
  background(253, 255, 208);
  image(bookself, 50, 0, 130, 180);
  // image(arcade, 230, 0, 130, 180);
  image(arcade2, 360, 0, 130, 180);
  image(desk, 500, 90, 130, 100);
  image(calculator, 515, 20, 100, 90);
  image(science, 650, 0, 150, 200);
  image(rug, width / 5, height / 2, 500, 200);
  game.display()
  game2.display()
  cleo.move()

  if (
    mouseX > 230 &&
    mouseX < 360 &&
    mouseY < 180 &&
    mouseY > 0
  ) {
    game.move()
  }
  if (
    mouseX > 360 &&
    mouseX < 490 &&
    mouseY < 180 &&
    mouseY > 0
  ) {
    game2.move()
  }
  // if (
  //   mouseY < 180 &&
  //   mouseY > 0
  // ) {
  //   bookself.move()
  // }



}
function mousePressed() {
  game.clicked()
  game2.clicked()
  // bookself.clicked()
}

// function mousePressed() {
//   // Check if mouse is inside the circle
//   let d = dist(mouseX, mouseY, 230, 130);
//   if (d < 180) {
//     // Pick new random color values
//     console.log('clicked on this arcade')
//   }
// }

