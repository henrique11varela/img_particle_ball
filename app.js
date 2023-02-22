
window.addEventListener('load', () => {
    let canvas;
    let ctx;
    let img;
    let effect;

    function createImage(imgSrc) {
        document.getElementById("canvasContainer").innerHTML = "<canvas id=\"canvas\"></canvas>";
        document.getElementById("imgContainer").innerHTML = "<img id=\"img\" src='" + imgSrc + "' alt=\"\">";
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        img = document.getElementById("img");
        img.addEventListener("load", () => {
            canvas.width = img.width;
            canvas.height = img.height;
            effect = new Effect(canvas.width, canvas.height, canvas, img, 5);
            effect.init(ctx);
        });
    }
    
    createImage("test.png");

    document.getElementById("createImageButton").addEventListener("click", () => { createImage(document.getElementById("createImageInput").value) });
    document.getElementById("createImageInput").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            createImage(document.getElementById("createImageInput").value);
        }
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.update();
        effect.draw(ctx);
        window.requestAnimationFrame(animate);
    }

    img.addEventListener("load", () => {
        animate();
    });
});


