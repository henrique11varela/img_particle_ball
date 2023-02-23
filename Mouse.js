class Mouse {
    constructor(canvas) {
        this.canvas = canvas;
        this.radius = Math.pow(54, 2);
        this.x = undefined;
        this.y = undefined;
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.forceX = 0;
        this.forceY = 0;
        //move
        window.addEventListener('mousemove', (event) => {
            var rect = this.canvas.getBoundingClientRect();
            this.x = event.x - rect.left;
            this.y = event.y - rect.top;
        });
        //click
        window.addEventListener('mousedown', (event) => {
            var rect = this.canvas.getBoundingClientRect();
            this.startX = event.x - rect.left;;
            this.startY = event.y - rect.top;;
        });
        window.addEventListener('mouseup', (event) => {
            var rect = this.canvas.getBoundingClientRect();
            this.endX = event.x - rect.left;
            this.endY = event.y - rect.top;
            this.forceX = this.endX - this.startX;
            this.forceY = this.endY - this.startY;
        });
        //touch
        window.addEventListener('touchstart', (event) => {
            var rect = this.canvas.getBoundingClientRect();
            this.startX = event.changedTouches[0].clientX - rect.left;;
            this.startY = event.changedTouches[0].clientY - rect.top;;
            console.log(event);
        });
        window.addEventListener('touchend', (event) => {
            var rect = this.canvas.getBoundingClientRect();
            this.endX = event.changedTouches[0].clientX - rect.left;
            this.endY = event.changedTouches[0].clientY - rect.top;
            this.forceX = this.endX - this.startX;
            this.forceY = this.endY - this.startY;
        });
    }
}