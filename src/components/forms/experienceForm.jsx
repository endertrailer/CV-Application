import React, { useState } from "react";
import { nanoid } from "nanoid";
import editImg from "../../assets/edit-btn.svg";
import crossImg from "../../assets/cross.svg";
import Panel from "../panel";
import "../../styles/App.css";
// EducationDetails returns the html for the component based on arguments
export function ExperienceForm({
  isActive,
  setExperienceDetails,
  activeItemState,
  activeItemId,
  setActiveItemState,
  setActiveItemId,
}) {
  const [items, setItems] = useState(() => [
    {
      companyName: "havard",
      position: "cs",
      description: "i am your sunshine",
      startDate: 2023 - 10 - 14,
      endDate: 2024 - 10 - 14,
      id: nanoid(),
    },
    {
      companyName: "anjuman",
      position: "menchanical",
      description: "i am your sunshine",
      startDate: 2023 - 10 - 14,
      endDate: 2024 - 10 - 14,
      id: nanoid(),
    },
  ]);
  const addItem = (companyName, position, description, startDate, endDate) => {
    if (companyName === "" || position === "") {
      return;
    }
    const newItem = {
      companyName,
      position,
      description,
      startDate,
      endDate,
      id: nanoid(),
    }; // New item with a unique ID
    setItems((prevItems) => [...prevItems, newItem]); // Append new item to the current list
  };
  const removeItem = (id) => {
    const newitems = items.filter((element) => {
      return !(id === element.id);
    });
    setItems(newitems);
    console.log(newitems);
  };
  function getItemById(id) {
    let object = items.filter((item) => item.id === id);
    return object[0];
  }
  function editItem(id) {
    let tempItems = items.map((element) => {
      if (element.id === id) {
        let companyName = tempCompanyName;
        let position = tempPosition;
        let startDate = tempStartDate;
        let endDate = tempEndDate;
        setTempCompanyName("");
        setTempPosition("");
        setTempStartDate("");
        setTempEndDate("");
        return {
          companyName: companyName,
          position: position,
          startDate: startDate,
          endDate: endDate,
          id: element.id,
        };
      }
      return element;
    });
    setItems(tempItems);
  }
  const [tempCompanyName, setTempCompanyName] = useState("");
  const [tempPosition, setTempPosition] = useState("");
  const [tempStartDate, setTempStartDate] = useState("");
  const [tempEndDate, setTempEndDate] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  function resetTemps() {
    setTempCompanyName("");
    setTempPosition("");
    setTempStartDate("");
    setTempEndDate("");
    setTempDescription("");
  }
  if (activeItemState) {
    let tempItem = getItemById(activeItemId);
    console.log(activeItemId);
    return (
      <form action="" className="educationDetailsForm">
        <label htmlFor="companyNameName">companyName </label>
        <div className="field">
          <input
            type="text"
            id="companyNameName"
            value={tempCompanyName}
            onChange={(e) => setTempCompanyName(e.target.value)}
          />
          <div className="line"></div>
        </div>
        <label htmlFor="position">Position </label>
        <div className="field">
          <input
            type="text"
            id="position"
            value={tempPosition}
            onChange={(e) => setTempPosition(e.target.value)}
          />
          <div className="line"></div>
        </div>

        <label htmlFor="educationStartDate">Start date:</label>
        <input
          type="date"
          id="educationStartDate"
          value={tempStartDate}
          onChange={(e) => setTempStartDate(e.target.value)}
        />
        <label htmlFor="educationEndDate">end date:</label>
        <input
          type="date"
          id="educationEndDate"
          value={tempEndDate}
          onChange={(e) => setTempEndDate(e.target.value)}
        />
        <button
          type="button"
          className="submitBtn"
          onClick={() => {
            editItem(activeItemId);
            setExperienceDetails(false);
            setActiveItemState(false);
          }}
        >
          Save
        </button>
      </form>
    );
  } else {
    if (
      (tempCompanyName !== "" ||
        tempPosition !== "" ||
        tempStartDate !== "" ||
        tempEndDate !== "") &&
      !isActive
    ) {
      resetTemps();
    }
    return isActive ? (
      <form action="" className="educationDetailsForm">
        <label htmlFor="companyNameName">Company </label>
        <div className="field">
          <input
            type="text"
            id="companyNameName"
            value={tempCompanyName}
            onChange={(e) => setTempCompanyName(e.target.value)}
          />
          <div className="line"></div>
        </div>
        <label htmlFor="position">Position </label>
        <div className="field">
          <input
            type="text"
            id="position"
            value={tempPosition}
            onChange={(e) => setTempPosition(e.target.value)}
          />
          <div className="line"></div>
        </div>
        <label htmlFor="experienceDescription">description</label>
        <div className="field">
          <textarea
            type="text"
            id="experienceDescription"
            value={tempDescription}
            onChange={(e) => setTempDescription(e.target.value)}
          />
          <div className="line"></div>
        </div>
        {/* <div className="dateContainer"> */}
        <label htmlFor="educationStartDate">Start date:</label>
        <input
          type="date"
          id="educationStartDate"
          value={tempStartDate}
          onChange={(e) => setTempStartDate(e.target.value)}
        />
        <label htmlFor="educationEndDate">end date:</label>
        <input
          type="date"
          id="educationEndDate"
          value={tempEndDate}
          onChange={(e) => setTempEndDate(e.target.value)}
        />
        {/* </div> */}
        <button
          type="button"
          className="submitBtn"
          onClick={() => {
            addItem(
              tempCompanyName,
              tempPosition,
              tempDescription,
              tempStartDate,
              tempEndDate,
            );
            setExperienceDetails(false);
            resetTemps();
          }}
        >
          Add
        </button>
      </form>
    ) : (
      items.map((element) => (
        <div className="educationItem" key={element.id}>
          <img
            src={editImg}
            alt=""
            className="editImg"
            onClick={() => {
              setActiveItemState(true);
              setActiveItemId(element.id);
              setTempCompanyName(element.companyName);
              setTempPosition(element.position);
              setTempStartDate(element.startDate);
              setTempEndDate(element.endDate);
            }}
          />{" "}
          {element.companyName}
          <img
            src={crossImg}
            alt=""
            className="crossImg"
            onClick={() => {
              removeItem(element.id);
            }}
          />
        </div>
      ))
    );
  }
}

export function EducationSavedBar({ details }) {
  return (
    <div className="educationItem">
      <img src={editImg} alt="" className="editImg" /> {details.companyName}
    </div>
  );
}

export function ExperienceDetailsPanel({ inActivePanel }) {
  const [experienceDetailsIsActive, setExperienceDetails] = useState(false);
  const [activeItemState, setActiveItemState] = useState(false);
  const [activeItemId, setActiveItemId] = useState(0);
  if (inActivePanel) {
    if (experienceDetailsIsActive) {
      setExperienceDetails(false);
      setActiveItemState(false);
    }
  }
  return (
    <Panel
      title={"Work Experience "}
      isActive={experienceDetailsIsActive}
      innerBody={
        <ExperienceForm
          isActive={experienceDetailsIsActive}
          setExperienceDetails={setExperienceDetails}
          activeItemState={activeItemState}
          activeItemId={activeItemId}
          setActiveItemState={setActiveItemState}
          setActiveItem={setActiveItemId}
          setActiveItemId={setActiveItemId}
        />
      }
      clickHandler={() => {
        if (activeItemState) {
          setActiveItemState(false);
          setExperienceDetails(false);
        } else {
          setExperienceDetails(!experienceDetailsIsActive);
        }
      }}
    />
  );
}
