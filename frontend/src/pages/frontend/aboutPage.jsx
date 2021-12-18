import React,{useEffect} from 'react';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ChatIcon from '../../assets/frontend/img/icons/chat.svg';
import HeadSetIcon from '../../assets/frontend/img/icons/headset.svg';
import AddGroupIcon from '../../assets/frontend/img/icons/addgroup.svg';
import Img1 from '../../assets/frontend/img/img1.jpeg';
import Img2 from '../../assets/frontend/img/img2.jpeg';
import Img3 from '../../assets/frontend/img/img4.jpeg';
import Img4 from '../../assets/frontend/img/img4.jpeg';
import Img5 from '../../assets/frontend/img/img5.jpeg';
import FeedImg from '../../assets/frontend/img/feedImage.png';
import FeedLogo from '../../assets/frontend/img/icons/feedlogo.svg';
import ImgTeams from '../../assets/frontend/img/imgTeams.jpg';
import AboutImage from '../../assets/frontend/img/aboutBanner.jpg';
import ReadyImg from '../../assets/frontend/img/banner-course-about.png';


const AboutPage = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'feedback-carousel__slick',
        arrows: false
    };
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    return (
        <>
            <section className="about-section">
                <div className="about-section__container container">
                    <div className="about-section__content">
                        <div className="about-section__headline">
                            <div className="about-section__crumbs crumbs">
                                <Link to="/" className="link-reset crumbs__link"><i className='bx bx-home-alt'></i> Главная</Link>
                                <i className='bx bx-chevrons-right'></i>
                                <span>О нас</span>
                            </div>
                            <div className="about-section__company company">
                                <div className="company__left">
                                    <h4 className="company__subtitle heading-h4">о нас</h4>
                                    <h1 className="company__title heading-h1">IT-Huner</h1>
                                </div>
                                <p className="company__description l-text">
                                    IT-hunter — это сообщество успешных людей, которые занимаются любимым делом, работают откуда угодно и создают крутые вещи ежедневно. Мы обучаем веб-дизайну, разработке сайтов и тому, как максимально быстро выйти на фриланс и заработать первые деньги еще в процессе обучения.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section" data-aos="fade-up">
                <img src={AboutImage} className="about-section__banner"></img>
            </section>
            <section className="about-section">
                <div className="about-section__container container">
                    <div className="about-section__content">
                        <div data-aos="fade-up" className="about-section__our our-company">
                            <h1 className="our-company__title heading-h1">Наша Компания</h1>
                            <p className="our-company__descr l-text">
                                Для взломщиков парней, иммиграции, ipad blackberry и htc. Беременные ворота теперь срок службы неограничен отслеживание коробки нет. Химическая промышленность или филиалы баскетбольных мультфильмов. Химическое производство, клиническое, диаметр шпинделя. Баскетбол, беговые ворота могут быть отличными захватывающими функциями, есть. Это ваша батарея и в телефоне.
                            </p>
                            <button className="btn-primary">
                                Работайте с нами
                            </button>
                        </div>
                        <div data-aos="fade-up" className="about-section__analitic about-analitic">
                            <div className="about-analitic__item">
                                <div className="about-analitic__img">
                                    <img src={HeadSetIcon} alt="" className="about-analitic__icon"/>
                                </div>
                                <div className="about-analitic__descr">
                                    <h1 className="about-analitic__title heading-h1">2,480</h1>
                                    <h6 className="about-analitic__subtitle l-text">Remote Sales Experts</h6>
                                </div>
                            </div>
                            <div className="about-analitic__item">
                                <div className="about-analitic__img">
                                    <img src={ChatIcon} alt="" className="about-analitic__icon"/>
                                </div>
                                <div className="about-analitic__descr">
                                    <h1 className="about-analitic__title heading-h1">1,200</h1>
                                    <h6 className="about-analitic__subtitle l-text">Requests per Week</h6>
                                </div>
                            </div>
                            <div className="about-analitic__item">
                                <div className="about-analitic__img">
                                    <img src={AddGroupIcon} alt="" className="about-analitic__icon"/>
                                </div>
                                <div className="about-analitic__descr">
                                    <h1 className="about-analitic__title heading-h1">760</h1>
                                    <h6 className="about-analitic__subtitle l-text">New Clients per Month</h6>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="about-section__photo about-photo">
                            <h1 className="about-photo__title heading-h1">Мы могущественны</h1>
                            <div className="about-photo__grid">
                                {data.map((item,index) => {
                                    return (
                                        <div key={index} className="about-photo__item">
                                            <img src={item.imgSrc} alt="" className="about-photo__img"/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section__feedback about-feedback">
                <div className="about-section__container container">
                    <div className="about-feedback__content">
                        <h1 data-aos="fade-up" className="about-feedback__title heading-h1">Что говорят наши клиенты</h1>
                        <div className="about-feedback__wrapper">
                            <div data-aos="fade-right" className="about-feedback__left">
                                <div className="about-feedback__info">
                                    <h1 className="about-feedback__title heading-h1">200+</h1>
                                    <h2 className="about-feedback__subtitle heading-h2">Новых учеников!</h2>
                                </div>
                            </div>
                            <div data-aos="fade-left" className="about-feedback__carousel feedback-carousel">
                                <div className="feedback-carousel__headline">
                                        <span className="feedback-carousel__icon">
                                            <i className='bx bxs-quote-left'></i>
                                        </span>
                                </div>
                                    <Slider {...settings}>
                                        <div className="feedback-carousel__slider">
                                            <p className="l-text">Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.</p>
                                            <h3 className="feedback-carousel__name heading-h3">Поляков Михаил</h3>
                                        </div>
                                        <div className="feedback-carousel__slider">
                                            <p className="l-text">Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.</p>
                                            <h3 className="feedback-carousel__name heading-h3">Поляков Михаил</h3>
                                        </div>
                                        <div className="feedback-carousel__slider">
                                            <p className="l-text">Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.</p>
                                            <h3 className="feedback-carousel__name heading-h3">Поляков Михаил</h3>
                                        </div>
                                    </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <div className="about-section__container container">
                    <div className="about-section__content">
                        <div className="about-section__teams about-teams">
                            <h1 data-aos="fade-up" className="about-teams__title heading-h1">Наша команда</h1>
                            <div className="about-teams__grid">
                                <div data-aos="fade-up" className="about-teams__item">
                                    <img src={ImgTeams} alt="Никита Мочалов" className="about-teams__img"/>
                                    <h6 className="about-teams__name heading-h6">Никита Мочалов</h6>
                                    <span className="about-teams__professional">Fullstack - разработчик</span>
                                </div>
                                <div data-aos="fade-up" className="about-teams__item">
                                    <img src={ImgTeams} alt="Никита Мочалов" className="about-teams__img"/>
                                    <h6 className="about-teams__name heading-h6">Никита Мочалов</h6>
                                    <span className="about-teams__professional">Fullstack - разработчик</span>
                                </div>
                                <div data-aos="fade-up" className="about-teams__item">
                                    <img src={ImgTeams} alt="Никита Мочалов" className="about-teams__img"/>
                                    <h6 className="about-teams__name heading-h6">Никита Мочалов</h6>
                                    <span className="about-teams__professional">Fullstack - разработчик</span>
                                </div>
                                <div data-aos="fade-up" className="about-teams__item">
                                    <img src={ImgTeams} alt="Никита Мочалов" className="about-teams__img"/>
                                    <h6 className="about-teams__name heading-h6">Никита Мочалов</h6>
                                    <span className="about-teams__professional">Fullstack - разработчик</span>
                                </div>
                                <div data-aos="fade-up" className="about-teams__item">
                                    <img src={ImgTeams} alt="Никита Мочалов" className="about-teams__img"/>
                                    <h6 className="about-teams__name heading-h6">Никита Мочалов</h6>
                                    <span className="about-teams__professional">Fullstack - разработчик</span>
                                </div>
                                <div data-aos="fade-up" className="about-teams__item">
                                    <img src={ImgTeams} alt="Никита Мочалов" className="about-teams__img"/>
                                    <h6 className="about-teams__name heading-h6">Никита Мочалов</h6>
                                    <span className="about-teams__professional">Fullstack - разработчик</span>
                                </div>
                                <div data-aos="fade-up" className="about-teams__item">
                                    <img src={ImgTeams} alt="Никита Мочалов" className="about-teams__img"/>
                                    <h6 className="about-teams__name heading-h6">Никита Мочалов</h6>
                                    <span className="about-teams__professional">Fullstack - разработчик</span>
                                </div>
                                <div data-aos="fade-up" className="about-teams__item">
                                    <img src={ImgTeams} alt="Никита Мочалов" className="about-teams__img"/>
                                    <h6 className="about-teams__name heading-h6">Никита Мочалов</h6>
                                    <span className="about-teams__professional">Fullstack - разработчик</span>
                                </div>
                            </div>
                        </div>
                        <div className="about-section__ready about-ready">
                            <div data-aos="fade-top" className="about-ready__content">
                                <p className="about-ready__subtitle l-text">Готовы начать заниматься?</p>
                                <h1 className="about-ready__title heading-h1">Выведите свои <span>знания</span> на новый уровень!</h1>
                                <Link to="/courses" className="about-ready__button btn-primary link-reset">Перейти к курсам</Link>
                            </div>
                            <img className="about-ready__img" src={ReadyImg} alt=""/>
                        </div>
                        <div className="about-section__social about-social">
                            <h1 data-aos="fade-top" className="about-social__title heading-h1">Наши социальные сети</h1>
                            <h6 data-aos="fade-top" className="about-social__subtitle l-text">Следите за нами и будьте в курсе самых свежих новостей!</h6>
                            <ul data-aos="fade-top" className="about-social__list list-reset">
                                <li className="about-social__item">
                                    <a href="" target="_blank" className="about-social__link link-reset">
                                        <i className='bx bxl-facebook-square'></i>
                                    </a>
                                </li>
                                <li className="about-social__item">
                                    <a href="" target="_blank" className="about-social__link link-reset">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li className="about-social__item">
                                    <a href="" target="_blank" className="about-social__link link-reset">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li className="about-social__item">
                                    <a href="" target="_blank" className="about-social__link link-reset">
                                        <i className='bx bxl-vk'></i>
                                    </a>
                                </li>
                                <li className="about-social__item">
                                    <a href="" target="_blank" className="about-social__link link-reset">
                                        <i className='bx bxl-youtube'></i>
                                    </a>
                                </li>
                                <li className="about-social__item">
                                    <a href="" target="_blank" className="about-social__link link-reset">
                                        <i className='bx bxl-dribbble'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;