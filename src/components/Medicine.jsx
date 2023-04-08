import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { capsule } from "./capsule.png";
// import { injection } from "./injection.png";
import Datebar from "./Datebar";
import MonthsBar from "./MonthBar";


function Medicine() {
  return (
    <div class="container-fluid">
      <div id="mra_app" class="row">
        <section id="mra_header_bar" class="col-12">
          <div class="row">
            <div class="col-8 mra_header_title">My reminders</div>
            <div class="col-4 mra_header_icon">
              <i class="fa fa-cog"></i>
            </div>
          </div>
        </section>

        {/* <!-- Start Section Months Bar --> */}
        <MonthsBar />
        {/* <!-- End Section Months Bar --> */}

        {/* <!-- Start Section Months Bar --> */}
        <Datebar />
        {/* <!-- End Section Months Bar --> */}

      
      </div>
    </div>
  );
}

export default Medicine;
