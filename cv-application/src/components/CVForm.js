import React from "react";
import GeneralInfo from "./GeneralInfo";
import EducatioanalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";
import '../styles/CVForm.css';

const CVForm = () => {
    return (
        <div className="cv-form">
            <h1>CV Application</h1>
            <GeneralInfo />
            <EducatioanalExperience />
            <PracticalExperience />
        </div>
    );
};

export default CVForm;