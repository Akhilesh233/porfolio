import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Dashboard from "./home";
import Login from "../Login";

const Admin = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    });

    return (
        <div>
            {user ? <Dashboard /> : <Login />}
        </div>
    )
}

export default Admin