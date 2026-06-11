import { useDispatch } from 'react-redux';
import logo from '../assets/youtube.png'
import Search from './Search';
import { toggleMenu } from '../utils/appSlice';
const Header = () => {

    const dispatch = useDispatch();

    const togglehandler = () => {
        dispatch(toggleMenu());
    }

    return(
        <header className='shadow-lg py-4'> 
            <nav className='grid grid-flow-col gap-4 container m-auto items-center'>
                <div className='nav-wrapper col-span-1 flex gap-4 items-center'>
                    <div className='cursor-pointer' aria-label='hamburger' onClick={()=> togglehandler()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <line x1="4" y1="6" x2="20" y2="6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <line x1="4" y1="12" x2="20" y2="12" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            <line x1="4" y1="18" x2="20" y2="18" stroke="black" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                    </div>
                    <div className='cursor-pointer'>
                        <img className='w-10' src={logo} alt="logo" />
                    </div>
                </div>
                <div className='col-span-8'>
                    <Search />
                </div>
                <div className='col-span-3 flex justify-end items-center gap-4'>
                    <button className='bg-gray-300 rounded-full py-2 px-4 cursor-pointer'>+ Create</button>
                    <span className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" fill="black" />
                            <path d="M18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.93 6 11V16L4 18V19H20V18L18 16Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <span className='cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8" r="4" stroke="black" strokeWidth="2" />
                            <path d="M4 20C4 16.69 7.58 14 12 14C16.42 14 20 16.69 20 20" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                </div>
            </nav>
        </header>
    )
}

export default Header;