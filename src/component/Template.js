import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./loginForm";
import frameImage from "../assets/frame.png"
import{FcGoogle} from "react-icons/fc"

const Template = ({ title, desc1, desc2, image, formType, setIsloggedIn }) => {
    return (
        <div className="w-9/12 max-w-[1160px] flex justify-between py-12 mx-auto gap-x-20 gap-y-0">
            <div className="w-9/12 max-w-[450px]">
                <h1 className="text-gray-400 font-semibold text-[1.875rem] leading-[2.375rem]">
                    {title}
                    </h1>
                <p className="text-[1.125rem] leading-91.6rem] mt-4">
                    <span className="text-gray-400">{desc1}</span>
                    <br/>
                    <span className="text-blue-400 italic">{desc2}</span>
                </p>

                {formType === "signup" ? 
                (<SignupForm setIsloggedIn={setIsloggedIn}/>) : 
                (<LoginForm  setIsloggedIn={setIsloggedIn}/>)}

                <div className="flex flex-row w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] w-full bg-slate-600"></div>
                    <p className="text-gray-400 font-medium leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-slate-600"></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] 
                   font-medium text-gray-300 border-[1px] border-gray-500 px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle/>
                    <p>Sign in with Google</p>
                </button>
            </div>

            <div className="relative w-9/12 max-w-[450px]">
                <img src={frameImage}
                    alt="pattern"
                    width={558} height={504}
                    loading="lazy" />


                <img src={image}
                    alt="student"
                    width={558} 
                    height={490}
                    loading="lazy" 
                    
                    className="absolute -top-4 right-4"/>
            </div>

        </div>
    )
}

export default Template