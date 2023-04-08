import React, { useState } from "react";
import {  Form, Button } from "react-bootstrap";
import "./FormStyle.css";

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
    handleClick(state);
    
    fetch('http://localhost:5000/api/medicines', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({medicines : state})
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <div className="form-overlay">
    <div className="form-container">
    <span className="close" onClick={handleClick}>
              &times;
            </span>
    
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="medicineName">
          <Form.Label>Name of Medicine</Form.Label>
          <Form.Control
            type="text"
            name="NameofMedicine"
            placeholder="Enter medicine name"
            value={state.NameofMedicine}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="dosage">
          <Form.Label>Dosage</Form.Label>
          <Form.Control
            type="number"
            name="Dosage"
            placeholder="Enter dosage"
            value={state.Dosage}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="startTime">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="time"
            name="StartTime"
            placeholder="Enter start time"
            value={state.StartTime}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="outline-dark" type="submit">
          Add
        </Button>
      </Form>
 
    </div>
    </div>

  );
}
