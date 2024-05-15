import React, { useState } from 'react'
import '../styles/GeneralInfo.css';
const GeneralInfo = () => {
    const [info, setInfo] = useState({name: '', email: '', phone: ''});
    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value}));     
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    return (
        <div className="general-info">
          {editMode ? (
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" value={info.name} onChange={handleChange} placeholder="Name" />
              <input type="email" name="email" value={info.email} onChange={handleChange} placeholder="Email" />
              <input type="tel" name="phone" value={info.phone} onChange={handleChange} placeholder="Phone" />
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div>
              <p>Name: {info.name}</p>
              <p>Email: {info.email}</p>
              <p>Phone: {info.phone}</p>
              <button onClick={handleEdit}>Edit</button>
            </div>
          )}
        </div>
      );
}

export default GeneralInfo;