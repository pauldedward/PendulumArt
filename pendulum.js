class Pendulum {

    constructor(len, size) {
        this.len = len;
        this.size = size;
        this.x = this.len * sin(angle) + origin.x;
        this.y = this.len * cos(angle) + origin.y;
    }

    show() {
        stroke(255);
        strokeWeight(6);
        fill(40);
        line(origin.x, origin.y, this.x, this.y);
        ellipse(this.x, this.y ,this.size);

    }

    update() {
        let force = gravity * sin(angle);
    
        angleA = -1 * force / this.len;
        angleV += angleA;
        angle += angleV;
        
        this.x = this.len * sin(angle) + origin.x;
        this.y = this.len * cos(angle) + origin.y;
    }
}