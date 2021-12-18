import React, {useEffect, useState} from 'react';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const ActiveMode = async () => {
        setDarkMode(!darkMode)
        if(darkMode === true)
        {
            document.body.classList.add('light-mode')
            document.body.classList.remove('dark-mode')
            await localStorage.setItem('Theme', 'light-mode')
        }
        if(darkMode === false)
        {
            document.body.classList.add('dark-mode')
            document.body.classList.remove('light-mode')
            await localStorage.setItem('Theme', 'dark-mode')
        }
    }
    useEffect(() => {
        if (localStorage.getItem('Theme') === 'light-mode')
        {
            document.body.classList.add('light-mode')
        }else if(localStorage.getItem('Theme') === 'dark-mode')
        {
            document.body.classList.add('dark-mode')
            setDarkMode(!darkMode)
        }
    }, [])
    return (
        <>
                {localStorage.getItem('Theme') === 'dark-mode' ?
                    <button className="btn-reset x-header__button button-mode" onClick={ActiveMode}>
                        <i className='bx bx-sun'></i>
                    </button>
                    :
                    <button className="btn-reset x-header__button button-mode" onClick={ActiveMode}>
                        <i className='bx bx-moon'></i>
                    </button>
                }
        </>
    );
};

export default DarkMode;