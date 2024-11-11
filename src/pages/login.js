import React from "react";
import Template from "../component/Template"
import loginImg from "../assets/login.png"

const Login=({setIsloggedIn})=>{
    return(
        <Template
            title="welcome Back"
            desc1="Build skills for today,tomorrow,and beyond."
            desc2="Education to future-proof your career."
            image={loginImg}
            formType="login"
            setIsloggedIn={setIsloggedIn}
        />
    )
}
export default Login
