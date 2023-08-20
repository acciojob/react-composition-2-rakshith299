
import React, {useState} from "react";
import ReactDOM from "react-dom";
import './../styles/App.css';
import Modal from "./Modal.js";

const App = () => {
  const [show, setShow] = useState(false);
  const [onClose, setOnClose] = useState("");


  return (
    <div>
        <button className="button" onClick={() => setShow(true)}>Show Modal </button>
        <Modal show = {show} setShow = {() => setShow(false)}/>
    </div>
  )
}

export default App
