var bugs = [];
var score;
var speed;
var playing;


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

function setup() {
  createCanvas(400, 600);
  totalClicks = 0;
  score = 0;
  speed = 3;
  playing = 0
  button = createButton('Start');
  restart = createButton('Restart');
  button.position(width / 2, height / 2);
  restart.position(width / 2, (height / 2) + 150);

  button.mousePressed(playgame);
  restart.mousePressed(playgame);


}

function start() {

}
function draw() {
  background(51);
  restart.hide();



  if (playing == 1) {
    handlebugs();
    addbug(frameCount);
    drawScore();
    player.draw()
    player.move()

  }

}

function playgame() {
  playing = 1
  button.hide();

}


function addbug(frameCount) {
  if (frameCount % 60 === 0) {
    if (random() < 0.6) {
      var xorigin = random(width / 2) + width / 4;
      var type = random() > 0.8

      bugs.push(new Insect(xorigin, type));
    }
  }
}

function mousePressed() {
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].squashed = bugs[i].squashedBy(mouseX, mouseY);
  }
  totalClicks++;

}

function handlebugs() {
  for (var i = bugs.length - 1; i >= 0; i--) {
    bugs[i].update();
    bugs[i].draw();

    if (bugs[i].pos.y > height - 50) {
      gameOver()
    }

    if (bugs[i].squashed) {
      bugs.splice(i, 1);
      score++
    }
  }
}
function drawScore() {
  /* draw score */
  fill(255);
  noStroke();
  text(score, 10, 40);
}

function endGame() {
  playing = 0

}

function gameOver() {


  fill(255);
  noStroke();
  textSize(60);
  textAlign(CENTER);


  text("Game Over!", width / 2, height / 2);
  textAlign(CENTER);
  textSize(30);
  text("Score : " + score, width / 2, (height / 2) + 80);


  noLoop();
  playing = 0
  restart.show()

}
