import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AdminIndexLayout from "./layouts/admin/indexlayout";
import AdminDashboard from "./pages/admin/dashboard";
import AdminProfile from "./pages/admin/profile";
import AdminHome from "./pages/admin/homePage";
import PostAdd from "./pages/admin/postAdd";
import NotFoundPages from "./pages/notFoundPages";
import Frontendlayout from "./layouts/frontend/frontendlayout";
import FrontendHomePage from "./pages/frontend/homePage";
import FrontendAboutPage from "./pages/frontend/aboutPage";
import FrontendNewsPage from "./pages/frontend/newsPage";
import FrontendCoursePage from './pages/frontend/coursesPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/admin" element={<AdminIndexLayout />}>
                <Route index element={<AdminHome />}/>
                <Route path="/admin/dashboard" element={<AdminDashboard />}/>
                <Route path="/admin/profile" element={<AdminProfile />}/>
                <Route path="/admin/add-post" element={<PostAdd />}/>
                <Route path="/admin/*" element={<NotFoundPages />}/>
            </Route>
            <Route path="/" element={<Frontendlayout />}>
                <Route index element={<FrontendHomePage />}/>
                <Route path="/about" element={<FrontendAboutPage />}/>
                <Route path="/news" element={<FrontendNewsPage />}/>
                <Route path="/courses" element={<FrontendCoursePage />}/>
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
