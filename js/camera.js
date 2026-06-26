let stream = null;

// =============================
// HIDUPKAN KAMERA
// =============================

async function startCamera() {

    const video = document.getElementById("camera");

    try {

        stream = await navigator.mediaDevices.getUserMedia({

            video: {
                facingMode: "user"
            },

            audio: false

        });

        video.srcObject = stream;

    } catch (err) {

        console.error(err);

        alert("Tidak dapat membuka kamera.");

    }

}

// =============================
// COUNTDOWN
// =============================

async function startCountdown() {

    const countdown = document.getElementById("countdown");

    countdown.classList.remove("hidden");

    for (let i = 3; i >= 1; i--) {

        countdown.innerText = i;

        await new Promise(resolve => setTimeout(resolve, 1000));

    }

    countdown.classList.add("hidden");

    capturePhoto();

}