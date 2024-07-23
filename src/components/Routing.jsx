import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {routerPrivate, routerPublic} from "../router/index.jsx";
import {AuthContext} from "../context";

const Routing = () => {
    const {isAuth} = useContext(AuthContext)
    return (
        <div className='wrapper contentWrapper'>

            <Routes>
                { isAuth
                    ? routerPrivate.map((route) =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    )
                    : routerPublic.map((route) =>
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    )
                }
            </Routes>
        </div>
    );
};

export default Routing;
