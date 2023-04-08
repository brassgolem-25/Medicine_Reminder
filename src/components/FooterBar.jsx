import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {   Button } from "react-bootstrap";

import {
  faBell,
  faCog,
  faUserMd,
  faUser,
  faPlus,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Medicine.css";
import Form from "./Form"
library.add(faBell, faCog, faUserMd, faUser,faHome);


function MraFooter({handleAddMedicine}) {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    // setIsShown(false);
    // setIsAccountShown(true);
  };
  
  const handleFormSubmit = (medicine) => {
    handleAddMedicine(medicine);
    setIsShown(false);
    
  };


 

  return (
    <section id="mra_footer" className="col-12">
      <div className="row">
        <div className="col-12">
          <ul>
            <li className="active">
              <FontAwesomeIcon icon="bell" />
              <span>Reminders</span>
            </li>
            <li>
             <FontAwesomeIcon icon="user-md" />
              <span>Account</span>
            </li>

          </ul>
          <Button
            className="btn btn-default btn-lg btnAdd"
            onClick={() => setIsShown(true)}
            variant = "outline-dark"
          >
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          {isShown && <Form handleClick={handleFormSubmit}  />}
        </div>
      </div>
    </section>
  );
}

export default MraFooter;
