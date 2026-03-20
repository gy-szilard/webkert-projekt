import React from "react";
import Header from "../components/layout/Header";
import { deleteUser } from "../services/userService";
import "../styles/ProfilePage.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        navigate("/login");
        return null;
    }

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Biztosan törölni szeretnéd a profilodat? Ez a művelet nem visszavonható!"
        );

        if (!confirmDelete) return;

        await deleteUser(user.id);
        localStorage.removeItem("user");
        navigate("/");
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <>
            <Header />

            <main className="profile-container">
                <h1>Profil</h1>

                <div className="profile-card">
                    <p><strong>Név:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Település:</strong> {user.city}</p>
                    <p><strong>Irányítószám:</strong> {user.zip}</p>
                    <p><strong>Cím:</strong> {user.address}</p>
                </div>

                <button className="logout-btn" onClick={handleLogout}>
                    Kijelentkezés
                </button>

                <button className="delete-btn" onClick={handleDelete}>
                    Profil törlése
                </button>
            </main>
        </>
    );
};

export default ProfilePage;
