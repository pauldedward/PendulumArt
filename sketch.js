
let angleUp;
let angleDown;
let origin;
let gravityUp;
let gravityDown;
let pendulums = [];
let sizing;
let colorUp;
let colorDown;


function setup() {

    createCanvas(windowWidth, windowHeight);

    angleUp = 2 * PI - .01 ;
    angleDown = PI - .01 ;
    
    gravityUp =  - 1;
    gravityDown = 1;

    sizing = 10;

    colorUp = color(247, 187, 74);
    colorDown = color(109, 235, 87);

    origin = createVector(width / 2, height / 2);
  
    for(let i = 0; i < height + 500; i += sizing) {
        if(random() < .5)
            pendulums.push(new Pendulum(i + sizing, sizing, angleUp, gravityUp, colorUp));
        else
            pendulums.push(new Pendulum(i + sizing, sizing, angleDown, gravityDown, colorDown));
    }
}

function draw() {

    background(78, 39, 97, 20);

    
    pendulums.forEach(pendulum => {
       pendulum.show();
       pendulum.update(); 
    });
   

}
