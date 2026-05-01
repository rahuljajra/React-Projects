function Register({setShowRegister, setShowLogin}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("regiestered Successfully");
    }


    return (
        <section className="absolute right-0 top-0 bg-white w-2/5 z-[99] h-screen p-8">
         <span className="cursor-pointer flex w-6 justify-self-end" onClick={() => {
                setShowLogin(false)
            }}><svg
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
          <h1 className="text-3xl">Register</h1>
    
          <p className="py-2">
            or{" "}
            <span
              onClick={() => setShowRegister(false)}
              className="underline text-orange-600 cursor-pointer"
            >
              login
            </span>
          </p>
         <form action='#' method="post" onSubmit={handleSubmit}>
            <input type="tel" className="input validator tabular-nums w-full h-[52px]" required placeholder="Phone" 
                    pattern="[0-9]*" minLength="10" maxLength="10" title="Must be 10 digits" />
                <p className="validator-hint">Must be 10 digits</p>

                <label className="input validator w-full h-[52px]">
                    <input
                        type="text"
                        required
                        placeholder="Username"
                        pattern="[A-Za-z][A-Za-z0-9\-]*"
                        minLength="3"
                        maxLength="30"
                        title="Only letters, numbers or dash"
                    />
                    </label>
                    <p className="validator-hint">
                    Must be 3 to 30 characters, containing only letters, numbers or dash
                    </p>

            <label className="input validator w-full h-[52px]">
            <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
        
            <button className="btn w-full mt-4 bg-orange-600 text-white">
                Register
            </button>
         </form>
        </section>
      );
}

export default Register;