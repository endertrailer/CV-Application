import { useState } from "react";
import { EducationDetails, EducationDetailsPanel } from "./forms/educationForm";
import { ExperienceDetailsPanel } from "./forms/experienceForm";
import { PersonalDetailsPanel } from "./forms/personalDetails";
import menuImg from "../assets/icons8-menu.svg";
import "../styles/App.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export function FormMenu({ setPersonalDetailsForPage }) {
  const [personalDetailsIsActive, setPersonalDetailsIsActive] = useState(true);
  const [educationDetailsIsActive, setEducationDetails] = useState(true);
  const [experienceDetailsIsActive, setExperienceDetails] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  // State to track the next ID value
  return (
    <Sidebar
      collapsed={collapsed}
      collapsedWidth="70px"
      rootStyles={{
        background:
          "linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)",
        backgroundColor: "blueviolet",
        // border: "black solid 1px",

        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        maxHeight: "90vh",
        position: "fixed",
        zIndex: "100",
      }}
    >
      <Menu>
        <MenuItem
          onClick={() => {
            setCollapsed(!collapsed);
            setEducationDetails(true);
            setPersonalDetailsIsActive(true);
            setExperienceDetails(true);
          }}
          className="menuToggle"
        >
          {!collapsed && <div>CV Application</div>} <img src={menuImg} alt="" />
        </MenuItem>
        {!collapsed && (
          <>
            <SubMenu
              label="Edit details"
              onClick={() => {
                setEducationDetails(!educationDetailsIsActive);
                setPersonalDetailsIsActive(!personalDetailsIsActive);
                setExperienceDetails(!experienceDetailsIsActive);
              }}
            >
              <PersonalDetailsPanel
                inActivePanel={personalDetailsIsActive}
              ></PersonalDetailsPanel>
              <EducationDetailsPanel
                inActivePanel={educationDetailsIsActive}
              ></EducationDetailsPanel>
              <ExperienceDetailsPanel
                inActivePanel={experienceDetailsIsActive}
              ></ExperienceDetailsPanel>
            </SubMenu>
          </>
        )}
      </Menu>
    </Sidebar>
  );
}
