import React from 'react';
import { useTranslation } from "react-i18next";
import "./Project.css"

const Project = (props) => {
    const { t } = useTranslation();
    const { ImgSrc, text, className} = props
    return (
        <div className={className + " project"}>
            <img className='project__image' src={ImgSrc} alt='projectPreview'/>
            <div className='project__text folder_paper_illusion'>{text}</div>
        </div>
    )
}

export default Project;