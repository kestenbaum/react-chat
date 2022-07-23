import React from 'react';
import Login from "./Login";


const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <Login/>
                </div>
            </div>
        </header>
    );
};

export default Header; 