class Effect {
    constructor(width, height, image, resolution) {
        this.width = width;
        this.height = height;
        this.particlesArray = [];
        this.image = image;
        this.resolution = resolution;
        this.speed = 0.05;
        this.mouse = {
            radius: 3000,
            x: undefined,
            y: undefined
        };
        window.addEventListener('mousemove', (event) => {
            this.mouse.x = event.x;
            this.mouse.y = event.y;
        });
    }
    init(context) {
        context.drawImage(img, 0, 0);
        const pixels = context.getImageData(0, 0, this.width, this.height).data;
        for (let y = 0; y < this.height; y += this.resolution) {
            for (let x = 0; x < this.width; x += this.resolution) {
                const index = (y * this.width + x) * 4; //index in img array
                const alpha = pixels[index + 3]; //transparency
                const color = 'rgb(' + pixels[index] + ',' + pixels[index + 1] + ',' + pixels[index + 2] + ',' + alpha + ')'; //rgba string
                if (alpha > 0) { //if pixel not transparent
                    this.particlesArray.push(new Particle(x, y, this.resolution, color, this));
                }
            }
        }
    }
    draw(context) {
        this.particlesArray.forEach(element => {
            element.draw(context);
        });
    }
    update() {
        this.particlesArray.forEach(element => {
            element.update();
        });
    }
    warp() {
        this.particlesArray.forEach(element => {
            element.warp();
        });
    }
}