import React from "react";
import './SideBar1.css';
import Header from "./Header";
import Calendar from "./Calendar";
import Appointments from "./Appoiments";
import WeeklyChart from "./WeeklyChart";



    function SideBar1() {
    return(
        <div className="header-center">
            <Header/>
            <Calendar/>
            <WeeklyChart/>
        </div>
       
    )
}
export default SideBar1;