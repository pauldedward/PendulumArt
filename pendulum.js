class Pendulum {

    constructor(len, size, angle, gravity, colour) {
        this.len = len;
        this.size = size;
        this.angle = angle;
        this.gravity = gravity;
        this.angleV = 0;
        this.angleA;
        this.colour = colour;
        this.x = this.len * sin(this.angle) + origin.x;
        this.y = this.len * cos(this.angle) + origin.y;
    }

    show() {
        stroke(this.colour, 20);
        // noStroke();
        // strokeWeight(4);
        fill(this.colour, 10);
        line(origin.x, origin.y, this.x, this.y);
        ellipse(this.x, this.y ,this.size);

    }

    update() {
        let force = this.gravity * sin(this.angle);
    
        this.angleA = -1 * force / this.len;
        this.angleV += this.angleA;
        this.angle += this.angleV;
        
        this.x = this.len * sin(this.angle) + origin.x;
        this.y = this.len * cos(this.angle) + origin.y;
    }
}