import {useState} from "react"
import {LOGO_URL} from "./utils/constants"
import {Link} from "react-router-dom"
import useOnlineStatus from "./utils/useOnlineStatus"

const Header = () => {
    const [login, setLogin] = useState("Login");

    const handleToggleLogin = () => {
        setLogin(login === "Login" ? "Logout" : "Login");
    }

    const onlineStatus = useOnlineStatus();

    return (
        <header className="bg-gray-400 shadow shadow-gray-400">
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
                                <li className="pl-4 py-2 cursor-pointer text-lg" onClick={handleToggleLogin}>{login}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;