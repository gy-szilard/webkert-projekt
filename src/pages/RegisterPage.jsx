import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import { registerUser } from "../services/userService";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        city: "",
        zip: "",
        address: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        const newUser = {
            ...form,
            admin: false
        };

        try {
            await registerUser(newUser);
            navigate("/login");
        } catch (err) {
            setError(err.message); // 🔥 valódi hibaüzenet megjelenítése
        }
    };

    return (
        <>
            <Header />

            <main className="register-container">
                <form className="register-form" onSubmit={handleRegister}>
                    <h1>Regisztráció</h1>

                    {error && <p className="error">{error}</p>}

                    <label>Név</label>
                    <input name="name" required onChange={handleChange} />

                    <label>Email</label>
                    <input type="email" name="email" required onChange={handleChange} />

                    <label>Jelszó</label>
                    <input type="password" name="password" required onChange={handleChange} />

                    <label>Település</label>
                    <input name="city" required onChange={handleChange} />

                    <label>Irányítószám</label>
                    <input name="zip" required onChange={handleChange} />

                    <label>Utca / házszám</label>
                    <input name="address" required onChange={handleChange} />

                    <button type="submit" className="register-btn">Regisztráció</button>
                </form>
            </main>
        </>
    );
};

export default RegisterPage;
