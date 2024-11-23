import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="bg-white text-black fixed top-0 left-0 w-full shadow-md z-10">
            <div className="flex justify-between items-center  py-4 max-w-screen-xl mx-auto  ibm-plex-sans-regular">
                <div>
                    {/* <NavLink to="/" className="text-lg hover:text-gray-300">
                        Coded by Me
                    </NavLink> */}
                    <ul className="flex">
                        <li className="mr-10">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `hover:text-gray-500 ${isActive ? "font-bold text-black" : "text-gray-800"}`
                                }
                            >
                                Bio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/work"
                                className={({ isActive }) =>
                                    `hover:text-gray-500 ${isActive ? "font-bold text-black" : "text-gray-800"}`
                                }
                            >
                                Work
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <ul className="flex space-x-6">

                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `hover:text-gray-500 ${isActive ? "font-bold text-black" : "text-gray-800"}`
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
