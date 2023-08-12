// import MyDocument from "./pdf_manage";
// import { PDFViewer } from "@react-pdf/renderer";
// import QRCode from "react-qr-code";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Qr_code_col from "./qrcodecol";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import MyDocument from "./pdf_viewr";
// import { PDFViewer } from "@react-pdf/renderer";

import "./style.css";

function App() {
  const numbers = new Array(40)
    .fill()
    .map((_, index) =>
      (index + 1) % 2 != 0 && index + 1 != 1 ? index + 1 : 0
    );

  // const printDocument = () => {
  //   const input = document.getElementById("Print_content");
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "JPEG", 0, 0);
  //     // pdf.output('dataurlnewwindow');
  //     pdf.save("download.pdf");
  //   });
  // };

  // const B64_convert = (val) => {
  //   // const text = "1";
  //   // const canvas = document.createElement("canvas");
  //   // const context = canvas.getContext("2d");
  //   // canvas.width = 30;
  //   // canvas.height = 10;
  //   // if (context) {
  //   //   context.font = "30px Arial";
  //   //   context.fillText(text, 50, 80);
  //   // }
  //   // const base64Image = canvas.toDataURL("image/png");
  //   // console.log(`data is ${base64Image}`);
  //   // return base64Image;

  //   const text = val;

  //   // Create a canvas element
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");

  //   // Set canvas dimensions
  //   const canvasWidth = 30;
  //   const canvasHeight = 30;
  //   canvas.width = canvasWidth;
  //   canvas.height = canvasHeight;

  //   // Draw the text on the canvas
  //   // Set font properties
  //   const fontSize = 4;
  //   context.font = `${fontSize}px `;
  //   // Measure text dimensions
  //   const textWidth = context.measureText(text).width;
  //   const textHeight = fontSize;
  //   // Calculate text position for centering
  //   const textX = (canvasWidth - textWidth) / 2;
  //   const textY = (canvasHeight + textHeight) / 2;
  //   // Draw the text on the canvas
  //   context.fillText(text, textX, textY);
  //   context.fillStyle = "black";

  //   // Convert canvas data to base64 image
  //   const base64Image = canvas.toDataURL("image/png");

  //   // Create an image element to display the base64 image
  //   const imageElement = document.createElement("img");
  //   imageElement.src = base64Image;

  //   // Append the image element to the body
  //   document.body.appendChild(imageElement);

  //   return base64Image;
  // };

  console.log(numbers);
  return (
    <>
      {/* <button className="btn btn-success" onClick={printDocument}>
        Print
      </button> */}

      <div id="Print_content">
        {numbers.map((i) => {
          return i != 0 ? (
            <span style={{ display: "flex" }} key={i}>
              <>
                <div className="container card_cont">
                  <div className="Qr_code_group" key={i}>
                    {[...Array(parseInt(i - 2) * 7)].map((_, j) => {
                      return j + 1 > (parseInt(i) - 3) * 7 ? (
                        <Qr_code_col value={parseInt(j) + 1} />
                      ) : (
                        // <QrCodeStylingComponent
                        //   data={parseInt(j) + 1}
                        //   bgColor="white"
                        //   fgColor="black"
                        //   eyeColor="green"
                        //   centerImageSrc={B64_convert(parseInt(j) + 1)}
                        // />
                        <></>
                      );
                    })}
                  </div>
                </div>
                <div className="container card_cont2">
                  <div className="Qr_code_group2">
                    {[...Array(parseInt(i - 1) * 7)].map((_, j) => {
                      return j + 1 > (parseInt(i) - 2) * 7 ? (
                        <Qr_code_col value={parseInt(j) + 1} />
                      ) : (
                        <></>
                      );
                    })}
                  </div>
                </div>
              </>
            </span>
          ) : (
            <></>
          );
        })}
      </div>
    </>
  );
}

export default App;
