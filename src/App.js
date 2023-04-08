import React, { useState } from "react";
import AppNavbar from "./components/Navbar";
import Medicine from "./components/Medicine";
import FooterBar from "./components/FooterBar";
import BodySection from "./components/BodySection";
import Account from "./components/Account";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [showAccount, setShowAccount] = useState(false);

  const handleAddMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const handleAccountClick = () => {
    setShowAccount(true);
  };

  const handleReminderClick = () => {
    setShowAccount(false);
  };

  return (
    <div className="app">
      <AppNavbar
        handleAccountClick={handleAccountClick}
        handleReminderClick={handleReminderClick}
      />
      {showAccount ? (
        <Account handleShowAccountForm={handleAccountClick} />
      ) : (
        <>
          <Medicine />
          <BodySection medicines={medicines} />
          <FooterBar handleAddMedicine={handleAddMedicine} />
        </>
      )}
    </div>
  );
}

export default App;
