// ==========================
// ELEMENT
// ==========================

const homePage = document.getElementById("homePage");
const cameraPage = document.getElementById("cameraPage");
const previewPage = document.getElementById("previewPage");

const startBtn = document.getElementById("startBtn");
const captureBtn = document.getElementById("captureBtn");
const retakeBtn = document.getElementById("retakeBtn");
const qrBtn = document.getElementById("qrBtn");

// ==========================
// MULAI FOTO
// ==========================

startBtn.addEventListener("click", () => {

    homePage.classList.add("hidden");

    cameraPage.classList.remove("hidden");

    startCamera();

});

// ==========================
// AMBIL FOTO
// ==========================

captureBtn.addEventListener("click", () => {

    startCountdown();

});

// ==========================
// FOTO LAGI
// ==========================

retakeBtn.addEventListener("click", () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    previewPage.classList.add("hidden");

    cameraPage.classList.remove("hidden");

});

// ==========================
// DOWNLOAD (UPLOAD GOOGLE DRIVE)
// ==========================

qrBtn.addEventListener("click", async () => {

    await uploadToDrive();

});