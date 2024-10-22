import { useContext, useState } from "react";
import Panel from "../panel";
import { AppContext } from "../../App";
export function PersonalDetails({ isActive, setIsActive }) {
  // const [details, setDetails] = useState({
  //   fullName: "",
  //   email: "",
  //   phoneNumber: "",
  //   description: "",
  // });
  const { details, setDetails } = useContext(AppContext);
  // const [isClosed, setIsClosed] = useState(false);

  return (
    isActive && (
      <form action="" className="PersonalDetailsForm">
        <label htmlFor="fullName">Full name</label>
        <div className="field">
          <input
            type="text"
            id="fullName"
            value={details.fullName}
            onChange={(e) => {
              let tempDetails = {
                fullName: e.target.value,
                email: details.email,
                phoneNumber: details.phoneNumber,
                description: details.description,
              };
              setDetails(tempDetails);
            }}
          />
          <div className="line"></div>
        </div>
        <label htmlFor="email">Enter email</label>
        <div className="field">
          <input
            type="text"
            id="email"
            value={details.email}
            onChange={(e) => {
              let tempDetails = {
                fullName: details.fullName,
                email: e.target.value,
                phoneNumber: details.phoneNumber,
                description: details.description,
              };
              setDetails(tempDetails);
            }}
          />
          <div className="line"></div>
        </div>
        <label htmlFor="phoneNumber">Enter phone number</label>
        <div className="field">
          <input
            type="tel"
            name=""
            id="phoneNumber"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={details.phoneNumber}
            onChange={(e) => {
              let tempDetails = {
                fullName: details.fullName,
                email: details.email,
                phoneNumber: e.target.value,
                description: details.description,
              };
              setDetails(tempDetails);
            }}
          />
          <div className="line"></div>
        </div>

        <label htmlFor="personalDescription">Other</label>
        <div className="field" id="annoyingField">
          <textarea
            type="text"
            id="email"
            value={details.description}
            onChange={(e) => {
              let tempDetails = {
                fullName: details.fullName,
                email: details.email,
                phoneNumber: details.phoneNumber,
                description: e.target.value,
              };
              setDetails(tempDetails);
            }}
          />
          ;<div className="line"></div>
        </div>
        <button
          type="button"
          className="submitBtn"
          onClick={() => {
            setIsActive(false);
          }}
        >
          Save
        </button>
      </form>
    )
  );
}
export function PersonalDetailsPanel({ inActivePanel }) {
  const [PersonalDetailsIsActive, setPersonalDetails] = useState(false);
  if (inActivePanel) {
    if (PersonalDetailsIsActive) {
      setPersonalDetails(false);
    }
  }
  return (
    <Panel
      title={"Personal Details"}
      isActive={PersonalDetailsIsActive}
      innerBody={
        <PersonalDetails
          isActive={PersonalDetailsIsActive}
          setIsActive={setPersonalDetails}
        />
      }
      clickHandler={() => {
        setPersonalDetails(!PersonalDetailsIsActive);
      }}
    />
  );
}
