// ==========================
// FRAME ENGINE
// ==========================

function applyFrame() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const frame = new Image();

    frame.src = "frame/wedding-frame.png";

    frame.onload = () => {

        ctx.drawImage(
            frame,
            0,
            0,
            canvas.width,
            canvas.height
        );

    };

}