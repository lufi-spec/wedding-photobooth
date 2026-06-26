// ==========================
// PRINT PHOTO
// ==========================

const printBtn = document.getElementById("printBtn");

printBtn.addEventListener("click", printPhoto);

function printPhoto() {

    const canvas = document.getElementById("canvas");

    const image = canvas.toDataURL("image/png");

    const win = window.open("", "_blank");

    win.document.write(`
        <html>
        <head>
            <title>Print</title>

            <style>

                body{

                    margin:0;

                    display:flex;

                    justify-content:center;

                    align-items:center;

                    height:100vh;

                    background:white;

                }

                img{

                    width:58mm;

                }

            </style>

        </head>

        <body>

            <img src="${image}" onload="window.print();window.close();">

        </body>

        </html>
    `);

}