import React from "react";
import "./Header.css"
  
export const Head = (props) => {
    let mystyle = {
        width: '100%',
        height: '10vh',
        // backgroundColor: 'rgb(108, 73, 14)',
        backgroundColor: props.mode,
        display: 'flex',
        justifyContent: 'space-between',
        padding: "2px 0px",
        color: 'white',
    }
    let mybtn = {
        width: '14%',
        height: 'auto',
        margin : "12px 0px",
        marginRight : "12px",
        // backgroundColor: `props.mode === 'black' ? 'gray' : 'rgb(108, 73, 14)' `,
        // border: `props.mode === 'black' ? '2px solid white': '20px solid  black'`,
        borderRadius: '6px',
        padding: '6px',
        fontSize: '15px',
        color: `props.mode === 'black' ? 'black' : 'white'`,
        fontFamily: 'sans-serif',
    }
    return (
        <div style={mystyle}>
            <div className="head__div1">
                <ul id="ul">
                    <li className="li">{props.tilte}</li>
                    <li className="li">Home</li>
                    <li className="li">{props.about}</li>
                </ul>
            </div>
            <button onClick={props.toggleMode} style={mybtn}>{props.mytext}</button>
        </div>

    )
}
