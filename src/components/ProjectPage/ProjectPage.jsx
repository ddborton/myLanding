import React from 'react';
import { useTranslation } from "react-i18next";

const ProjectPage = () => {
    const { t } = useTranslation();
    return (
        <div className="main">
            <h1>{t("MyContacts")}</h1>
        </div>
    )

}
export default ProjectPage;
