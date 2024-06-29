import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () =>{
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = ()=> {
        signOut(auth).then(()=>{
            navigate("/");
        }).catch((error) =>{
            navigate("/error");
        })
    };

    return (
        <div className="absolute flex justify-between">
            <img className="w-48 px-6 py-2 bg-gradient-to-bottom sticky from-black z-10" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            {user && <div className="flex">
                <img alt="usericon" 
                src = {user.photoURL}
                />
                <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
            </div>}
        </div>
    )
};
export default Header;