
import { Mail, Lock, Donut, HandHeart } from "lucide-react";
import React from 'react';
import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    // Handle login logic here
    const HandleLogIn = async (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const user = {
            email,
            password
        }
       try{
         const res = await fetch("https://task-api-eight-flax.vercel.app/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        if (!res.ok) {
            throw new Error("Invalid email or password");
        }
        const data = await res.json();
        console.log(data);

        localStorage.setItem('token',data.token);
        navigate('/')
        form.reset();
       }
         catch(error){
            console.error(error.message);
    }
}

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className="card bg-base-200 w-full max-w-sm  shadow-2xl">
                <form onSubmit={(e) => HandleLogIn(e)} className="card-body ">

                    <fieldset className="fieldset py-8">
                        <h2 className="text-center text-2xl font-bold text-[#0F3D2E]"> DONEZO</h2>
                        <div className="text-center mb-3 ">
                            <h4 className="text-black relative text-3xl font-bold">Welcome Back <HandHeart width={30} className="absolute right-8  bottom-1" /></h4>
                            <p className="text-gray-600 font-bold">Login to continue</p>
                        </div>
                        <div className='relative'>
                            <Mail className="absolute left-3 top-5 -translate-y-1/2 text-[#0F3D2E] w-4 h-4 z-10" />
                            <input type="email" name='email' required className="input rounded-lg w-full pl-10" placeholder="Email" />

                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-7 -translate-y-1/2 text-[#0F3D2E] z-10 w-4 h-4 " />
                            <input type="password" name='password' required className="input rounded-lg mt-2 w-full pl-10" placeholder="Password" />

                        </div>
                        <button className="text-white text-sm font-bold bg-[#1F7A57] hover:bg-[#0F3D2E] px-4 py-3 rounded-2xl  mt-4">Login</button>
                        <div className='text-center text-[#1F7A57] mt-2'><a className="link link-hover">Forgot password?</a></div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;