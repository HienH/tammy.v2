class Game2 {
  constructor() {
    this.x = 360;
    this.y = 0;
    this.speed = 0.3;


  }
  display() {
    image(arcade2, this.x, this.y, 130, 180);
  }
  clicked() {
    if (mouseX > 360 && mouseX < 480 && mouseY < 180) {
      window.open("game2.html");

    }
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

}
