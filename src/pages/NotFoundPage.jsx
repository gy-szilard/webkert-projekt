import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
    return (
        <>
            <Header />

            <main className="notfound-container">
                <h1>404</h1>
                <p>A keresett oldal nem található.</p>

                <Link to="/" className="back-home-btn">
                    Vissza a kezdőoldalra
                </Link>
            </main>
        </>
    );
};

export default NotFoundPage;
