import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AnimatedRoutes;
