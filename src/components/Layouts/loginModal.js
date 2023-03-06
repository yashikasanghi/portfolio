import React from "react";
import ReactDOM from "react-dom";

export default function LoginModal(props){

   return(
    <React.Fragment>
        {ReactDOM.createPortal(<div className="backdrop"></div>, document.getElementById("loginOverlay"))}
        {ReactDOM.createPortal(<div className="modal">
            <div className="content">{props.children}</div>
        </div>, document.getElementById("loginOverlay"))}
    </React.Fragment>
   );

}