import React, { useState } from "react";
import "./Medicine.css";

export default function MedicineForm({ handleClick }) {
  const [state, setState] = useState({
    NameofMedicine: "",
    Dosage: "",
    StartTime: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    handleClick();
  };

  return (
    <div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={handleClick}>
              &times;
            </span>
            <h2>New Reminder</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="sympInput"
              id="medName"
              placeholder="Name of Medicine"
              name="NameofMedicine"
              type="text"
              value={state.NameofMedicine}
              onChange={handleInputChange}
              required
            />
            <input
              className="sympInput"
              id="dosageIn"
              placeholder="Dosage"
              name="Dosage"
              type="text"
              value={state.Dosage}
              onChange={handleInputChange}
              required
            />
            <div class="dateWrapper">
              <input
                className="sympInput"
                id="startIn"
                name="StartTime"
                type="time"
                value={state.StartTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <button id="modalAdd">Add Reminder</button>
          </form>
        </div>
      </div>
    </div>
  );
}
