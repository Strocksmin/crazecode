import Link from 'next/link';
import React from 'react';

type navbarProps = {

};

const navbar: React.FC<navbarProps> = () => {
    return (
        <header className='header'>
            <div className='content'>
                <div className='header-logo'>
                    <a href="/" className="logoRef">
                        <img className="logo" src="https://i.postimg.cc/sDdJxVbb/logo-Craze-Code.png" alt="CrazeCode" />
                    </a>
                </div>
                <div className='menu'>
                    <nav className="navbar">
                        <div className="nav-links">
                            <a className="nav-item" href="/problems"><span>Задачи</span></a>
                            <a className="nav-item" href="#"><span>Блог</span></a>
                            <a className="nav-item" href="#"><span>Справочник</span></a>
                        </div>
                    </nav>
                    <div className='right-bar'>
                        <div className='header-auth'>
                            <div className='link-auth'>Войти</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default navbar;