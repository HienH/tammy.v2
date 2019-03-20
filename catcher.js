
//player
var player = {
  x: 350,
  y: 530,
  width: 20,
  height: 20,
  draw: function () {
    rect(this.x, this.y, this.width, this.height)
  }
  ,
  move: function () {
    if (mouseX > this.x && this.x <= 680) {
      this.x += 5
    }
    else if (mouseX < this.x && this.x > 0) {
      this.x -= 5
    }

  },


}

//bullets
var bullets = []

function Bullets({ }) {

  return I;
}
//bugs 
var bugs = []

function Bugs({ }) {

  return I;
}


function setup() {
  createCanvas(710, 600);


}

function draw() {
  background(0);
  player.draw()
  player.move()


}