import React, {useState} from "react";
import ReactDom from "react-dom";
import "../styles/App.css";


const Modal = ({show, setShow}) => {


    return (
        <div> 
        {
            show === true? 

            
            <div className="model-overlay">
                <button className="model-close" onClick={setShow}>Close</button>
                <p className="model p">This is the content of modal.</p>    
            </div> :

            <div>
                <p></p>
            </div>
        }

        </div>
        
    )
}

export default Modal;