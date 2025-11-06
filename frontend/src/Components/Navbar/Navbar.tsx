import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Navbar.css";
import {useAuth} from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
    const {isLoggedIn, user, logout} = useAuth();
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <div className="hidden font-bold lg:flex">
                        <Link to="/search" className="text-black hover:text-blue-950">
                            Search
                        </Link>
                    </div>
                </div>
                {isLoggedIn() ? (
                    <div className="hidden lg:flex items-center space-x-6 text-back">
                        <div className="hover:text-blue-700">Welcome, {user?.userName}</div>
                        <a
                            onClick={logout}
                            className="px-8 py-3 font-bold rounded text-white bg-green-950 hover:opacity-70"
                        >
                            Logout
                        </a>
                    </div>
                ) : (
                    <div className="hidden lg:flex items-center space-x-6 text-back">
                        <Link to="/login" className="hover:text-blue-700">Login</Link>
                        <Link
                            to="/register"
                            className="px-8 py-3 font-bold rounded text-white bg-green-950 hover:opacity-70"
                        >
                            Signup
                        </Link>
                    </div>
                )
                }
            </div>
        </nav>
    );
};

export default Navbar;