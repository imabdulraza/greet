import { Route, Routes } from "react-router-dom";
import { Roles } from "../config/Roles";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashoard from "../pages/Dashboard";
import Features from "../pages/features";
import UseCallback from "../pages/features/UseCallback";
import Home from "../pages/Home";
import OnlineStatus from "../pages/OnlineStatus";
import Projects from "../pages/projects";
import CheckboxForm from "../pages/projects/CheckboxForm";
import DateForm from "../pages/projects/DateForm";
import DynamicForm from "../pages/projects/DynamicForm";
import ImageUploadForm from "../pages/projects/ImageUploadForm";
import MixForm from "../pages/projects/MixForm";
import RadioButtonForm from "../pages/projects/RadioButtonForm";
import SelectInputForm from "../pages/projects/SelectInputForm";
import TableGrid from "../pages/projects/TableGrid";
import TabsForm from "../pages/projects/TabsForm";
import UserForm from "../pages/projects/UserForm";
import PrivateRoutes from "./PrivateRoutes";


function UserRoutes() {
    return (
        <>
        <Routes>
            <Route path='/user' element={<PrivateRoutes requiredRoles={[String(Roles.USER)]} />}>
                <Route path='home' element={<Home />} />
                <Route path='dashboard' element={<Dashoard />} />
                <Route path='features' element={<Features />} />
                <Route path='features/use-callback' element={<UseCallback />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='projects' element={<Projects />} />
                <Route path='online-status' element={<OnlineStatus />} />
                <Route path='projects/user-form' element={<UserForm />} />
                <Route path='projects/checkbox-form' element={<CheckboxForm />} />
                <Route path='projects/radio-button-form' element={<RadioButtonForm />} />
                <Route path='projects/image-upload-form' element={<ImageUploadForm />} />
                <Route path='projects/dynamic-form' element={<DynamicForm />} />
                <Route path='projects/select-input-form' element={<SelectInputForm />} />
                <Route path='projects/mix-form' element={<MixForm />} />
                <Route path='projects/date-form' element={<DateForm />} />
                <Route path='projects/tabs-form' element={<TabsForm />} />
                <Route path='projects/table-grid' element={<TableGrid />} />
            </Route>
            </Routes>
        </>
    )
}

export default UserRoutes;