class Game1 {
  constructor() {
    this.x = 230;
    this.y = 0;
    this.speed = 0.3;


  }
  display() {
    image(arcade, this.x, this.y, 130, 180);
  }
  clicked() {
    if (mouseX > 230 && mouseX < 360 && mouseY < 180) {
      window.open("game1.html");


    }
  }
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

}
