import React from "react";
import './Header.css';
function Header() {
    return (
        <div className="header">
            <h1></h1>
            <div className="header-right">
                <div className="avtar"><img src="/public/images/avtar.png" id="avt" />
                    <button className="add-btn">
                       <img src="/public/images/plus.png" id="avt" />
                    </button>
                </div>
            </div>
            
        </div>
    );
}
export default Header;