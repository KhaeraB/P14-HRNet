import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home";
import EmployeesList from "./features/employees/EmployeesList";

function App() {
  return (
    <Routes>
     <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="employees">
            <Route index element={<EmployeesList/>} />
          </Route>
     </Route>
    </Routes>
  );
}

export default App;
