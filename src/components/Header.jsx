import React from 'react';
import netflixLogo from '../utils/images/netflix-gpt-logo.jpeg';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const user =useSelector((store)=>store.user);
  const navigate=useNavigate();
  const handleSignout = () => {
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/');
}).catch((error) => {
  // An error happened.
  console.log(error);
  navigate('/error'); 
});
  }
  return (
    <div className="absolute flex justify-between  w-full  z-10 bg-gradient-to-b from-black to-transparent rounded-lg p-2">
      <img
        // src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        // src="src/utils/netflix-gpt-logo.png"
        src={netflixLogo}
        alt="logo"
        className="w-32"
      />
     {user && (
       <div className="flex items-center">
        <p className='font-bold m-4'>{user.displayName}</p>
       <img className='w-12' src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="profile logo" />
       <button onClick={handleSignout} className='text-white font-bold cursor-pointer bg-red-600 p-2 m-2 rounded-2xl h-12'>sign out</button>
       </div>
     )}

    </div>
  );
};

export default Header;
