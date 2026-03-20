import React, { useState } from "react";
import "../../styles/Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaTools } from "react-icons/fa";

const Header = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            navigate(`/?q=${search}`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <header className="header" role="banner">
            <nav className="nav" aria-label="Fő navigáció">
                <NavLink to="/" className="logo">
                    MobileShop
                </NavLink>

                <input
                    type="search"
                    className="search-bar"
                    placeholder="Keresés..."
                    aria-label="Keresés a termékek között"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearch}
                />

                <div className="header-icons">

                    {/* ADMIN MENÜ – csak adminnak látszik */}
                    {user?.admin && (
                        <NavLink
                            to="/admin"
                            className={({ isActive }) =>
                                isActive ? "icon-btn active" : "icon-btn"
                            }
                            aria-label="Admin panel"
                        >
                            <FaTools className="icon" />
                        </NavLink>
                    )}

                    {/* KOSÁR */}
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            isActive ? "icon-btn active" : "icon-btn"
                        }
                        aria-label="Kosár"
                    >
                        <FaShoppingCart className="icon" />
                    </NavLink>

                    {/* PROFIL / LOGIN / LOGOUT */}
                    {user ? (
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                isActive ? "icon-btn active" : "icon-btn"
                            }
                            aria-label="Profil"
                        >
                            <FaUser className="icon" />
                        </NavLink>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive ? "icon-btn active" : "icon-btn"
                            }
                            aria-label="Bejelentkezés"
                        >
                            <FaUser className="icon" />
                        </NavLink>
                    )}

                </div>
            </nav>
        </header>
    );
};

export default Header;
