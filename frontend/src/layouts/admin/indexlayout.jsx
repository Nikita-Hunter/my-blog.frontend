import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar';
import Sidebar from "./component/sidebar";
import Footer from "./component/footer";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";
const Indexlayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Indexlayout;