import React, {useState} from "react";
import ReactDom from "react-dom";
import "../styles/App.css";


const Modal = ({show, setShow}) => {


    return (
        <div className="whole"> 
        {
            show === true? 
            
            <div className="model-overlay">
                <button className="model-close" onClick={setShow}>Close</button>
                <div className="modal">
                    <p className="model-p">This is the content of modal.</p>  
                </div>  
            </div> :

            ""
        }

        </div>
        
    )
}

export default Modal;