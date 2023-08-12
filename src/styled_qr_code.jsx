// import QRCodeStyling from "qr-code-styling";
// import { useEffect, useRef } from "react";
// const qrCode = new QRCodeStyling({
//   width: 70,
//   height: 70,
//   margin: 0,
//   image: "",
//   dotsOptions: {
//     color: "white",
//     type: "square",
//   },
//   imageOptions: {
//     crossOrigin: "anonymous",
//     margin: 0,
//   },
//   backgroundOptions: {
//     color: "yellow",
//   },
//   cornersSquareOptions: {
//     color: "black",
//   },
//   qrOptions: {
//     errorCorrectionLevel: "Q",
//   },
// });

// export default function QrCodeStylingComponent(props) {
//   const ref = useRef(null);

//   useEffect(() => {
//     const options = qrCode._options;
//     options.cornersSquareOptions.color = props.eyeColor;
//     options.image = props.centerImageSrc;
//     options.backgroundOptions.color = props.bgColor;
//     options.dotsOptions.color = props.fgColor;
//     qrCode.append(ref.current);
//   }, []);

//   useEffect(() => {
//     qrCode.update({
//       data: props.data,
//     });
//   }, [props.data]);

//   return (
//     // This is outer div which have some dynamic styles based on props, you can remove this div if you dont need any parent div.
//     <div
//       style={{
//         backgroundColor: props.bgColor && props.bgColor,
//         display: "inline-block",
//       }}
//     >
//       {/* Below div is most important, where canvas will be rendered of QR code*/}
//       <div ref={ref}></div>

//       {/* Below title is optional, if you dont need it you can remove this one. */}
//       {/* <p style={{ color: props.titleColor || "white", textAlign: "center" }}>
//         {props.title || "JS Mount"}
//       </p> */}
//     </div>
//   );
// }
