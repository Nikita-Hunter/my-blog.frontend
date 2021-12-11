import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
    <>
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <Link className="navbar-brand ps-3" to="#">Панель администратора</Link>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="#">
                <i className="fas fa-bars"></i>
            </button>
            <ul className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="#">Профиль</Link></li>
                        <li><Link className="dropdown-item" to="#">Настройки</Link></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link className="dropdown-item" to="#">Выйти</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>
    );
};

export default Navbar;