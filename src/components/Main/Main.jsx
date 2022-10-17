import React from 'react';
import { useTranslation } from "react-i18next";
import "./Main.css"
import Sofa from '../../assets/images/sofa.png'
import Arrow from '../../assets/icons/arrow-down-solid.svg'


const Main = () => {
    const { t } = useTranslation();
    return (
        <div className="main">
            <img className='main__image' src={Sofa} alt="Contact"/>
            <div className='main__text folder_paper_illusion'>
                 ГАЙСИНА АЛЬФИЯ
            </div>
            <button className='main__button' onClick={() => {
                const anchor = document.querySelector('#contacts')
                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }}>Свяжитесь со мной</button>
        </div>
    )

}
export default Main;
