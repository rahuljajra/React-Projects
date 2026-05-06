import {useState} from "react"
import {LOGO_URL} from "./utils/constants"
import {Link} from "react-router-dom"

const Header = () => {
    const [login, setLogin] = useState("Login");

    const handleToggleLogin = () => {
        setLogin(login === "Login" ? "Logout" : "Login");
    }
    return (
        <header>
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo-wrapper">
                        <Link to={"/"}><img alt="logo" src={LOGO_URL} /></Link>
                    </div>
                    <div className="nav-items-wrapper">
                        <nav>
                            <ul>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/about"}>About</Link></li>
                                <li><Link to={"/services"}>Services</Link></li>
                                <li><Link to={"/contact"}>Contact</Link></li>
                                <li onClick={handleToggleLogin}>{login}</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;