
/* Particle
    - [originX, originY] is the end position
    - [x, y] is the current position 
*/
class Particle {
    constructor(x, y, size, color, effect) {
        this.effect = effect
        this.originX = Math.floor(x);
        this.originY = Math.floor(y);
        this.x = Math.random() * canvas.width; //current position
        this.y = Math.random() * canvas.height; //current position
        this.forceX = 0;
        this.forceY = 0;
        this.size = size;
        this.color = color;
    }
    draw(context) { //draw in canvas
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
    }
    update() {
        this.x += (this.originX - this.x) * this.effect.speed + (this.forceX *= this.effect.speed * 10);
        this.y += (this.originY - this.y) * this.effect.speed + (this.forceY *= this.effect.speed * 10);
    }
    warp() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
    }
}