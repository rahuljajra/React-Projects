import reactLogo from '../../assets/react.svg'

import Search from '../Search/Search';
const Header = () => {
    return(
        <header>
            <div className="container m-auto flex justify-between items-center py-4">
                <div className="logo-wrapper text-center">
                    <img src={reactLogo} alt='logo' />
                </div>
                <Search />
                <nav>
                    <ul className='flex'>
                        <li className='px-2'>
                            About
                        </li>
                        <li className='px-2'>
                            Contact
                        </li>
                        <li className='px-2'>
                            Login
                        </li>
                        <li className='pl-2'>
                            Sign Up
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;