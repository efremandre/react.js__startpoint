import React from 'react';
import s from './MyInput.module.css'

const MyInput = (props) => {
    return (
        <input className={s.input} {...props}/>
    );
};

export default MyInput;
