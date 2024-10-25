import { useContext, useEffect } from "react";
import UserContext from "../config/Usercontext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { setLogin } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        setLogin(0);
        localStorage.removeItem("_login");
        navigate('/login');
    })
    return null;
}

export default Logout;