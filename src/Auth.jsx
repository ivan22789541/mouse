import React from 'react'
import './Auth.css'
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTER, REG_ROUTER } from './utils/const';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTER



    return (
        <>
            <div className="header">
                <div className="title">
                    Штрафам - Нет!
                </div>
            </div>
            <div className="container">
                {isLogin ? <p>
                    Вход</p> : <p>Регистрация</p>}
                <input type="text" />
                <input type="password" />
                <form action="#">
                    <button type='sumbit'>
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                </form>
                {isLogin ? <div>
                    Нет аккаунта? <NavLink to={REG_ROUTER}>Зарегистрируйтесь!</NavLink>
                </div> :
                    <div>
                        Есть аккаунт? <NavLink to={LOGIN_ROUTER}>Войдите!</NavLink>
                    </div>}
            </div>
        </>
    )
}
а
export default Auth