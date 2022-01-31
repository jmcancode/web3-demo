import React from 'react';
// react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// pages
import App from "../../App";
import Account from '../../pages/Account';
import FourOhFour from "../../pages/FourOhFour";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< App />}/>
                <Route path="/account" element={< Account />}/>
                <Route path="*" element={< FourOhFour />}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
