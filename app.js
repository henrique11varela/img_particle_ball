
window.addEventListener('load', () => {
    let canvas;
    let ctx;
    let img;
    let effect


    function createImage(imgSrc) {
        document.getElementById("canvasContainer").innerHTML = "<canvas id=\"canvas\"></canvas>";
        document.getElementById("imgContainer").innerHTML = "<img id=\"img\" src='" + imgSrc + "' alt=\"\">";
        setTimeout(() => {
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            img = document.getElementById("img");
            canvas.width = img.width;
            canvas.height = img.height;
            effect = new Effect(canvas.width, canvas.height, img, 1);
            effect.init(ctx);
        }, 1000);
    }

    createImage("test.png");


    document.getElementById("createImageButton").addEventListener("click", () => { createImage(document.getElementById("createImageInput").value) });

    function animate() {
        debugger;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.update();
        effect.draw(ctx);
        window.requestAnimationFrame(animate);
    }
    animate();
});







