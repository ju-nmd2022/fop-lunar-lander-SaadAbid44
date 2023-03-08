let player;
let landing;

function setup() {
  createCanvas(800, 600);
  player = new ship();
  landing = new space();
}

function draw() {
  background(0);
  player.show();
  player.move();
  landing.show();

  if (keyIsDown(UP_ARROW)) {
    player.vel.y -= 0.1;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.vel.x += 0.025;
  }
  if (keyIsDown(LEFT_ARROW)) {
    player.vel.x -= 0.025;
  }
}

function ship() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0.5, 0);
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

function space() {
  this.x = width / 2;
  this.y = height - 40;
  this.w = 180;
  this.h = 20;

  this.show = function () {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  };
}
