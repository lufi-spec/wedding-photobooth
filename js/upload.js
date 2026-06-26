// ==========================
// GOOGLE DRIVE UPLOAD
// ==========================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxV4VkHlshkV6f9EhnWaauCML4MrsX4QnAy7HOCbT4fgRR5T_2jdyQN3XdtX5IDTojE/exec";

async function uploadToDrive() {

    const canvas = document.getElementById("canvas");

    const base64 = canvas
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

                image: base64

            })

        });

        const result = await response.json();

        if(result.success){

            showQRCode(result.url);

        }else{

            alert(result.error);

        }

    } catch(err){

        console.log(err);

    }

}