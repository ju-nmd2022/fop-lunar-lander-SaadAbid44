function setup() {
  createCanvas(800, 600);
  player = new ship();
}

function draw() {
  background(0);
  player.show();
  player.move();

  if (keyIsDown(UP_ARROW)) {
    player.vel.add(0, -0.1);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.vel.add(0.025, 0);
  }
  if (keyIsDown(LEFT_ARROW)) {
    player.vel.add(-0.025, 0);
  }
}

function ship() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);
  this.gravity = createVector(0, 0.05);
  this.w = 25;
  this.h = 100;

  this.show = function () {
    fill(255);
    rect(this.pos.x, this.pos.y, this.w, this.h);
  };

  this.move = function () {
    this.vel.add(this.gravity);
    this.pos.add(this.vel);
  };
}
