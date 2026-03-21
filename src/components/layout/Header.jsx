import React, { useState } from "react";
import "../../styles/Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaTools } from "react-icons/fa";

const Header = ({ onSearch }) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        onSearch(value);
    };

    const handleCartClick = () => {
        if (!user) {
            navigate("/login");
            return;
        }
        navigate("/cart");
    };

    return (
        <header className="header" role="banner">
            <nav className="nav" aria-label="Fő navigáció">

                {/* LOGO */}
                <NavLink to="/" className="logo">
                    MobileShop
                </NavLink>

                {/* KERESŐ */}
                <input
                    type="search"
                    className="search-bar"
                    placeholder="Keresés..."
                    aria-label="Keresés a termékek között"
                    value={search}
                    onChange={handleChange}
                />

                {/* FELSŐ MENÜ */}
                <div className="header-links">
                    <NavLink to="/kapcsolat" className="header-link">Kapcsolat</NavLink>
                    <NavLink to="/gyik" className="header-link">GYIK</NavLink>
                    <NavLink to="/aszf" className="header-link">ÁSZF / Adatvédelem</NavLink>
                </div>

                {/* IKONOK */}
                <div className="header-icons">

                    {/* 🔥 ADMIN IKON – csak adminnak */}
                    {user?.admin === true && (
                        <NavLink to="/admin" className="icon-btn">
                            <FaTools className="icon" />
                        </NavLink>
                    )}

                    {/* KOSÁR */}
                    <button className="icon-btn" onClick={handleCartClick}>
                        <FaShoppingCart className="icon" />
                    </button>

                    {/* PROFIL */}
                    <NavLink
                        to={user ? "/profile" : "/login"}
                        className="icon-btn"
                    >
                        <FaUser className="icon" />
                    </NavLink>

                </div>
            </nav>
        </header>
    );
};

export default Header;
