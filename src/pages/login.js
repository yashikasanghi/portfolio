import React from "react";
import LoginModal from "../components/Layouts/loginModal";

export default function Login(props){
    return(
        <LoginModal>
            <div className="">
            <span className=""><b>E-mail</b></span>
            <br/>
            <input type="text" placeholder="Enter E-mail" className="mb-4 mt-2 w-full"/>
            
            <br/>
            <span><b>Password</b></span>
            <br/>
            <input type="text" placeholder="Enter Password" className="mt-2 w-full"/>
            </div>
            <div className="actions flex float-right mt-4">
                <button className="button">Login</button>
                <button className="button" onClick={props.closeLoginHandler}>Cancel</button>
            </div>
        </LoginModal>
    )
}