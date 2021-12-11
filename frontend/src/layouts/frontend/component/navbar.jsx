import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <header className="x-header">
            <div className="x-header__container container">
                <div className="x-header__content">
                    <Link to="/home" className="x-header__logo logo link-reset">
                        <h2 className="logo__brand">it-hunter</h2>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;