// import logo from './logo.svg';
import './App.css';
import { Head } from "./MyCompoenent/Header/Header"
// import { Footer } from "./MyCompoenent/Footer/Footer"
// import About from './MyCompoenent/About-us/About';
import Form from './MyCompoenent/Main/Main';
import { useState } from 'react';

function App() {

// remove all stack and other condition before commit no #5
  const [alert , setAlert] = useState(null)
  const [mode, setMode] = useState('rgb(108, 73, 14)')
  const[mytext , setMyText] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'rgb(108, 73, 14)') {
      setMode('black')
      setMyText('Enable Normal Mode')
      document.body.style.backgroundColor = 'rgb(52, 72, 103)'
    }
    else {
      setMode("rgb(108, 73, 14)")
      setMyText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'

    }
  }
  return (
    <>
      <Head tilte="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}  mytext={mytext}/>
      <Form heading="Enter text here to analyze below" mode={mode} />
      {/* <About /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
