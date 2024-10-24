import { nanoid } from "nanoid";
import React, { useState } from "react";
import crossImg from "../../assets/cross.svg";
import editImg from "../../assets/edit-btn.svg";
import "../../styles/App.css";
import Panel from "../panel";
// EducationDetails returns the html for the component based on arguments
export function EducationDetails({
  isActive,
  setEducationDetails,
  activeItemState,
  activeItemId,
  setActiveItemState,
  setActiveItemId,
}) {
  const [items, setItems] = useState(() => [
    {
      school: "havard",
      degree: "cs",
      startDate: 2023 - 10 - 14,
      endDate: 2024 - 10 - 14,
      id: nanoid(),
    },
    {
      school: "anjuman",
      degree: "menchanical",
      startDate: 2023 - 10 - 14,
      endDate: 2024 - 10 - 14,
      id: nanoid(),
    },
  ]);
  const addItem = (school, degree, startDate, endDate) => {
    if (school === "" || degree === "") {
      return;
    }
    const newItem = { school, degree, startDate, endDate, id: nanoid() }; // New item with a unique ID
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
        let school = tempSchool;
        let degree = tempDegree;
        let startDate = tempStartDate;
        let endDate = tempEndDate;
        setTempSchool("");
        setTempDegree("");
        setTempStartDate("");
        setTempEndDate("");
        return {
          school: school,
          degree: degree,
          startDate: startDate,
          endDate: endDate,
          id: element.id,
        };
      }
      return element;
    });
    setItems(tempItems);
  }
  const [tempSchool, setTempSchool] = useState("");
  const [tempDegree, setTempDegree] = useState("");
  const [tempStartDate, setTempStartDate] = useState("");
  const [tempEndDate, setTempEndDate] = useState("");
  function resetTemps() {
    setTempSchool("");
    setTempDegree("");
    setTempStartDate("");
    setTempEndDate("");
  }
  if (activeItemState) {
    console.log(activeItemId);
    return (
      <form action="" className="educationDetailsForm">
        <label htmlFor="schoolName">School </label>
        <div className="field">
          <input
            type="text"
            id="schoolName"
            value={tempSchool}
            onChange={(e) => setTempSchool(e.target.value)}
          />
          <div className="line"></div>
        </div>
        <label htmlFor="degree">Degree </label>
        <div className="field">
          <input
            type="text"
            id="degree"
            value={tempDegree}
            onChange={(e) => setTempDegree(e.target.value)}
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
            setEducationDetails(false);
            setActiveItemState(false);
          }}
        >
          Save
        </button>
      </form>
    );
  } else {
    if (
      (tempSchool !== "" ||
        tempDegree !== "" ||
        tempStartDate !== "" ||
        tempEndDate !== "") &&
      !isActive
    ) {
      resetTemps();
    }
    return isActive ? (
      <form action="" className="educationDetailsForm">
        <label htmlFor="schoolName">School </label>
        <div className="field">
          <input
            type="text"
            id="schoolName"
            value={tempSchool}
            onChange={(e) => setTempSchool(e.target.value)}
          />
          <div className="line"></div>
        </div>
        <label htmlFor="degree">Degree </label>
        <div className="field">
          <input
            type="text"
            id="degree"
            value={tempDegree}
            onChange={(e) => setTempDegree(e.target.value)}
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
            addItem(tempSchool, tempDegree, tempStartDate, tempEndDate);
            setEducationDetails(false);
            setTempStartDate("");
            setTempEndDate("");
            setTempSchool("");
            setTempDegree("");
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
              setTempSchool(element.school);
              setTempDegree(element.degree);
              setTempStartDate(element.startDate);
              setTempEndDate(element.endDate);
            }}
          />{" "}
          {element.school}
          <img
            src={crossImg}
            alt=""
            className="crossImg"
            onClick={() => {
              removeItem(element.id);
              setTempDegree("");
              setTempSchool("");
              setTempStartDate("");
              setTempEndDate("");
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
      <img src={editImg} alt="" className="editImg" /> {details.school}
    </div>
  );
}

export function EducationDetailsPanel({ inActivePanel }) {
  const [educationDetailsIsActive, setEducationDetails] = useState(false);
  const [activeItemState, setActiveItemState] = useState(false);
  const [activeItemId, setActiveItemId] = useState(0);

  if (inActivePanel) {
    if (educationDetailsIsActive) {
      setEducationDetails(false);
      setActiveItemState(false);
    }
  }
  return (
    <Panel
      title={"Education: "}
      isActive={educationDetailsIsActive}
      innerBody={
        <EducationDetails
          isActive={educationDetailsIsActive}
          setEducationDetails={setEducationDetails}
          activeItemState={activeItemState}
          activeItemId={activeItemId}
          setActiveItemState={setActiveItemState}
          setActiveItem={setActiveItemId}
          setActiveItemId={setActiveItemId}
        />
      }
      clickHandler={() => {
        // if (inActivePanel && !educationDetailsIsActive) {
        //   setEducationDetails(true);
        //   setActiveItemState(false);
        // }
        if (activeItemState) {
          setActiveItemState(false);
          setEducationDetails(false);
        } else {
          setEducationDetails(!educationDetailsIsActive);
        }
      }}
    />
  );
}
