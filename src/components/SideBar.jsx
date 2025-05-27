import React from "react";
import './SideBar.css';
function SideBar() {
    return(
        <div className="side-bar">
             <h1>Health<span>care</span></h1>
              <h3>General</h3>
              <div className="row1"> 
                
                <p id="col1">Dashboard</p>
                    <img src="/public/images/dashboard.png" id="images" />
                <p id="col1">History</p>
                    <img src="/public/images/history.jpg" id="images" />
                <p id="col1">Calendar</p>
                     <img src="/public/images/calendar.jpg" id="images" />
                <p id="col11">Appointments</p>
                    <img src="/public/images/appoiment.jpg" id="images"/>
                     
                
             </div>
             <h3>Tools</h3>
             <div className="row2">
                
                <p id="col2">Support</p>
                    <img src="/public/images/support.jpg" id="images" />
                <p id="col2">Chat</p>
                    <img src="/public/images/chat.jpg" id="images" />
            
             </div>
                <h3 id="footer">Settings</h3>
                    <img src="/public/images/setting.jpg" id="images" />
                
        </div>
    )
}
export default SideBar;