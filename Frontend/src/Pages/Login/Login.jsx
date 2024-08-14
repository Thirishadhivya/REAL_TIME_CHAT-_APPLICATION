import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {loading, login} =useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }
   return (
    <>
      <div className="card justify-center m-auto top-10 shrink-0 w-full max-w-md shadow-xl bg-base-100"  style={{background:"rgba(238,237,228,0.02)", border:"2px solid rgba(255,255,255,0.2)", backdropFilter:"blur(6px)", }}>
        <h2 className="font-bold text-2xl ml-4  mt-3" >Please Login!</h2>
        <form className="card-body p-5 gap-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-cyan-800 text-white"
            disabled= {loading} >
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
          <p className="text-sm m-1 text-center">
            Don't have account?
            <span className="p-1">
              <Link to="/signup" className="underline">
                signup
              </Link>
            </span>
          </p>
        </form>
        <div className="text-center space-x-2 mb-4">
          <button className="p-3 rounded-full bg-[#333] hover:bg-[#00FFFF]">
            <FaGoogle className="h-5 w-5 text-white" />
          </button>
          <button className="p-3 rounded-full bg-[#333] hover:text-white hover:bg-[#00FFFF]">
            <FaGithub className="h-5 w-5 text-white" />
          </button>
          <button className="p-3 rounded-full bg-[#333] hover:text-white hover:bg-[#00FFFF]">
            <FaFacebook className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
