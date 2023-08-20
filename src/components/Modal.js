import React, {useState} from "react";
import ReactDom from "react-dom";
import "../styles/App.css";


const Modal = ({show, setShow, closeShow}) => {


    return (
        <div className="whole"> 
        <button className="button" onClick={setShow}>Show Modal </button>

        {
            show === true? 
            
            <div className="model-overlay" tabIndex = "0" onBlur={closeShow}>
                <button className="model-close" onClick={closeShow}>Close</button>
                <div className="modal">
                    <p className="model-p">This is the content of the modal.</p>  
                </div>  
            </div> 
            
            :

            ""
        }

        </div>
        
    )
}

export default Modal;