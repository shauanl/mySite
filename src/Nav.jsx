import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md">
            <div className="flex justify-between items-center  py-4 max-w-screen-xl mx-auto">
                <div>
                    <NavLink to="/" className="text-lg font-bold hover:text-gray-300">
                        Coded by Me
                    </NavLink>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? "font-bold text-white" : "text-gray-400"}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? "font-bold text-white" : "text-gray-400"}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `hover:text-gray-300 ${isActive ? "font-bold text-white" : "text-gray-400"}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
