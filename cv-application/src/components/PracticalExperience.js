import React, { useState } from 'react';
import './styles/PracticalExperience.css';

const PracticalExperience = () => {
    const [experience, setExperience] = useState({ companyName:'', positionTitle: '', mainResponsibilities: '', dateFrom: '', dateUntil: ''});
    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        const { name, value } =e.target;
        setExperience((prevExperience) => ({...prevExperience, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    return (
        <div className="practical-experience">
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <input type="text" name="companyName" value={experience.companyName} onChange={handleChange} placeholder="Company Name" />
              <input type="text" name="positionTitle" value={experience.positionTitle} onChange={handleChange} placeholder="Position Title" />
              <textarea name="mainResponsibilities" value={experience.mainResponsibilities} onChange={handleChange} placeholder="Main Responsibilities"></textarea>
              <input type="date" name="dateFrom" value={experience.dateFrom} onChange={handleChange} placeholder="Date From" />
              <input type="date" name="dateUntil" value={experience.dateUntil} onChange={handleChange} placeholder="Date Until" />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div>
              <p>Company Name: {experience.companyName}</p>
              <p>Position Title: {experience.positionTitle}</p>
              <p>Main Responsibilities: {experience.mainResponsibilities}</p>
              <p>Date From: {experience.dateFrom}</p>
              <p>Date Until: {experience.dateUntil}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </div>
      );
}

export default PracticalExperience;