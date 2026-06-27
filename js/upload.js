// ==============================
// GOOGLE DRIVE UPLOAD
// ==============================

const SCRIPT_URL =
"https://script.google.com/macros/s/AKfycbxV4VkHlshkV6f9EhnWaauCML4MrsX4QnAy7HOCbT4fgRR5T_2jdyQN3XdtX5IDTojE/exec";

async function uploadToDrive() {

    const canvas = document.getElementById("canvas");

    const image = canvas
        .toDataURL("image/png")
        .replace("data:image/png;base64,", "");

    const filename = "PHOTO_" + Date.now() + ".png";

    try {

        const response = await fetch(SCRIPT_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                filename,
                image
            })

        });

        const result = await response.json();

        console.log(result);

        if (result.success) {

            showQR(result.url);

        } else {

            alert("Upload gagal!");
            console.log(result.error);

        }

    } catch (err) {

        console.log(err);

        alert("Tidak dapat terhubung ke Google Drive.");

    }

}

function showQR(url) {

    const popup = document.getElementById("qrPopup");

    popup.classList.remove("hidden");

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {

        text: url,
        width: 250,
        height: 250

    });

    setTimeout(() => {

        popup.classList.add("hidden");

        document.getElementById("previewPage").classList.add("hidden");

        document.getElementById("homePage").classList.remove("hidden");

    }, 15000);

}