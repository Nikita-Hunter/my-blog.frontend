import React from 'react';
import { Outlet } from "react-router-dom";
import NavbarFrontend from "./component/navbarFrontend";
import Footer from "./component/footer";
import '../../assets/frontend/main-frontend.css';
import '../../assets/frontend/normalize-frontend.css';

const Frontendlayout = () => {
    return (
        <>
            <NavbarFrontend />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Frontendlayout;