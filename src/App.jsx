import { useState } from "react";
import "./styles/App.css";
import { FormMenu } from "./components/menu";
function App() {
  return (
    <>
      <div className="sidebarToggle">
        <FormMenu></FormMenu>
      </div>
    </>
  );
}

export default App;
