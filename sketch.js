function setup() {
  createCanvas(800, 600);
  player = new ship();
}

function draw() {
  background(0);
  player.show();
}

function ship() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);
  this.w = 25;
  this.h = 100;

  this.show = function () {
    fill(255);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  };
}
