import React from 'react';
import './styles/Header.css';
import DHL from './images/dhl.svg'

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <nav className="Header__nav wrapper">
                    <div className="Header__logo">
                        <img src={DHL} alt="DHL logotype"/>
                    </div>
                    <ul className="Header__menu">
                        <li className="Header__menu-link">
                            <a href="/">Главная</a>
                        </li>
                        <li className="Header__menu-link">
                            <a href="/">Команда</a>
                        </li>
                        <li className="Header__menu-link">
                            <a href="/">Услуги</a>
                        </li>
                        <li className="Header__menu-link"> 
                            <a href="/">Акции</a>
                        </li>
                    </ul>
                    <ul className="Header__phone">
                        <li className="Header__phone-link">
                            <a href="/">8 800 555-77-78</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;