import {useState} from "react"
import {LOGO_URL} from "./utils/constants"

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
                        <img alt="logo" src={LOGO_URL} />
                    </div>
                    <div className="nav-items-wrapper">
                        <nav>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Contact</li>
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