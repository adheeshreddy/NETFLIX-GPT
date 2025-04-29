import React, { useEffect } from 'react';
import netflixLogo from '../utils/images/netflix-gpt-logo.jpeg';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {NTFLX_LOGO} from '../utils/constants';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
       
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/browse');
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
    //why this?

  },[]);
  const user =useSelector((store)=>store.user);
  const handleSignout = () => {
signOut(auth).then(() => {
  // Sign-out successful.
  // navigate('/');
}).catch((error) => {
  // An error happened.
  console.log(error);
  navigate('/error'); 
});
  }
  return (
    <div className="absolute flex justify-between  w-full  z-10 bg-gradient-to-b from-black to-transparent rounded-lg p-2">
      <img
        src={netflixLogo}
        alt="logo"
        className="w-34"
      />
     {user && (
       <div className="flex items-center">
        <p className='font-bold m-4'>{user.displayName}</p>
       <img className='w-12' src={NTFLX_LOGO} alt="profile logo" />
       <button onClick={handleSignout} className='text-white font-bold cursor-pointer bg-red-600 p-2 m-2 rounded-2xl h-12'>Sign Out</button>
       </div>
     )}

    </div>
  );
};

export default Header;
