import React from 'react';
import { useTranslation } from "react-i18next";
import "./Projects.css"
import Project from "./Project/Project";
import Cat from '../../assets/images/cat.jpg';
import Spotify from "../../assets/images/spotifyClone.jpg";
import Search from "../../assets/images/search.jpg";
import Visualization from "../../assets/images/visualization.jpg";
import Login from "../../assets/images/login.jpg";
import Social from "../../assets/images/socialMedia.jpg"

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className='projects'>
            <div className="bg-text projects__text">НЕКОТОРЫЕ ПРОЕКТЫ:</div>
            <div className="projects__div">
            <Project className='projects__column1' ImgSrc={Login} text='Функциональная страница регистрации и входа c аутентификацией(HTML,CSS, JavaScript, Google Firebase Realtime Database)' />
            <Project className='projects__column1' ImgSrc={Search} text='Приложение поиска(HTML5, Sass, JavaScript и Wikipedia API)' />
            <Project className='projects__column1' ImgSrc={Spotify} text='Полностью функциональный клон Spotify с использованием React JS, Styled Components, Spotify API и Context API.' />
            <Project className='projects__column1' ImgSrc={Visualization} text='Трекер курса криптовалют с визуализацией (JavaScript, HTML CSS и Node.js). ' />
            <Project className='projects__column2' ImgSrc={Social} text='Приложение социальной сети (Node.js, MonogoDb, Express Server и React)' />
            </div>
            <div>Код можно увидеть в моем Github</div>
        </div>
    )
}

export default Projects;