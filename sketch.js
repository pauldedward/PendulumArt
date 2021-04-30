
let bob;
let len;
let angle;
let origin;
let angleA;
let angleV;
let gravity;

function setup() {

    createCanvas(600, 400);

    angle = PI / 4;
    angleV = 0;
    gravity = 1;
    bob = createVector();
    origin = createVector(300, 0);
    len = 200;
   

}

function draw() {

    background(20);

    let force = gravity * sin(angle);
    
    angleA = -1 * force / len;
    angleV += angleA;
    angle += angleV;
    
    bob.x = len * sin(angle) + origin.x;
    bob.y = len * cos(angle) + origin.y;

    stroke(255);
    strokeWeight(6);
    fill(40);
    line(origin.x, origin.y , bob.x, bob.y);
    circle(bob.x, bob.y ,64);

    // noLoop();

}
