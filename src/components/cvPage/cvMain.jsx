import { useState } from "react";
import "../../styles/cvPage.css";
import { PersonalCvPart } from "./PersonalCvPart";
export function CvMain(personalData) {
  return (
    <div className="page">
      <PersonalCvPart></PersonalCvPart>
    </div>
  );
}
function pageData() {}
