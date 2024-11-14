import { useState } from "react";
import ListEmpComponent from "./components/ListEmpComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<ListEmpComponent />} />
        <Route path="/employees" element={<ListEmpComponent />} />
        <Route path="/add-employee" element={<EmployeeComponent />} />
        <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
