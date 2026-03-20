import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.css";
import "./styles/variables.css";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminRoute from "./components/auth/AdminRoute";
import AdminPage from "./components/admin/AdminPage";
import AddProductPage from "./components/admin/AddProductPage";
import UserRoute from "./components/auth/UserRoute";
import ProfilePage from "./pages/ProfilePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/admin" element={
                <AdminRoute>
                    <AdminPage />
                </AdminRoute>
            } />

            <Route path="/admin/add" element={
                <AdminRoute>
                    <AddProductPage />
                </AdminRoute>
            } />

            <Route
                path="/profile"
                element={
                    <UserRoute>
                        <ProfilePage />
                    </UserRoute>
                }
            />
        </Routes>
    );
}

export default App;
