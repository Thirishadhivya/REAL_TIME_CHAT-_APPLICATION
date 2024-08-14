import React from "react";
import {  useState } from "react";
// import { FaGoogle } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import useSignup from "../../Hooks/useSignup";
import GenderCheckbox from "./GenderCheckbox";


const Signup = (props) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading, signup} = useSignup()
  
  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs)
  }
 
  

  return (
    <>
       <div className="moon" > <br/>
      <div className="card justify-center m-auto top-10 shrink-0 w-full max-w-md shadow-xl  backdrop-blur-sm roboto" style={{background:"rgba(238,237,228,0.02)", border:"2px solid rgba(255,255,255,0.2)", backdropFilter:"blur(6px)", }}>
        <h2 className="font-bold text-2xl ml-4 mt-3 text-slate-300">
          Welcome to Chat Application!
        </h2>
        <form className="card-body p-5 gap-0" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
              required
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
              required
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs,username:e.target.value})}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs,password:e.target.value})}
            />
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered"
              required
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
            />
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>

          <GenderCheckbox  selectedGender = {inputs.gender} onCheckboxChange= {handleCheckboxChange}/>

          <div className="form-control mt-6">
            <button className="btn bg-cyan-800 hover:bg-cyan-500 text-white"
            disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : "Sign up"}
            </button>
          </div>
          <p className="text-sm m-1 text-center">
            You have an account?
            <span className="p-1">
              <Link to="/login" className="underline">
                login
              </Link>
            </span>
          </p>
        </form>
        {/* <div className="text-center space-x-2 mb-4">
          <button className="p-3 rounded-full bg-[#333] hover:bg-[#00FFFF]">
            <FaGoogle className="h-5 w-5 text-white" />
          </button>
          <button className="p-3 rounded-full bg-[#333] hover:text-white hover:bg-[#00FFFF]">
            <FaGithub className="h-5 w-5 text-white" />
          </button>
          <button className="p-3 rounded-full bg-[#333] hover:text-white hover:bg-[#00FFFF]">
            <FaFacebook className="h-5 w-5 text-white" />
          </button>
        </div> */}
      </div>
      </div>
    </>
  );
};

export default Signup;
