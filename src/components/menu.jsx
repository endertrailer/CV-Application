import { useState } from "react";
import { nanoid } from "nanoid";
import {
  EducationDetails,
  EducationDetailsPanel,
  EducationSavedBar,
} from "./forms/educationForm";
import { PersonalDetails } from "./forms/personalDetails";
import Panel from "./panel";
import menuImg from "../assets/icons8-menu.svg";
import "../styles/App.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export function FormMenu() {
  const [personalDetailsIsActive, setPersonalDetailsIsActive] = useState(false);
  const [educationDetailsIsActive, setEducationDetails] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const initialItems = [
    { school: "havard", degree: "cs", id: nanoid() },
    { school: "anjuman", degree: "menchanical", id: nanoid() },
  ];

  const [items, setItems] = useState(initialItems);

  const [activeItem, setActiveItem] = useState(0);
  const [activeItemState, setActiveItemState] = useState(false);
  // State to track the next ID value
  return (
    <Sidebar
      collapsed={collapsed}
      collapsedWidth="70px"
      rootStyles={{
        background:
          "linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)",
        backgroundColor: "blueviolet",
        border: "black solid 1px",
      }}
    >
      <Menu>
        <MenuItem
          onClick={() => setCollapsed(!collapsed)}
          className="menuToggle"
        >
          {!collapsed && <div>CV Application</div>} <img src={menuImg} alt="" />
        </MenuItem>
        {!collapsed && (
          <>
            <SubMenu
              label="Edit details"
              onClick={() => {
                setPersonalDetailsIsActive(false);
                setEducationDetails(false);
              }}
            >
              <Panel
                title={"Personal details"}
                isActive={personalDetailsIsActive}
                innerBody={
                  <PersonalDetails
                    isActive={personalDetailsIsActive}
                  ></PersonalDetails>
                }
                clickHandler={() => {
                  setPersonalDetailsIsActive(!personalDetailsIsActive);
                  setEducationDetails(false);
                }}
              ></Panel>
              <EducationDetailsPanel></EducationDetailsPanel>
            </SubMenu>

            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </>
        )}
      </Menu>
    </Sidebar>
  );
}
