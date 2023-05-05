import {BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import Department from "./pages/Department";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="employee" element={<Employee />}/>
          <Route path="department" element={<Department />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
