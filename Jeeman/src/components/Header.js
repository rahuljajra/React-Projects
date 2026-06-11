import {useContext, useState} from "react"
import {LOGO_URL} from "./utils/constants"
import {Link} from "react-router-dom"
import useOnlineStatus from "./utils/useOnlineStatus"
import UserContext from "./utils/UserContext"
import {useSelector} from "react-redux"
const Header = () => {
    const [login, setLogin] = useState("Login");

    const {loggedInUser} = useContext(UserContext);

    const handleToggleLogin = () => {
        setLogin(login === "Login" ? "Logout" : "Login");
    }

    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems, "Items")
    return (
        <header className="bg-white shadow-xl">
            <div className="container m-auto">
                <div className="header-wrapper flex justify-between items-center">
                    <div className="logo-wrapper">
                        <Link to={"/"}><LOGO_URL /></Link>
                    </div>
                    <div className="nav-items-wrapper">
                        <nav>
                            <ul className="flex">
                                <li className="px-4 py-2 text-lg">Online: {onlineStatus ? "✅" : "🔴"}</li>
                                <li className="px-4 py-2 text-lg"><Link to={"/"}>Home</Link></li>
                                <li className="px-4 py-2 text-lg"><Link to={"/about"}>About</Link></li>
                                <li className="px-4 py-2 text-lg"><Link to={"/services"}>Services</Link></li>
                                <li className="px-4 py-2 text-lg"><Link to={"/contact"}>Contact</Link></li>
                                <li className="px-4 py-2 text-lg font-bold relative">
                                    <Link to={"/cart"}>Cart
                                    <span className="absolute top-0 text-white text-sm bg-orange-600 px-2 py-1 rounded-full font-light">{cartItems.length}</span>
                                    </Link>
                                </li>
                                <li className="px-4 py-2 cursor-pointer text-lg" onClick={handleToggleLogin}>{login}</li>
                                <li className="pl-4 py-2 text-lg">{loggedInUser}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;