import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeeRegistrationForm } from "./components/EmployeeRegistrationForm";
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
        <Route path='/register-employee' element={<EmployeeRegistrationForm></EmployeeRegistrationForm>}></Route>
        <Route path='/employees-list' element={<EmployeesList></EmployeesList>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
