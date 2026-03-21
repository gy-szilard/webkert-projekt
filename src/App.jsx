import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./styles/global.css";
import "./styles/variables.css";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

import AdminPage from "./components/admin/AdminPage";
import AddProductPage from "./components/admin/AddProductPage";

import UserRoute from "./components/auth/UserRoute";
import ProfilePage from "./pages/ProfilePage";

import GYIK from "./pages/GYIK";
import Kapcsolat from "./pages/Kapcsolat";
import ASZF from "./pages/ASZF";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* 🔥 Admin oldalak védve */}
            <Route
                path="/admin"
                element={user?.admin ? <AdminPage /> : <Navigate to="/" />}
            />

            <Route
                path="/admin/add"
                element={user?.admin ? <AddProductPage /> : <Navigate to="/" />}
            />

            {/* 🔥 Csak bejelentkezett user */}
            <Route
                path="/profile"
                element={
                    <UserRoute>
                        <ProfilePage />
                    </UserRoute>
                }
            />

            <Route path="/gyik" element={<GYIK />} />
            <Route path="/kapcsolat" element={<Kapcsolat />} />
            <Route path="/aszf" element={<ASZF />} />

            <Route path="*" element={<NotFoundPage />} />

            <Route path="/profile/edit" element={<EditProfilePage />} />

        </Routes>
    );
}

export default App;
