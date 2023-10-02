import React from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Feature from './pages/Feature';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import { Roles } from './config/Roles';
import Header from './pages/Header';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashoard from './pages/Dashboard';
import Projects from './pages/projects';
import UserForm from './pages/projects/UserForm';
import MixForm from './pages/projects/MixForm';
import SelectInputForm from './pages/projects/SelectInputForm';
import ImageUploadForm from './pages/projects/ImageUploadForm';
import RadioButtonForm from './pages/projects/RadioButtonForm';
import CheckboxForm from './pages/projects/CheckboxForm';
import DynamicForm from './pages/projects/DynamicForm';
import DateForm from './pages/projects/DateForm';
import TabsForm from './pages/projects/TabsForm';
import TableGrid from './pages/projects/TableGrid';
import SignUp from './pages/signup';
import OnlineStatus from './pages/OnlineStatus';
import Features from './pages/features';
import UseCallback from './pages/features/UseCallback';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<PublicRoutes />}>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Route>

        <Route path='/user' element={<PrivateRoutes requiredRoles={[String(Roles.USER), String(Roles.USER)]} />}>
          <Route path='home' element={<Home />} />
        </Route>

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

        <Route path='/admin' element={<PrivateRoutes requiredRoles={[String(Roles.ADMIN)]} />}>
          <Route path='home' element={<Home />} />
          <Route path='dashboard' element={<Dashoard />} />
          <Route path='feature' element={<Feature />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Projects />} />
          <Route path='projects/user-form' element={<UserForm />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
