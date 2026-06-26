// ==============================
// CANVAS ENGINE
// ==============================

function renderPhotoWithFrame(video) {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 1080;
    canvas.height = 1350;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ==========================
    // POSISI FOTO DI DALAM FRAME
    // ==========================
    // Silakan ubah angka ini sampai pas

    const photoX = 140;     // jarak kiri
    const photoY = 170;     // jarak atas
    const photoWidth = 800; // lebar foto
    const photoHeight = 760;// tinggi foto

    // ==========================
    // Crop kamera agar proporsional
    // ==========================

    const vw = video.videoWidth;
    const vh = video.videoHeight;

    const targetRatio = photoWidth / photoHeight;
    const videoRatio = vw / vh;

    let sx = 0;
    let sy = 0;
    let sw = vw;
    let sh = vh;

    if (videoRatio > targetRatio) {

        sw = vh * targetRatio;
        sx = (vw - sw) / 2;

    } else {

        sh = vw / targetRatio;
        sy = (vh - sh) / 2;

    }

    // ==========================
    // Load frame
    // ==========================

    const frame = new Image();

    frame.onload = () => {

    // ==========================
    // Gambar frame
    // ==========================
    ctx.drawImage(
        frame,
        0,
        0,
        canvas.width,
        canvas.height
    );

    // ==========================
    // Posisi foto
    // ==========================

    const photoX = 155;
    const photoY = 270;

    const photoWidth = 820;
const photoHeight = 500;

    const radius = 70;

    drawRoundedImage(
        ctx,
        video,
        sx,
        sy,
        sw,
        sh,
        photoX,
        photoY,
        photoWidth,
        photoHeight,
        radius
    );

};

    frame.src = "frame/wedding-frame.png";

}
function drawRoundedImage(ctx, image, sx, sy, sw, sh, dx, dy, dw, dh, radius) {

    ctx.save();

    ctx.beginPath();

    ctx.moveTo(dx + radius, dy);

    ctx.lineTo(dx + dw - radius, dy);
    ctx.quadraticCurveTo(dx + dw, dy, dx + dw, dy + radius);

    ctx.lineTo(dx + dw, dy + dh - radius);
    ctx.quadraticCurveTo(dx + dw, dy + dh, dx + dw - radius, dy + dh);

    ctx.lineTo(dx + radius, dy + dh);
    ctx.quadraticCurveTo(dx, dy + dh, dx, dy + dh - radius);

    ctx.lineTo(dx, dy + radius);
    ctx.quadraticCurveTo(dx, dy, dx + radius, dy);

    ctx.closePath();

    ctx.clip();

    ctx.drawImage(
        image,
        sx,
        sy,
        sw,
        sh,
        dx,
        dy,
        dw,
        dh
    );

    ctx.restore();

}