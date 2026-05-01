import { useState } from "react";
import Login from "../login/Login"
import Register from "../register/Register";
import logo from "../../assets/bhojankaro-logo.png";

function Header() {

    const [showLogin, setShowLogin]  = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return(
        <>
        <div className="sticky top-0 z-50 px-4 py-2 bg-white">
        <nav className="container flex items-center justify-between m-auto">
            <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold gradient-text">
                <img src={logo} alt="logo" width="90" />
            </div>
            </div>
            <div className="flex items-center space-x-6">
            <a href="#" className="p-2 rrounded hover:bg-gray-200 transition duration-200">
                Bhojan Corporate
            </a>
            <a href="#" className="p-2 rounded hover:bg-gray-200 transition duration-200">
                Partner with us
            </a>
            <a href="#" className="p-2 rounded hover:bg-gray-200 transition duration-200">
                Get the App
            </a>
            <button onClick={() => {
                setShowLogin(true);
                setShowRegister(false);
            }} className="px-8 py-2 rounded text-white bg-black transition duration-200 cursor-pointer">
                Sign in
            </button>
            </div>
          </nav>
        </div>
        {showLogin && (
            showRegister ? (<Register setShowRegister={setShowRegister} setShowLogin= {setShowLogin}/>) : (<Login setShowRegister= {setShowRegister} setShowLogin = {setShowLogin} />
        ))}
        
        
        </>
    )
}

export default Header;