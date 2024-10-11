import { useState } from "react";
export function PersonalDetails({ isActive }) {
  return (
    isActive && (
      <form action="" className="PersonalDetailsForm">
        <label htmlFor="fullName">Full name</label>
        <div className="field">
          <input type="text" id="fullName" />
          <div className="line"></div>
        </div>
        <label htmlFor="email">Enter email</label>
        <div className="field">
          <input type="text" id="email" />
          <div className="line"></div>
        </div>
        <label htmlFor="phoneNumber">Enter phone number</label>
        <div className="field">
          <input
            type="tel"
            name=""
            id="phoneNumber"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          />
          <div className="line"></div>
        </div>

        <label htmlFor="personalDescription">Other</label>
        <div className="field" id="annoyingField">
          <textarea type="text" id="email" />;<div className="line"></div>
        </div>
        <button type="button" className="submitBtn">
          Save
        </button>
      </form>
    )
  );
}
