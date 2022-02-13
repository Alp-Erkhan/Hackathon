import React from 'react';
import './styles/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__content wrapper">
                    <div className="footer__items">
                        <h3 className="footer__header">Частные клиенты</h3>
                        <ul className="footer__menu">
                            <li className="footer__menu-link">
                                <a href="/">Цены</a>
                            </li>
                            <li className="footer__menu-link">
                                <a href="/">Получить</a>
                            </li>
                            <li className="footer__menu-link">
                                <a href="/">Отправить</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__items">
                        <h3 className="footer__header">Бизнес-клиенты</h3>
                        <ul className="footer__menu">
                            <li className="footer__menu-link">
                                <a href="/">Посылка</a>
                            </li>
                            <li className="footer__menu-link">
                                <a href="/">Экспресс</a>
                            </li>
                            <li className="footer__menu-link">
                                <a href="/">Логистика</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__items">
                        <h3 className="footer__header">Социальные сети</h3>
                        <ul className="footer__menu-social">
                            <li className="footer__menu-link">
                                <a href="https://www.facebook.com/dhl">
                                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 9.05C18 4.05 13.97 0 9 0S0 4.05 0 9.05c0 4.52 3.3 8.27 7.6 8.95v-6.33H5.3V9.05h2.3V7.06c0-2.27 1.34-3.52 3.4-3.52.98 0 2 .17 2 .17v2.23h-1.13c-1.11 0-1.46.7-1.46 1.42v1.7h2.5l-.4 2.61h-2.1V18A9.04 9.04 0 0018 9.05z" fill="#211E1D"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__menu-link">
                                <a href="https://twitter.com/DHLexpress">
                                    <svg width="17" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.35 14c6.41 0 9.92-5.39 9.92-10.06l-.01-.45A7.14 7.14 0 0017 1.66a6.8 6.8 0 01-2 .55A3.55 3.55 0 0016.53.26c-.68.4-1.43.7-2.21.85a3.48 3.48 0 00-5.73.97c-.31.7-.4 1.5-.22 2.26A9.8 9.8 0 011.18.64a3.58 3.58 0 001.08 4.72 3.46 3.46 0 01-1.58-.44v.05c0 .81.28 1.6.8 2.24a3.48 3.48 0 002 1.22c-.51.14-1.05.17-1.57.06a3.54 3.54 0 003.26 2.46A6.94 6.94 0 010 12.41 9.8 9.8 0 005.35 14z" fill="#211E1D"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__menu-link">
                                <a href="https://www.instagram.com/dhlexpressrussia">
                                    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 1.62c2.41 0 2.7.01 3.64.05.88.04 1.36.19 1.67.31.42.16.72.36 1.04.67.31.32.5.62.67 1.04.12.32.27.8.3 1.67.05.95.06 1.23.06 3.63 0 2.41 0 2.7-.05 3.64a4.93 4.93 0 01-.31 1.67c-.16.42-.36.72-.67 1.03-.32.32-.62.51-1.04.68-.31.12-.8.27-1.67.3-.95.05-1.23.06-3.63.06-2.41 0-2.7-.01-3.64-.05A4.94 4.94 0 013.7 16a2.79 2.79 0 01-1.04-.68A2.77 2.77 0 012 14.3c-.12-.32-.27-.8-.3-1.67-.05-.95-.06-1.23-.06-3.64 0-2.4 0-2.69.05-3.63.04-.88.19-1.35.31-1.67.16-.42.36-.72.67-1.04.32-.31.62-.5 1.04-.67.31-.12.8-.27 1.67-.3.94-.05 1.23-.06 3.64-.06zM9 0C6.57 0 6.26.01 5.3.05 4.33.1 3.67.25 3.1.47c-.6.23-1.1.54-1.6 1.04s-.8 1-1.04 1.6a6.6 6.6 0 00-.42 2.18C.01 6.25 0 6.56 0 9c0 2.45.01 2.75.05 3.71s.2 1.62.42 2.19c.23.59.54 1.1 1.04 1.6s1 .8 1.6 1.03a6.6 6.6 0 002.18.42c.96.04 1.27.05 3.71.05 2.45 0 2.75-.01 3.71-.05s1.62-.2 2.19-.42a4.4 4.4 0 001.6-1.04c.49-.5.8-1 1.03-1.6a6.6 6.6 0 00.42-2.18c.04-.96.05-1.26.05-3.7 0-2.45-.01-2.75-.05-3.71a6.58 6.58 0 00-.42-2.19c-.22-.6-.53-1.1-1.03-1.6s-1-.8-1.6-1.04a6.6 6.6 0 00-2.18-.41A61.5 61.5 0 009.01 0z" fill="#211E1D"/><path d="M9 4.38a4.63 4.63 0 100 9.25 4.63 4.63 0 000-9.25zM9 12a3 3 0 110-6 3 3 0 010 6zM14.9 4.2a1.08 1.08 0 11-2.17 0 1.08 1.08 0 012.16 0z" fill="#211E1D"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <p className="footer__copyright">2021 © DHL Paket GmbH. Все права защищены.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;