import { useContext } from "react";
import { AppContext } from "../../App";
import emailImg from "../../assets/envelope.svg";
import phoneImg from "../../assets/phone-call.svg";
export function PersonalCvPart() {
  const { details, setDetails } = useContext(AppContext);
  return (
    <div className="personalContainer">
      <div className="pageFullName">{details.fullName}</div>
      <div className="otherPersonalDetails">
        <div className="email">
          <img src={emailImg} alt="" /> {details.email}
        </div>
        <div className="email">
          {" "}
          <img src={phoneImg} alt="" />
          {details.phoneNumber}
        </div>
      </div>
      <div className="personalDescription">{details.description}</div>
    </div>
  );
}
