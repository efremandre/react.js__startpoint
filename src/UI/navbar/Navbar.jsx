import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import MyButton from "../button/MyButton.jsx";
import {AuthContext} from "../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        <div className={s.wrapper}>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 0'}} className="wrapper">
                <div>
                    <NavLink className={s.link} to='/about'>О приложении</NavLink>
                    <NavLink className={s.link} to='/posts'>Посты</NavLink>
                </div>
                <div>
                    {
                        isAuth
                        ? <MyButton onClick={() => {setIsAuth(false)}}>Выйти</MyButton> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
