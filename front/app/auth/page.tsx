"use client"

import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

type AuthPageProps = {

};

const AuthPage: React.FC<AuthPageProps> = () => {
    const [isClass, setIsClass] = useState(false);

    const clickHandler = () => {
        setIsClass(CurrentStatus => { return !CurrentStatus });
    }

    return (
        <div className="auth-body">
            <div className={isClass ? "container active" : 'container'} id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Регистрация</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <input type="text" placeholder="Логин" />
                        <input type="email" placeholder="Электронная почта" />
                        <input type="password" placeholder="Пароль" />
                        <button>Продолжить</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Вход</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><FontAwesomeIcon icon={faGoogle} /></a>
                            <a href="#" className="icon"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <input type="email" placeholder="Электронная почта" />
                        <input type="password" placeholder="Пароль" />
                        <a href="#">Забыли свой пароль?</a>
                        <button>Продолжить</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Здравствуйте!</h1>
                            <p>Войдите, чтобы получить доступ к сайту</p>
                            <button className='hidden' id="login" onClick={clickHandler}>Вход</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Здравствуйте!</h1>
                            <p>Зарегистрируйтесь, чтобы получить доступ к сайту</p>
                            <button className='hidden' id="register" onClick={clickHandler}>Регистрация</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;