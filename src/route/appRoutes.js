import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home";

function AppRoute(props) {
    return (
        <Router {...props}>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}
export default AppRoute;
