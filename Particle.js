class Particle {
    constructor(x, y, size, color, effect) {
        this.effect = effect
        this.originX = Math.floor(x);
        this.originY = Math.floor(y);
        this.x = Math.random() * canvas.width; //current position
        this.y = Math.random() * canvas.height; //current position
        this.size = size;
        this.color = color;
        this.velocityX = 0;
        this.velocityY = 0;
        /* this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0; */
    }
    draw(context) { //draw in canvas
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.size, this.size);
    }
    update() {
        this.x += (this.originX - this.x) * this.effect.speed + (this.velocityX);
        this.y += (this.originY - this.y) * this.effect.speed + (this.velocityY);
    }
    warp() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
    }
}