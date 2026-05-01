
function Login({setShowRegister, setShowLogin}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Login submitting');
    }


    return(
        <>
        <section className="absolute right-0 top-0 bg-white w-2/5 z-[99] h-screen p-8">
            <span className="cursor-pointer flex w-6 justify-self-end" onClick={() => {
                setShowLogin(false)
            }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
            </span>
            <h1 className="text-3xl">Login</h1>
            <p className="py-2">or <span onClick={() => setShowRegister(true)} className="underline text-orange-600 cursor-pointer">create an account</span></p>
            <form action='#' method="post" onSubmit={handleSubmit}>
                <div>
                <input type="tel" className="input validator tabular-nums w-full h-[52px]" required placeholder="Phone" 
                    pattern="[0-9]*" minLength="10" maxLength="10" title="Must be 10 digits" />
                <p className="validator-hint">Must be 10 digits</p>
                </div>
                <div className="login-btn">
                    <button className="btn btn-square w-full border-none bg-orange-600 text-white text-lg">Login</button>
                </div>
            </form>
            </section>
        </>
    )
}
export default Login;