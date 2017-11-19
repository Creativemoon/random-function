var racerSize = 40;

var start1 = 0;
var start2 = 0;
var start3 = 0;
var start4 = 0;

var startY = 100;

var speed1, speed2, speed3, speed4, speed5, speed6, speed7, speed8;
var switchPoint1, switchPoint2, switchPoint3, switchPoint4;

function setup() {
  createCanvas(600, 500);
  speed1 = random(2,7);
  speed2 = random(2,7);
  speed3 = random(2,7);
  speed4 = random(2,7);
  speed5 = random(2,7);
  speed6 = random(2,7);
  speed7 = random(2,7);
  speed8 = random(2,7);
  switchPoint1 = random(100,450);
  switchPoint2 = random(100,450);
  switchPoint3 = random(100,450);
  switchPoint4 = random(100,450);
}

function draw() {
  background(200, 225, 255);

  strokeWeight(4);
  stroke(0)
  line(580, 0, 580, height);


  strokeWeight(1)


  ellipse(start1, startY, racerSize, racerSize);
  ellipse(start2, startY * 2, racerSize, racerSize);
  ellipse(start3, startY * 3, racerSize, racerSize);
  ellipse(start4, startY * 4, racerSize, racerSize);


  if (start1 > switchPoint1) {
    start1 += speed5
  } else {
    start1 += speed1;
  }

  if (start2 > switchPoint2) {
    start2 += speed6
  } else {
    start2 += speed2;
  }

  if (start3 > switchPoint3) {
    start3 += speed7
  } else {
    start3 += speed3;
  }

  if (start4 > switchPoint4) {
    start4 += speed8
  } else {
    start4 += speed4;
  }
}