import React from 'react';
import './styles/Main.css';
import Box_2 from './images/2.png';
import Box_3 from './images/3.png';
import Box_4 from './images/4.png';
import Box_5 from './images/5.png';
import Box_6 from './images/6.png';
import Box_7 from './images/7.png';
import Box_8 from './images/8.png';

class Main extends React.Component {
    render() {
        return (
            <main className="main wrapper">
                <section className="input">
                    <div className="input__container">
                        <div className="input__container-header">
                            <h2>Введите габариты</h2>
                        </div>
                        <form action="" className="form" id="form">
                            <div className="form-control">
                                <input type="text" placeholder="Длина (см)"/>
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i>
                                <small>Ошибка</small>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Ширина (см)"/>
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i>
                                <small>Ошибка</small>
                            </div>
                            <div className="form-control">                        
                                <input type="text" placeholder="Высота (см)"/>
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i>
                                <small>Ошибка</small>
                            </div>
                            <button>Подобрать</button>
                        </form>
                    </div>
                </section>
                <section className="output">
                    <div className="output__header">
                        <h2 >Подходящая вам упаковка</h2>
                    </div>
                    <article className="output__article">
                        <div className="box">
                            <div className="box__img">
                                <img src={Box_2} alt="" width="150px" height="90px"/>
                            </div>
                            <div className="box__title">
                                <h3>КОРОБКА №2</h3>
                                <p>33.7 x 18.2 x 10 (1 КГ)</p>
                            </div>
                            <div className="box__progress-bar"><div className="box__2"></div></div>
                            <div className="box__info">
                                <p>Заполнено: <span>50</span>%</p>
                                <p>Свободно: <span>50</span>%</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box__img">
                                <img src={Box_3} alt="" width="150px" height="90px"/>
                            </div>
                            <div className="box__title">
                                <h3>КОРОБКА №3</h3>
                                <p>33.7 x 18.2 x 10 (1 КГ)</p>
                            </div>
                            <div className="box__progress-bar"><div className="box__3"></div></div>
                            <div className="box__info">
                                <p>Заполнено: <span>50</span>%</p>
                                <p>Свободно: <span>50</span>%</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box__img">
                                <img src={Box_4} alt="" width="150px" height="90px"/>
                            </div>
                            <div className="box__title">
                                <h3>КОРОБКА №4</h3>
                                <p>33.7 x 18.2 x 10 (1 КГ)</p>
                            </div>
                            <div className="box__progress-bar"><div className="box__4"></div></div>
                            <div className="box__info">
                                <p>Заполнено: <span>50</span>%</p>
                                <p>Свободно: <span>50</span>%</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box__img">
                                <img src={Box_5} alt="" width="150px" height="90px"/>
                            </div>
                            <div className="box__title">
                                <h3>КОРОБКА №5</h3>
                                <p>33.7 x 18.2 x 10 (1 КГ)</p>
                            </div>
                            <div className="box__progress-bar"><div className="box__5"></div></div>
                            <div className="box__info">
                                <p>Заполнено: <span>50</span>%</p>
                                <p>Свободно: <span>50</span>%</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box__img">
                                <img src={Box_6} alt="" width="150px" height="90px"/>
                            </div>
                            <div className="box__title">
                                <h3>КОРОБКА №6</h3>
                                <p>33.7 x 18.2 x 10 (1 КГ)</p>
                            </div>
                            <div className="box__progress-bar"><div className="box__6"></div></div>
                            <div className="box__info">
                                <p>Заполнено: <span>50</span>%</p>
                                <p>Свободно: <span>50</span>%</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box__img">
                                <img src={Box_7} alt="" width="150px" height="90px"/>
                            </div>
                            <div className="box__title">
                                <h3>КОРОБКА №7</h3>
                                <p>33.7 x 18.2 x 10 (1 КГ)</p>
                            </div>
                            <div className="box__progress-bar"><div className="box__7"></div></div>
                            <div className="box__info">
                                <p>Заполнено: <span>50</span>%</p>
                                <p>Свободно: <span>50</span>%</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box__img">
                                <img src={Box_8} alt="" width="150px" height="90px"/>
                            </div>
                            <div className="box__title">
                                <h3>КОРОБКА №8</h3>
                                <p>33.7 x 18.2 x 10 (1 КГ)</p>
                            </div>
                            <div className="box__progress-bar"><div className="box__8"></div></div>
                            <div className="box__info">
                                <p>Заполнено: <span>50</span>%</p>
                                <p>Свободно: <span>50</span>%</p>
                            </div>
                        </div>
                    </article>
                </section>
            </main>
        )
    }
}

export default Main;