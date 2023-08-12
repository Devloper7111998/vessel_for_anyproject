/* eslint-disable react/prop-types */
import Qrcode_manager from "./qrmamnager";

const Qr_code_col = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className="qr_one_col" key={props.value}>
      <div className="col_qr_code">
        <div className="code_title">{props.value}</div>
        <div className="qrcode">
          <Qrcode_manager value={JSON.stringify(props.value)} />
        </div>
        <div className="code_title">{props.value}</div>
        <div className="qrcode">
          <Qrcode_manager value={JSON.stringify(props.value)} />
        </div>
        <div className="code_title">{props.value}</div>
        <div className="qrcode">
          <Qrcode_manager value={JSON.stringify(props.value)} />
        </div>
      </div>
    </div>
  );
};

export default Qr_code_col;
