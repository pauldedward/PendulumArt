
let bob, len, angle, origin;

function setup() {

    createCanvas(600, 400);

    angle = PI / 4;
    bob = createVector();
    origin = createVector(300, 0);
    len = 300;
   

}

function draw() {

    background(20);

    bob.x = len * cos(angle) + origin.x;
    bob.y = len * sin(angle) + origin.y;

    stroke(255);
    strokeWeight(6);
    fill(40);
    line(origin.x, origin.y , bob.x, bob.y);
    circle(bob.x, bob.y ,60);

}
