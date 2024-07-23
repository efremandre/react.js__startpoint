import React from 'react';
import {NavLink} from "react-router-dom";
import MyButton from "../UI/button/MyButton.jsx";

const PageNotFound = () => {
    return (
        <div>
            <h1 style={{color: 'red', textAlign: 'center'}}>
                <span style={{fontSize: '6rem'}}>404</span>
                <br/>
                Такой страницы не существует или она была удалена.
            </h1>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <MyButton>
                    <NavLink style={{color: '#000', textDecoration: 'none', textTransform:'uppercase'}} to='/about '>Вернуться на существующую страницу</NavLink>
                </MyButton>
            </div>
        </div>
    );
};

export default PageNotFound;
