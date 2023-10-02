import { Route, Routes } from "react-router-dom";
import { Roles } from "../config/Roles";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashoard from "../pages/Dashboard";
import Feature from "../pages/Feature";
import Home from "../pages/Home";
import Projects from "../pages/projects";
import UserForm from "../pages/projects/UserForm";
import PrivateRoutes from "./PrivateRoutes";

function AdminRoutes() {
    return (
        <>
        <Routes>
            <Route path='/admin' element={<PrivateRoutes requiredRoles={[String(Roles.ADMIN)]} />}>
                <Route path='home' element={<Home />} />
                <Route path='dashboard' element={<Dashoard />} />
                <Route path='feature' element={<Feature />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='projects' element={<Projects />} />
                <Route path='projects/user-form' element={<UserForm />} />
            </Route>
            </Routes>
        </>
    )
}

export default AdminRoutes;