import React from "react";
import "./Header.css"

export default function(){
    return(
   
    <div className="text__utils">
        <div className="head__div1">
            <ul id="ul">
                <li className="li">TextUtils</li>
                <li className="li">Home</li>
                <li className="li">About</li>
            </ul>
        </div>
        <div className="head__div2">
            <input className="input" type="text" placeholder="search here ..."/>
            <button className="btn">SEARCH</button>
        </div>
    </div>
        
    )
}