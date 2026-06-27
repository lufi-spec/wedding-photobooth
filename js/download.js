// ==============================
// DOWNLOAD FOTO
// ==============================

function downloadPhoto() {

    const canvas = document.getElementById("canvas");

    const link = document.createElement("a");

    link.href = canvas.toDataURL("image/png");

    link.download = "Wedding_Photo_" + Date.now() + ".png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}