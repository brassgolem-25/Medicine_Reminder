import React from "react";

function MonthsBar() {
  const months = ["February", "March", "April", "May", "June", "July", "August"];

  return (
    <section id="mra_months_bar" className="col-12">
      <div className="row">
        <div className="col-12">
          <ul>
            {months.slice(0, 7).map((month, index) => (
              <li key={index} className={index === 2 ? "active" : ""}>
                {month}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MonthsBar;
