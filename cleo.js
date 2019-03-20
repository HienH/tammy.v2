function Cleo() {
  this.move = function () {
    dx = mouseX - x;
    dy = mouseY - y;
    angle1 = atan2(dy, dx);
    x = mouseX - cos(angle1) * segLength;
    y = mouseY - sin(angle1) * segLength;

    segment(x, y, angle1);
    image(cat, x, y, 130, 180);
  }

  function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a);
    line(0, 0, segLength, 0);
    pop();
  }
}