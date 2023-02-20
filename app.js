
window.addEventListener('load', () => {
    let canvas;
    let ctx;
    let img;
    let effect


    function createImage(imgSrc) {
        document.getElementById("canvasContainer").innerHTML = "<canvas id=\"canvas\"></canvas>";
        document.getElementById("imgContainer").innerHTML = "<img id=\"img\" src='" + imgSrc + "' alt=\"\">";
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        img = document.getElementById("img");
        img.addEventListener("load", () => {
            canvas.width = img.width;
            canvas.height = img.height;
            effect = new Effect(canvas.width, canvas.height, img, 5);
            effect.init(ctx);
            animate();
        });
    }

    createImage("https://static.wixstatic.com/media/523133_0331e5b13e3547b9bb9d82d44aa55301~mv2.jpg/v1/fill/w_490,h_653,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/315519401_680559163434861_6301409944220844147_n_edited.jpg");


    document.getElementById("createImageButton").addEventListener("click", () => { createImage(document.getElementById("createImageInput").value) });

    function animate() {
        debugger;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        effect.update();
        effect.draw(ctx);
        window.requestAnimationFrame(animate);
    }
});







