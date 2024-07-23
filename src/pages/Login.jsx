import React, {useContext, useState} from 'react';
import MyInput from "../UI/input/MyInput.jsx";
import MyButton from "../UI/button/MyButton.jsx";
import {AuthContext} from "../context/index.js";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext)
    const [inputAuth, setInputAuth] = useState({login: '', password: ''})

    const getInputAuthLogin = (ev) => {
        setInputAuth({...inputAuth, login: ev})
    }

    const getInputAuthPass = (ev) => {
        setInputAuth({...inputAuth, password: ev})
    }

    const login = (ev) => {
        ev.preventDefault()
        setIsAuth(true)
        setInputAuth({login: '', password: ''})
    }

    return (
        <div style={{
            textAlign: 'center',
        }}>
            <h1>Страница авторизации</h1>
            <form
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    maxWidth: '500px',
                    margin: '2rem auto 0 auto'
                }}
                  onSubmit={login}>
                <MyInput
                    placeholder='Введите логин'
                    value={inputAuth.login}
                    onChange={(ev) => {getInputAuthLogin(ev.target.value)}}
                />
                <MyInput
                    placeholder='Введите пароль'
                    value={inputAuth.password}
                    onChange={(ev) => {getInputAuthPass(ev.target.value)}}
                />
                <MyButton>
                    Войти
                </MyButton>
            </form>
        </div>
    );
};

export default Login;
