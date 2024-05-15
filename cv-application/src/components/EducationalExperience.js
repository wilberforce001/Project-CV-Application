import React, { useState } from 'react';
import './styles/EducatioanalExperience.css';

const EducatioanalExperience = () => {
    const [education, setEducation] = useState({ schoolName: '', titleOfStudy: '', dateOfStudy: '' });
    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducation((prevEducation) => ({ ...prevEducation, [name]: value }));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    };

    const handleEdit = () => {
        setEditMode(true);
    }

    return (
        <div className='educational-experience'>
            {editMode ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="schoolName" value={education.schoolName} onChange={handleChange} placeholder="School Name" />
                    <input type="text" name="titleOfStudy" value={education.titleOfStudy} onChange={handleChange} placeholder="Title of Study" />
                    <input type="date" name="dateOfStudy" value={education.dateOfStudy} onChange={handleChange} placeholder="Date of Study" />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p>School Name: {education.schoolName}</p>
                    <p>Title of Study: {education.titleOfStudy}</p>
                    <p>Date of Study: {education.dateOfStudy}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )
        }
        </div>
    );
};

export default EducatioanalExperience;