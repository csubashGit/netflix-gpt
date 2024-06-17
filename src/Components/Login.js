import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage,setErrorMessage] = useState(null);

    const handleButtonClick = () =>{
        //validate form data
        const message = checkValidData(email.current.value,password.current.value);
        setErrorMessage(message);
    } 

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 row text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-2">{isSignInForm ? "Sign In": "Sign Up"}</h1>
                {isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-4/5 bg-gray-300 rounded-lg"/>}
                <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-4/5 bg-gray-300 rounded-lg"/>
                <input ref={password}type="password" placeholder="Password" className="p-4 my-4 w-4/5 bg-gray-300 rounded-lg"/>
                {errorMessage && <p className="text-red-500 font-bold text-lg p-2">{errorMessage}</p>}
                <button onClick={handleButtonClick} className="p-4 my-1 w-1/3 cursor-pointer bg-red-700 rounded-lg">{isSignInForm ? "Sign In": "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix? Sign Up Now": "Already registered! Sign In Now"}
                </p>
            </form>
        </div>
    )
};
export default Login;
