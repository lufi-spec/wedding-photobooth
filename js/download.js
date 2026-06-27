// ==============================
// DOWNLOAD FOTO
// ==============================

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", downloadPhoto);

function downloadPhoto() {

    const canvas = document.getElementById("canvas");

    const link = document.createElement("a");

    link.download = "Wedding_Photo_" + Date.now() + ".png";

    link.href = canvas.toDataURL("image/png");

    link.click();

}