import React from 'react';
import style from './MainButton.module.css'


const MainButton = ({children}) => {
    return (
        <button className={style.btn}>
            {children}
        </button>
    );
};

export default MainButton;