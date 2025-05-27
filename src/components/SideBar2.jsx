import React from "react";
import './SideBar2.css';
import Appointments from "./Appoiments";
import ScheduleList from "./ScheduleList";
function SideBar2() {
    return(
        <div className="main">
            <div className="searchbar">
                <img src="/public/images/search.jpg" id="img1"/>
               <p id="para">search</p>
               <img src="/public/images/bell.jpeg" id="img2" />
            </div>
            <div className="dash">
                <h1>DashBoard</h1>
            </div>
                <div className="card1">
                    <img src="/public/images/body1.png" alt="" />
                    
                </div>
                <div className="layout">
                <div className="card2">
                    <div className="card-header">
                         <img src="/public/images/heart.png" className="icon"/>
                        <h3>Healthy Heart</h3>
                    </div>
                    <p className="Date">Date : 23 May 2025</p>
                    <div className="progress-bar">
                        <div className="progress red" style={{width:'70%'}}></div>
                    </div>  
                </div>
                <div className="card3">
                    <div className="card-header">
                         <img src="/public/images/clean.png" className="icon"/>
                        <h3>Teeth</h3>
                    </div>
                    <p className="Date">Date : 23 May 2025</p>
                    <div className="progress-bar">
                        <div className="progress green" style={{width:'60%'}}>

                        </div>
                    </div> 
                </div>
                <div className="card4">
                  <div className="card-header">
                         <img src="/public/images/lungs.png" className="icon"/>
                        <h3>Lungs</h3>
                    </div>
                    <p className="Date">Date : 23 May 2025</p>
                    <div className="progress-bar">
                        <div className="progress orange" style={{width:'80%'}}></div>
                    </div> 
                </div>
            </div>
            <div className="Details">
               <Appointments/>
            </div>
            <div className="data">
                <ScheduleList/>
            </div>
        </div>
    )
}
export default SideBar2;