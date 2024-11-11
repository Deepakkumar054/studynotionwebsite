import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import{toast} from 'react-hot-toast'

const Navbar = (props)=>{
    let isLoggedIn= props.isLoggedIn;
    let setIsloggedIn=props.setIsloggedIn;
    return(
        <div className='flex justify-between items-center w-9/12 max-w-[1160px] py-4 mx-auto'>
            <Link to="/">
                <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
               
            </Link>
            <nav>
                <ul className='text-white flex gap-x-6'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* login - signup - logOut - Dashboard */}

            <div className='flex items-center gap-x-4 '>
                {
                    !isLoggedIn &&
                    <Link to="/login">
                        <button className='bg-slate-600 text-gray-300 py-[3px] px-[12px] 
                        rounded-[8px] border-slate-800'>
                            Log in
                        </button>
                    </Link>
                }
                {
                    !isLoggedIn &&
                    <Link to="/signup">
                        <button className='bg-slate-600 text-gray-300 py-[3px] px-[12px] 
                        rounded-[8px] border-slate-800'>
                            Sign up
                        </button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/">
                        <button className='bg-slate-600 text-gray-300 py-[3px] px-[12px] 
                        rounded-[8px] border-slate-800' 
                            onClick={()=>{
                            setIsloggedIn(false);
                            toast.success("logged Out");
                        }}>
                            LogOut
                        </button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to="/Dashboard">
                        <button className='bg-slate-600 text-gray-300 py-[3px] px-[12px] 
                        rounded-[8px] border-slate-800'>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar