import React from "react";
import './Appoiments.css';
function Appointments() {  
    return(
        <div className="appoiments">
            <div className="appoiment dentist">
                <h3>Dentist</h3>
                <img src="/public/images/clean.png" alt="" />
                <p >10:00 - 11:00</p>
                <p> Dr.Neeraj Verma</p>
            </div>
        <div className="appoiment-physiotherapy">
            <div className="physiotherapy">
                 <h3>Physiotherapy</h3>
            <img src="/public/images/bone.png" alt="" />
            <p id="para1">14:00 - 15:00</p>
            <p id="para2">Dr.Priyanka Arora</p>
            </div>
           
        </div>

        </div>
    ) ; 
}
export default Appointments;
