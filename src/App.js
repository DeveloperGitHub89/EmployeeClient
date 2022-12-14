import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeesList } from "./components/EmployeesList";
import { Home } from "./components/Home";
import { NavigationBar } from "./components/NavigationBar";
import { RegistrationForm } from "./components/RegistrationForm";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/register-employee' element={<RegistrationForm></RegistrationForm>}></Route>
        <Route path='/employees-list' element={<EmployeesList></EmployeesList>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
