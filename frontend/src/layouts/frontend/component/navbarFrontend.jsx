import React from 'react';
import {Link} from "react-router-dom";
import LogoBrand from '../../../assets/frontend/img/logo.svg';
import DarkMode from "../../../assets/frontend/js/darkMode";
const NavbarFrontend = () => {
    return (
    <>
        <header className="x-header">
            <div className="x-header__container container">
                <div className="x-header__content">
                    <div className="x-header__left">
                        <Link to="/" className="x-header__logo logo link-reset">
                            <img className="x-header__brand" src={LogoBrand} alt="Логотип сайта It-hunter"/>
                        </Link>
                        <nav className="x-header__nav nav">
                            <ul className="nav__list list-reset">
                                <li className="nav__item">
                                    <Link to="/about" className="nav__link link-reset">О проекте</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/news" className="nav__link link-reset">Новости</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/courses" className="nav__link link-reset">Курсы</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/articles" className="nav__link link-reset">Статьи</Link>
                                </li>
                                <li className="nav__item">
                                    <Link to="/contacts" className="nav__link link-reset">Контакты</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="x-header__right">
                        <DarkMode />
                    </div>
                </div>
            </div>
        </header>
    </>
    );
};

export default NavbarFrontend;