import React from "react";
import Template from "../component/Template";
import signupImg from "../assets/signup.png"

const Signup =({setIsloggedIn})=>{
    return(
        <Template
            title="Join the millions lerning to code with StudyNotion for free"
            desc1="Build skills for today,tomorrow,and beyond."
            desc2="Education to future-proof your career."
            image={signupImg}
            formType="signup"
            setIsloggedIn={setIsloggedIn}

        />
    )
}
export default Signup