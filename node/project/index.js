import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter the URL to get the QR code :",
      name: "URL",
    },
  ])
  .then((answer) => {
    console.log(answer.URL);
    var qr_image = qr.image(answer.URL);
    qr_image.pipe(fs.createWriteStream("QRcode.png"));
  })
  .catch((err) => {
    console.log(`an error occured`);
    console.log(`The error is : ${err}`);
  });
