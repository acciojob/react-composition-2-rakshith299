
import React, {useState} from "react";
import ReactDOM from "react-dom";
import './../styles/App.css';
import Modal from "./Modal.js";

const App = () => {
  const [show, setShow] = useState(false);

  console.log(show);


  return (
    <div>
          <button className="button" onClick={() => setShow(true)}>Show Modal </button>

          {

            show ? 

            <Modal show = {show} setShow = {() => setShow(true)} closeShow = {() => setShow(false)}/> : ""
          }
          
       
    </div>
  )
}

export default App
