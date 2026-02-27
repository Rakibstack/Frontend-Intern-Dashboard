
import { Mail, Lock, Donut, HandHeart } from "lucide-react";
import React from 'react';

const Login = () => {

    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
          <div className="card bg-base-200 w-full max-w-sm  shadow-2xl">
            <div className="card-body">
                
                <fieldset className="fieldset">
                    <h2 className="text-center text-2xl font-bold text-[#0F3D2E]"> DONEZO</h2>
                    <div className="text-center mb-3 ">
                        <h4 className="text-black relative text-3xl font-bold">Welcome Back <HandHeart width={30} className="absolute right-8  bottom-1"/></h4>
                        <p className="text-gray-600 font-bold">Login to continue</p>
                    </div>
                    <div className='relative'>
                        <Mail className="absolute left-3 top-5 -translate-y-1/2 text-[#0F3D2E] w-4 h-4 z-10" />
                      <input type="email" className="input rounded-lg w-full pl-10" placeholder="Email" />

                    </div>
                    <div className="relative">
                        <Lock className="absolute left-3 top-7 -translate-y-1/2 text-[#0F3D2E] w-4 h-4 z-10" />
                       <input type="password" className="input rounded-lg mt-2 w-full pl-10" placeholder="Password" />
                        
                        </div>
                    <button className="text-white text-sm font-bold bg-[#1F7A57] hover:bg-[#0F3D2E] px-4 py-3 rounded-2xl  mt-4">Login</button>
                    <div className='text-center text-[#1F7A57] mt-2'><a className="link link-hover">Forgot password?</a></div>
                </fieldset>
            </div>
        </div>
      </div>
    );
};

export default Login;