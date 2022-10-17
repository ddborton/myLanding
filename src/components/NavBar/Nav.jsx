import React, {useEffect, useState} from 'react';
import { useTranslation } from "react-i18next";
import "./nav.css";
import { Link } from "react-scroll";
import UserPic from '../../assets/images/icon.png';

const Nav = () => {
    const { t } = useTranslation();
    const [stickyNav, setStickyNav] = useState(false);

    const handleScroll = () => {
        window.pageYOffset >= 100 ? setStickyNav(true) : setStickyNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.addEventListener('scroll', handleScroll);
    })
    return (
        <nav className={stickyNav ? 'active': ''}>
            <div className="nav">

                <ul className='nav__ul__pic'>
                    <li>Гайсина Альфия </li>
                    <li><img className='nav__pic' src={UserPic} alt="Me"/></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;