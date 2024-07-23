import React, {useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./UI/navbar/Navbar.jsx";
import Routing from "./components/Routing.jsx";
import {AuthContext} from "./context";

export const App = () => {

    const [isAuth, setIsAuth] = useState(false)

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar />
                <Routing />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
