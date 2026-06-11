import reactLogo from '../../assets/react.svg'
import { useCart } from '../../contexts/CartContext';
import Search from '../Search/Search';
const Header = () => {

    const {totalCount} = useCart();
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
                        <li>
                            🛒 Cart
                            {totalCount > 0 && (
                                <span className="bg-orange-400 text-white text-xs px-2 py-0.5 rounded-full ml-1">
                                    {totalCount}
                                </span>
                            )}
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