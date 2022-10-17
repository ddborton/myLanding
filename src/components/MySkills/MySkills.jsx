import React from 'react';
import { useTranslation } from "react-i18next";
import "./MySkills.css"
import Box from '../../assets/images/box.png'

const Skills = () => {
    const { t } = useTranslation();
    return (
        <div className="skills">
            <div className="bg-text">ОБО МНЕ</div>
            <div className='skills__text folder_paper_illusion'>
                Мой ключевой стек в работе: React, JavaScript/TypeScript, Styled Components, i18n, HTML, CSS, Git, Jira ... Но я всегда готова взяться за что-то новое, если это поможет проекту и команде. Владею английским языком на продвинутом уровне. Предпочитаю удаленный формат работы, но готова и к офису, и к релокации. Открыта к любым предложениям.
            </div>
            <img className='skills__image' src={Box} alt="skills"/>
        </div>
    )

}
export default Skills;