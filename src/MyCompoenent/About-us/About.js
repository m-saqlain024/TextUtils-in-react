import React, { useState } from 'react'

export default function About() {
    const [btn, setbtn] = useState('Enable Dark Mode')
    const [accordion, newaccordion] = useState({
        backgroundColor: 'white',
        color: 'black',
        cursor: 'pointer',
        padding: '18px',
        width: '100%',
        textAlign: 'left',
        border: 'none',
        outline: 'none',
        transition: '0.4s',
    })

    const [panal, newpanal] = useState({
        // display: 'none',
        maxWidth: "100%",
        padding: "18px",
        backgroundColor: 'white',
        color: "black",
        overflow: 'hidden',
        transition: '0.4s',

    })
    const [btnStyle, newBtnStyle] = useState({
        width: '30%',
        margin: "12px 0",
        backgroundColor: 'rgb(111, 67, 16)',
        border: '2px solid black',
        borderRadius: '6px',
        padding: '6px ',
        fontSize: '15px',
        color: 'white',
        fontFamily: 'sans-serif',

    })
    const colorChangr = () => {
        if ((accordion.backgroundColor === "white") && (panal.backgroundColor === 'white')) {
            newaccordion({
                // || newpanal.color ==='white'
                // || newaccordion.color ==='black'
                backgroundColor: 'black',
                color: 'white',
                cursor: 'pointer',
                padding: '18px',
                width: '100%',
                transition: '0.4s',

                textAlign: 'left',
                border: 'none',
                // margin: "22px 0",
                outline: 'none',
                transition: '0.4s',
            });
            newpanal({
                backgroundColor: 'black',
                color: 'white',
                maxWidth: "100%",
                padding: "18px",
                transition: '0.4s',

                overflow: 'hidden',

            })
            setbtn('Enable Normal Mode')
        }
        else {
            newaccordion({
                backgroundColor: 'white',
                color: 'black',
                cursor: 'pointer',
                padding: '18px',
                width: '100%',
                textAlign: 'left',
                border: 'none',
                transition: '0.4s',

                // margin: "22px 0",
                outline: 'none',
                transition: '0.4s',
            });
            newpanal({
                backgroundColor: 'white',
                color: 'black',
                transition: '0.4s',

                overflow: 'hidden',
                maxWidth: "100%",
                padding: "18px",


            })
            setbtn('Enable Dark Mode')
        }
    }
    const main = {
        backgroundColor: 'rgb(235, 211, 211)',
        width: "70%",
        margin: "50px auto",
        padding: "10px",


    }
    return (
        <div style={main}>
            <button style={accordion}>Section 1</button>
            <div style={panal}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit molestias deleniti nihil corporis tenetur amet, in voluptate consequatur voluptates corrupti assumenda expedita, veritatis esse adipisci, sunt totam? Odio, illo.</p>
            </div>
            <button style={accordion}>Section 2</button>
            <div style={panal}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit molestias deleniti nihil corporis tenetur amet, in voluptate consequatur voluptates corrupti assumenda expedita, veritatis esse adipisci, sunt totam? Odio, illo.</p>
            </div>
            <button style={accordion}>Section 3</button>
            <div style={panal}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit molestias deleniti nihil corporis tenetur amet, in voluptate consequatur voluptates corrupti assumenda expedita, veritatis esse adipisci, sunt totam? Odio, illo.</p>
            </div>
            <button onClick={colorChangr} style={btnStyle}>{btn}</button>
        </div>
    )
}
