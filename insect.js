function Insect(xorigin, type) {
  this.origin = xorigin;
  this.pos = createVector(0, 0)
  this.serpentine = random(3) + 3;
  this.type = type;
  this.squashed = false;
  this.r = 60;
}
Insect.prototype.draw = function () {
  stroke(255);
  strokeWeight(3);
  fill(this.type ? "#00FFFF" : "#FF4444");
  ellipse(this.pos.x, this.pos.y, this.r);

};

Insect.prototype.update = function () {
  this.pos.y += speed;
  this.pos.x = cos(this.pos.y * (0.005 * this.serpentine) + this.serpentine * 10) * (width / this.serpentine) + this.origin;


};

Insect.prototype.squashedBy = function (x, y) {
  var d = dist(x, y, this.pos.x, this.pos.y)
  return (d < this.r);
}
