import { UserButton, SignedIn, SignedOut } from '@clerk/clerk-react'; 
import {Link} from 'react-router-dom'
import './Styles.css'
const LiNavbar = () => {
    return (
        <>
            <li className='text-center px-3 pt-4 transition-all ease-in-out'>
                <Link to='/' className='link'>Home</Link>
            </li>
            <li className='text-center px-3 pt-4 transition-all ease-in-out'>
                <Link href="/dashboard" style={{ marginLeft: '1rem' }}>Dashboard</Link>
            </li>
            <li className='text-center px-3 pt-4 transition-all ease-in-out'>
                <Link to='#' className='link'>Trinding</Link>
            </li>
            <li className='text-center px-3 pt-4 transition-all ease-in-out'>
                <Link to='#' className='link'>Must Popular</Link>
            </li>
            <li className='text-center px-3 pt-4 transition-all ease-in-out'>
                <Link to='#' className='link'>About</Link>
            </li>
            <li className='text-center px-3 pt-4 sm:pb-3 transition-all ease-in-out'>
                <Link to='#' className='link'>Contact Us</Link>
            </li>
            <li className='text-center transition-all ease-in-out'>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </li>

            <li className='text-center px-3 pt-4 sm:pb-3 transition-all ease-in-out flex flex-row'>
                <SignedOut>

                    <span>
                        <Link to="/login" className='flex text-center px-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"/>
                            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                         </svg>
                    </Link>
                    </span>

                    <span>
                        <Link to="/register">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-add text-lg" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                            <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                        </svg>
                    </Link>
                    </span>

                </SignedOut>
            </li>
        </>
    )
}

export default LiNavbar ;
 