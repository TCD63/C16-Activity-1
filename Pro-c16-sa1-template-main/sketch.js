
var box1;
var box2;
var box3;
var box4;

function setup() {
  createCanvas(400, 400);
  box1 = new Box();
  box2 = new Box();
  box3 = new Box();
  box4 = new Box();
}

function draw() {
  background(150);
  box1.show();
  box1.set_width(200);
  box2.show();
  box2.set_width(140);
  box3.show();
  box3.set_width(70);
  box4.show();
  box4.set_width(250);

}

