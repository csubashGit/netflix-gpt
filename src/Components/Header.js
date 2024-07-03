import { onAuthStateChanged,signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const handleSignOut = ()=> {
        signOut(auth).then(()=>{
        }).catch((error) =>{
            navigate("/error");
        })
    };

    const unsubscribe = useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName, photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
              navigate("/browse")
            } else {
              dispatch(removeUser());
              navigate("/");
            }
          });
          //return () => unsubscribe();
    },[]);

    return (
        <div className="absolute flex justify-between">
            <img className="w-48 px-6 py-2 bg-gradient-to-bottom sticky from-black z-10" src={LOGO_URL} alt="logo" />
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