import React, { useState } from 'react'
import "./Main.css"

export default function Form(props) {
    const [text, settext] = useState('')
    const handleUpClick = () => {
        //  console.log("this isa  uppercse ids run")
        let newtext = text.toUpperCase();
        settext(newtext)

    }
    const handleloClick = () => {
        //  console.log("this isa  uppercse ids run")
        let newtext = text.toLowerCase();
        settext(newtext)

    }
    const handeleOnChange = (event) => {
        // console.log('this is a vlue error')
        settext(event.target.value)
        // text.value =""
    }
    const handleClearClick = (event) => {
        let newtext = "";
        settext(newtext)
    }
    return (
        <>
            <div className="main" style={{color : props.mode === "black" ? "white" : "black"}}   >
                <form action="noaction">
                    <h1>{props.heading}  </h1>
                    <textarea id="mybox" value={text} style={{backgroundColor : props.mode === "black" ? "gray" : 'white', color : 'white'}} onChange={handeleOnChange} cols="70" rows="10"></textarea>
                </form>
                <button className="btn"  onClick={handleUpClick}>Convert to upppercase</button>
                <button className="btn" onClick={handleloClick}>Convert to Lowercase</button>
                <button className="btn" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className='info'  style={{color : props.mode === "black" ? "white" : "black"}}>
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words and {text.length} character </p>
                <p>{0.10 * text.split(" ").length} Minutes to Read</p>
                <p className='preview' style={{backgroundColor : props.mode === "black" ? "gray" : 'white', color : 'white' , marginTop  : "12px 0px"   }}>{text}</p>
                <h1>Preview</h1>

            </div>
        </>
    )
}
