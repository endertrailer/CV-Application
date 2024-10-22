import { useState, createContext } from "react";
import "./styles/App.css";
import { FormMenu } from "./components/menu";
import { CvMain } from "./components/cvPage/cvMain";
const AppContext = createContext();
function App() {
  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  return (
    <>
      <AppContext.Provider value={{ details, setDetails }}>
        <FormMenu></FormMenu>
        <CvMain></CvMain>
      </AppContext.Provider>
    </>
  );
}

export { AppContext };
export default App;
