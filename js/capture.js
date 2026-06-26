// ==============================
// CAPTURE PHOTO
// ==============================

function capturePhoto() {

    const video = document.getElementById("camera");

    renderPhotoWithFrame(video);

    document.getElementById("cameraPage").classList.add("hidden");

    document.getElementById("previewPage").classList.remove("hidden");

}