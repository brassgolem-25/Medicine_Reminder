import React from "react";
import "./Account.css";

function Account({ name, age, gender, height, weight, bloodType }) {
  return (
    <div className="account-form-container">
      <h2 className="form-title">Account Information</h2>
      <div className="form-field">
        <label className="place" htmlFor="name">Name:</label>
        <input id="name" type="text" value="Tushar" readOnly />
      </div>
      <div className="form-field">
        <label className="place" htmlFor="age">Age:</label>
        <input id="age" type="number" value="21" readOnly />
      </div>
      <div className="form-field">
        <label className="place" htmlFor="gender">Gender:</label>
        <input id="gender" type="text" value="M"  />
      </div>
      <div className="form-field">
        <label className="place" htmlFor="height">Height (in cm):</label>
        <input id="height" type="number" value="172" readOnly />
      </div>
      <div className="form-field">
        <label className="place" htmlFor="weight">Weight (in kg):</label>
        <input id="weight" type="number" value="70" readOnly />
      </div>
      <div className="form-field">
        <label className="place" htmlFor="bloodType">Blood Type:</label>
        <input id="bloodType" type="text" value="O+" readOnly />
      </div>
      <div className="form-field">
        <label className="place" htmlFor="bloodType">Phone Number</label>
        <input id="bloodType" type="text" value="+919519769840 "readOnly />
      </div>
      <button className="form-button">Edit Information</button>
    </div>
  );
}

export default Account;
