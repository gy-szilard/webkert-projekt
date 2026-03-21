import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import "../styles/EditProfilePage.css";
import {updateUser} from "../services/userService";

const EditProfilePage = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const [form, setForm] = useState({
        name: user.name,
        email: user.email,
        city: user.city,
        zip: user.zip,
        address: user.address,
        password: user.password
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const updatedUser = await updateUser(user.id, form);

            // 🔥 localStorage frissítése is kell, hogy a frontend tudja
            localStorage.setItem("user", JSON.stringify(updatedUser));

            navigate("/profile");
        } catch (err) {
            alert("Hiba történt a mentés során.");
        }
    };


    return (
        <>
            <Header />

            <main className="edit-profile-container">
                <h1>Fiók adatainak szerkesztése</h1>

                <div className="edit-profile-form">

                    <label>Név</label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <label>Email</label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <label>Város</label>
                    <input
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                    />

                    <label>Irányítószám</label>
                    <input
                        name="zip"
                        value={form.zip}
                        onChange={handleChange}
                    />

                    <label>Cím</label>
                    <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                    />

                    <label>Jelszó</label>
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                    />

                    <button className="save-btn" onClick={handleSave}>
                        Mentés
                    </button>

                    <button className="cancel-btn" onClick={() => navigate("/profile")}>
                        Mégse
                    </button>
                </div>
            </main>
        </>
    );
};

export default EditProfilePage;
