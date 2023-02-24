
window.addEventListener('load', () => {
    //Globals
    let BALL_RADIUS = 20;
    let IMAGE = 1;
    //Elements
    let canvas;
    let ctx;
    let img;
    //Objects
    let effect;
    let ball;
    let mouse;

    function changeBallRadius() {
        switch (ball.radius) {
            case 20:
                ball.radius = 40;
                break;
            case 40:
                ball.radius = 80;
                break;
            case 80:
                ball.radius = 160;
                break;
            case 160:
                ball.radius = 10;
                break;
            default:
                ball.radius = 20;
                break;
        }
    }

    function createImage() {
        let imgSrc;
        switch (IMAGE) {
            case 0:
                imgSrc = "test.png";
                IMAGE = 1;
                break;
            default:
                imgSrc = "test2.png";
                IMAGE = 0;
                break;
        }
        document.getElementById("canvasContainer").innerHTML = "<canvas id=\"canvas\"></canvas>";
        document.getElementById("imgContainer").innerHTML = "<img id=\"img\" src='" + imgSrc + "' alt=\"\">";
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        img = document.getElementById("img");
        mouse = new Mouse(canvas);
        ball = new Ball(canvas, mouse, BALL_RADIUS);
        img.addEventListener("load", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
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
    document.getElementById("radius").addEventListener("click", () => { changeBallRadius() });


    createImage("test.png");

    img.addEventListener("load", () => {
        animate();
    });
});


