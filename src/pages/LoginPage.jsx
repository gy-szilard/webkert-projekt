import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/layout/Header";
import { loginUser } from "../services/userService";
import "../styles/LoginPage.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const user = await loginUser(email, password);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <Header />

            <main className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                    <h1>Bejelentkezés</h1>

                    {error && <p className="error">{error}</p>}

                    <label>Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label>Jelszó</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit" className="login-btn">Bejelentkezés</button>

                    <p className="register-link">
                        Nincs még fiókod? <Link to="/register">Regisztráció</Link>
                    </p>
                </form>
            </main>
        </>
    );
};

export default LoginPage;
