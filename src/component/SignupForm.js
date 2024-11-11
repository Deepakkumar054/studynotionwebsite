import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";

// import{AiOutlineEye,AiOutlineEyeInvisivle} from "react-icons/ai"


const SignupForm = ({ setIsloggedIn }) => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: "", lastName: "",
        email: "", password: "", confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
    const [accountType, setAccountType]= useState("student");

    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("password do not match")
            return;
        }
        setIsloggedIn(true);
        toast.success("Accont created successful");
        const accountdata = {
            ...formData
        };

        const finalData ={
            ...accountdata,
            accountType
        }

        console.log("printing final account data");
        console.log(finalData);
        navigate("/Dashboard");

    }
    return (
        <div>
            {/* student and instructor tab */}
            <div className="flex bg-slate-700 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                className={`${accountType==="student" ?
                     "bg-slate-950 text-slate-50":
                     "bg-transparent text-slate-300"} py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={()=>setAccountType("student")}>
                    student
                </button>
                <button className={`${accountType==="instructor" ?
                     "bg-slate-950 text-slate-50":
                     "bg-transparent text-slate-300"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=>setAccountType("instructor")}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler} >
                {/* firstname and lastname */}
                <div className="flex gap-x-5 mt-[20px]">
                    <label className="w-full">
                        <p className="text-[0.75rem] text-gray-300 leading-[1.375rem]">
                            First Name
                            <sup className="text-red-600">*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            value={formData.firstName}
                            placeholder="enter first name"
                            className="bg-slate-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
                        />
                    </label>

                    <label className="w-full">
                        <p className="text-[0.75rem] text-gray-300 leading-[1.375rem]">
                            Last Name
                            <sup className="text-red-600">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            value={formData.lastName}
                            placeholder="enter Last name"
                            className="bg-slate-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
                        />
                    </label>

                </div>

                {/* Email add */}
                <div className="mt-[20px]">

                    <label className="w-full mt-[10px]">
                        <p className="text-[0.75rem] text-gray-300 leading-[1.375rem]">
                            Email Address
                            <sup className="text-red-600">*</sup>
                        </p>
                        <input
                            required
                            type="email"
                            name="email"
                            onChange={changeHandler}
                            placeholder="Enter Eamil Address"
                            value={formData.email}
                            className="bg-slate-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
                        />
                    </label>
                </div>

                {/* createPassword and confirm Password */}
                <div className="flex justify-between gap-x-5 mt-[20px]">
                    <label className="relative w-full">
                        <p className="text-[0.75rem] text-gray-300 leading-[1.375rem]">
                            Create Password
                            <sup className="text-red-600">*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder="Enter password"
                            value={formData.password}
                            className="bg-slate-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] cursor-pointer">
                            {showPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />) :
                                (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>

                    <label className="relative w-full">
                        <p className="text-[0.75rem] text-gray-300 leading-[1.375rem]">
                            Confirm Password
                            <sup className="text-red-600">*</sup></p>
                        <input
                            required
                            type={showconfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            className="bg-slate-700 rounded-[0.5rem] text-gray-100 w-full p-[12px]"
                        />
                        <span onClick={() => setShowconfirmPassword((prev) => !prev)}
                            className="absolute right-3 top-[35px] cursor-pointer">
                            {setShowconfirmPassword ?
                                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />)
                                : (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
                        </span>
                    </label>
                </div>

                <button className=" w-full bg-yellow-300 rounded-[8px] font-medium px-[12px] py-[8px] mt-6">
                    Create Account
                </button>

            </form>
        </div>


    )
}
export default SignupForm