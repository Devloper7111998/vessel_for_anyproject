import QRCode from "react-qr-code";

const Qrcode_manager = (props) => {
  return (
    <QRCode
      size={256}
      style={{ height: "auto", maxWidth: "30px", width: "30px" }}
      // eslint-disable-next-line react/prop-types
      value={props.value}
      viewBox={`0 0 256 256`}
    />
  );
};

export default Qrcode_manager;
