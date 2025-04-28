import React, { useRef, useState} from 'react';
import Header from './Header';
import { validateForm } from '../utils/validate';
const Login = () => {
  const[isSignIn, setIsSignIn] = useState(true); 
  const [message, setMessage] = useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const fullName=useRef(null);
const handleFormValidation = () => {
  // console.log(email,password,fullName);
  console.log("asdasd");
   const returnMessage= validateForm(email.current.value,password.current.value,isSignIn,fullName);
   setMessage(returnMessage);
}
  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60" 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg" 
        alt="background" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <form onSubmit={(e)=>{e.preventDefault()}} className="bg-black bg-opacity-75 p-12 rounded-lg w-96">
          <h2 className="text-white font-bold text-3xl mb-4 text-center">{isSignIn?"Sign In":"Sign Up"}</h2>
          {!isSignIn && (
            <input 
            ref={fullName}
              type="text" 
              placeholder="Full name" 
              className="p-5 m-2 w-full bg-gray-700 text-white rounded-md placeholder-gray-400"
            />
          )}
          
          <input 
          ref={email}
            type="text" 
            placeholder="Email or phone number" 
            className="p-5 m-2 w-full bg-gray-700 text-white rounded-md placeholder-gray-400"
          />
          
          <input 
          ref={password}
            type="password" 
            placeholder="Password" 
            className="p-5 m-2 w-full bg-gray-700 text-white rounded-md placeholder-gray-400"
          />
          <p className='font-bold text-red-500 p-2 '>{message}</p>
          <button 
          onClick={handleFormValidation}
            className="bg-red-600 text-white p-3 m-4 w-full rounded-md font-semibold hover:bg-red-700 transition"
          >
            {isSignIn?"Sign In":"Sign Up"}
          </button>
          <div className="text-center text-gray-400">
            <span>{isSignIn?"New to Netflix? ":"Already a User? "}</span>
             
            <a onClick={handleSignIn} className="text-white hover:underline cursor-pointer">{isSignIn?"Sign up now":"Sign In now"}</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
