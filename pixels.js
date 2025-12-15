const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

let pixels = [];

function createPixel() {
    const size = Math.random() * 10 + 5; // tamanho do quadrado
    pixels.push({
        x: Math.random() * canvas.width,
        y: canvas.height + size,
        size: size,
        speed: Math.random() * 1 + 0.5,
        alpha: Math.random() * 0.4 + 0.1 // transparência
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (pixels.length < 80) {  // quantidade de pixels
        createPixel();
    }

    pixels.forEach((p, i) => {
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.y -= p.speed;

        if (p.y + p.size < 0) {
            pixels.splice(i, 1);
        }
    });

    requestAnimationFrame(animate);
}

animate();

