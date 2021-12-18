import React from 'react';
import {Link} from "react-router-dom";
import IconMessage from '../../../assets/frontend/img/icons/message.svg';
import LogoBrand from '../../../assets/frontend/img/icons/logoLight.svg';
const Footer = () => {
    return (
        <>
            <footer className="footer dark-mode">
                <div className="footer__container container">
                    <div className="footer__content">
                        <div className="footer__info">
                            <Link to="/" className="footer__link link-reset link-logo">
                                <img className="link-logo__brand" src={ LogoBrand } alt=""/>
                            </Link>
                            <p className="footer__description">
                                Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.
                            </p>
                            <div className="footer__subscribe">
                                <label>Подпишитесь на нашу рассылку новостей</label>
                                <form action="" method="POST" className="footer__form form-subscribe">
                                    <div className="form-subscribe__item">
                                        <img className="form-subscribe__icon" src={IconMessage} alt=""/>
                                        <input type="email" name="email" id="" className="form-subscribe__input" placeholder="Введите email" required/>
                                    </div>
                                    <button type="submit" className="form-subscribe__button btn-primary">Подписаться</button>
                                </form>
                            </div>
                            <p className="footer__copy">
                                2021. Все права защищены. Кремниевый Шаблон
                            </p>
                        </div>
                        <div className="footer__right">
                            <nav className="footer__nav nav-footer">
                                <ul className="nav-footer__list list-reset">
                                    <li className="nav-footer__item">
                                        <Link to="/" className="nav-footer__link link-reset navigation-link">Главная</Link>
                                    </li>
                                    <li className="nav-footer__item">
                                        <Link to="/about" className="nav-footer__link link-reset navigation-link">О нас</Link>
                                    </li>
                                    <li className="nav-footer__item">
                                        <Link to="/news" className="nav-footer__link link-reset navigation-link">Новости</Link>
                                    </li>
                                    <li className="nav-footer__item">
                                        <Link to="/courses" className="nav-footer__link link-reset navigation-link">Курсы</Link>
                                    </li>
                                    <li className="nav-footer__item">
                                        <Link to="/articles" className="nav-footer__link link-reset navigation-link">Статьи</Link>
                                    </li>
                                    <li className="nav-footer__item">
                                        <Link to="/contacts" className="nav-footer__link link-reset navigation-link">Контакты</Link>
                                    </li>
                                </ul>
                            </nav>
                            <ul className="footer__social social-list list-reset">
                                <li className="social-list__item">
                                    <a href="https://ru-ru.facebook.com/" target="_blank" className="social-list__link link-reset navigation-link">Facebook</a>
                                </li>
                                <li className="social-list__item">
                                    <a href="https://ru-ru.facebook.com/" target="_blank" className="social-list__link link-reset navigation-link">Instagram</a>
                                </li>
                                <li className="social-list__item">
                                    <a href="https://ru-ru.facebook.com/" target="_blank" className="social-list__link link-reset navigation-link">Vkontakte</a>
                                </li>
                                <li className="social-list__item">
                                    <a href="https://ru-ru.facebook.com/" target="_blank" className="social-list__link link-reset navigation-link">Twitter</a>
                                </li>
                            </ul>
                            <div className="footer__mail mail-link">
                                <h6 className="mail-link__title heading-6">
                                    Свяжитесь с нами
                                </h6>
                                <a className="mail-link__email" href="mailto:example@gmail.com">example@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;