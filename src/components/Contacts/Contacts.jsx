import React from 'react';
import { useTranslation } from "react-i18next";
import "./Contacts.css"
import ContactImg from "../../assets/images/contact.png";

const Contacts = () => {
    const { t } = useTranslation();
    return (
        <div className="contact">
            <div className="bg-text">КОНТАКТЫ:</div>
            <div className='contact__div'>
            <img className='contact__image' src={ContactImg} alt="Contact"/>
            <div className="contact__text" id="contacts">
                <span style={{color: "#80BA96"}}>Email:</span>
                <span>gajsinaalfi@yandex.com</span>
                <span style={{color: "#80BA96"}} >Github:</span>
                <span>ddborton</span>
                <span style={{color: "#80BA96"}} >Telegram:</span>
                <span >@lfgsn</span>
            </div>
            </div>
        </div>
    )

}

export default Contacts;