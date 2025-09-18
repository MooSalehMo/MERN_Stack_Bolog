// src/components/Navbar.jsx

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
import LiNavbar from './Li';
import Image from '../Image/Image';
import './Styles.css';

function Navbar() {
  const [open, seOpen] = useState(false);
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const [sessionToken, setSessionToken] = useState(null);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      const fetchToken = async () => {
        const token = await getToken();
        setSessionToken(token);
      };
      fetchToken();
    } else {
      setSessionToken(null);
    }
  }, [isLoaded, isSignedIn, getToken]);

  if (!isLoaded) {
    // Show a loading indicator while Clerk is loading
    return <div className="loading-container">Clerk is loading...</div>;
  }

  return (
    <>
      {/* The rest of your Navbar component code */}
      <div to='/' className="navbar w-full h-16 md:h-20 flex itmes-center justify-between py-3 px-4">
        <Link className="logo flex">
          <Image src="/Blog/blog.webp" className="blog rounded-3xl object-cover" width={60} alt="logo" />
          <h2 className='p-3 text-2xl hidden lg:flex font-bold '>Blog</h2>
        </Link>
        <div className="cursor-pointer mainTextColor mobile-navebar text-2xl text-center pt-3 md:hidden" onClick={() => seOpen(prev => !prev)}>
          {open ?
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-menu-button" viewBox="0 0 16 16">
              <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" />
              <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
            </svg>
          }
        </div>
        <div className={`mobile-navebar bgColor w-full h-screen flex flex-col justfiy-between transition-all ease-in-out items-center absolute top-16 ${open ? '-right-0' : '-right-[100%]'}`}>
          <ul className="justify-between">
            <LiNavbar />
          </ul>
        </div>
        <div className="disktop-navebar hidden md:flex font-medium">
          <ul className="font-medium text-lg flex itmes-center justify-between">
            <LiNavbar />
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Navbar;