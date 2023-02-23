
window.addEventListener('load', () => {
    let canvas;
    let ctx;
    let img;
    let effect;
    let ball;
    let mouse;
    

    function createImage(imgSrc) {
        document.getElementById("canvasContainer").innerHTML = "<canvas id=\"canvas\"></canvas>";
        document.getElementById("imgContainer").innerHTML = "<img id=\"img\" src='" + imgSrc + "' alt=\"\">";
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        img = document.getElementById("img");
        mouse = new Mouse(canvas);
        ball = new Ball(canvas, mouse);
        img.addEventListener("load", () => {
            canvas.width = img.width;
            canvas.height = img.height;
            effect = new Effect(canvas.width, canvas.height, canvas, img, 5, ball);
            effect.init(ctx);
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.update();
        effect.draw(ctx);
        ball.update();
        ball.draw(ctx);
        window.requestAnimationFrame(animate);
    }

    document.getElementById("Penguin").addEventListener("click", () => { createImage("test.png") });
    document.getElementById("Henrique").addEventListener("click", () => { createImage("test2.png") });


    createImage("test.png");

    img.addEventListener("load", () => {
        animate();
    });
});


