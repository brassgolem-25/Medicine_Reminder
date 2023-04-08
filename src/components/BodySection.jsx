import React,{useState} from "react";
import capsule from "./capsule.png"

function BodySection(props) {
  const { medicines } = props;

  const [isChecked, setIsChecked] = useState(false);

  const getTimeArray = (StartTime, Dosage) => {
    const timeArray = [];
    if (StartTime) {
      const [startHour, startMinute] = StartTime.split(":");
      let currentHour = parseInt(startHour, 10);
      let currentMinute = parseInt(startMinute, 10);
      timeArray.push(StartTime);
      for (let i = 1; i < Dosage; i++) {
        currentHour += 2;
        if (currentHour >= 24) {
          currentHour = currentHour - 24;
        }
        const nextTime = `${currentHour.toString().padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;
        timeArray.push(nextTime);
      }
    }
    return timeArray;
  };

  const handleCheckmarkClick = () => {
    setIsChecked(!isChecked);
  };


  return (
    
    <section id="mra_body" className="col-12">
    <div className="row mra_body_header">
        <div className="col-3">Time</div>
        <div className="col-9">
          Medicine
          <select name="medicine">
            <option value="0">All</option>
          </select>
        </div>
      </div>
      {medicines.length > 0 ? (
        medicines.map((medicine) => {
          const timeArray = getTimeArray(medicine.StartTime, medicine.Dosage);
          console.log(timeArray)
          return (
            <div className="row mra_body_data color-violet" key={medicine.id}>
              <div className="col-3">
                <ul>
                  {timeArray.map((time) => (
                    <li key={time}>{time}</li>
                  ))}
                </ul>
              </div>
              <div className="col-9 medicine_container">
                <div className="medicine_info color-change">
                  <span className="m_icon">
                    <img src={capsule} alt=""  style={{ width: "100%", height: "auto" }} />
                  </span>
                  <span className="m_info">
                    <span className="m_name">{medicine.NameofMedicine} <br /></span>
                    <span className="m_dosage">{medicine.Dosage} Piils (10mg)</span>
                    <span className="m_time">
                      <i className="fa fa-clock-o"></i>&nbsp; {medicine.StartTime} - {timeArray[timeArray.length -1]}
                    </span>
                  </span>
                  <span   className="m_status true"
                    onClick={handleCheckmarkClick}>
                    <i className="fa fa-check"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="no_medicine">No medicine added</div>
      )}
    </section>
  );
}

export default BodySection;
