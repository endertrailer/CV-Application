import React, { useState } from "react";
import { nanoid } from "nanoid";
import editImg from "../../assets/edit-btn.svg";
import crossImg from "../../assets/cross.svg";
import Panel from "../panel";
import "../../styles/App.css";

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
    { school: "havard", degree: "cs", id: nanoid() },
    { school: "anjuman", degree: "menchanical", id: nanoid() },
  ]);
  const addItem = (school, degree) => {
    if (school === "" || degree === "") {
      return;
    }
    const newItem = { school, degree, id: nanoid() }; // New item with a unique ID
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
        setTempSchool("");
        setTempDegree("");
        return { school: school, degree: degree, id: element.id };
      }
      return element;
    });
    setItems(tempItems);
  }
  const [tempSchool, setTempSchool] = useState("");
  const [tempDegree, setTempDegree] = useState("");
  console.log(items);
  if (activeItemState) {
    let tempItem = getItemById(activeItemId);
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
        <button
          type="button"
          className="submitBtn"
          onClick={() => {
            editItem(activeItemId);
            setEducationDetails(false);
            setActiveItemState(false);
            setTempSchool("");
            setTempDegree("");
          }}
        >
          Save
        </button>
      </form>
    );
  } else {
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
        <button
          type="button"
          className="submitBtn"
          onClick={() => {
            addItem(tempSchool, tempDegree);
            setEducationDetails(false);
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
            }}
          />{" "}
          {element.school}
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
      <img src={editImg} alt="" className="editImg" /> {details.school}
    </div>
  );
}

export function EducationDetailsPanel() {
  const [educationDetailsIsActive, setEducationDetails] = useState(false);
  const [activeItemState, setActiveItemState] = useState(false);
  const [activeItemId, setActiveItemId] = useState(0);
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
