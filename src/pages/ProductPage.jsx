import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import { getProductById } from "../services/productService";
import "../styles/ProductPage.css";

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // 🔥 Termék betöltése (mindenki számára elérhető)
    useEffect(() => {
        async function load() {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (err) {
                setError("A termék nem található.");
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [id]);

    // 🔥 Kosárba rakás logika
    const handleAddToCart = () => {
        const user = JSON.parse(localStorage.getItem("user"));

        // ❌ Ha nincs bejelentkezve → login oldal
        if (!user) {
            navigate("/login");
            return;
        }

        // ✔ Ha be van jelentkezve → kosárba rakás
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find((item) => item.id === product.id);

        const finalPrice =
            product.discountPercent > 0
                ? product.discountPrice
                : product.price;

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                ...product,
                price: finalPrice,
                quantity: 1,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    if (loading) return <p>Betöltés...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Header />

            <main className="product-container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    ← Vissza
                </button>

                <section className="product-content">
                    <div className="product-image-wrapper">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="product-page-img"
                        />
                    </div>

                    <div className="product-info">
                        <h1>{product.name}</h1>

                        {/* 🔥 Akciós ár megjelenítése */}
                        {product.discountPercent > 0 ? (
                            <>
                                <div className="discount-badge">
                                    -{product.discountPercent}%
                                </div>

                                <p className="old-price">
                                    {product.price.toLocaleString("hu-HU")} Ft
                                </p>

                                <p className="new-price">
                                    {product.discountPrice.toLocaleString("hu-HU")} Ft
                                </p>
                            </>
                        ) : (
                            <p className="product-price">
                                {product.price.toLocaleString("hu-HU")} Ft
                            </p>
                        )}

                        <h2>Specifikációk</h2>
                        <ul className="spec-list">
                            <li><strong>Márka:</strong> {product.brand}</li>
                            <li><strong>RAM:</strong> {product.ram}</li>
                            <li><strong>Tárhely:</strong> {product.storage}</li>
                            <li><strong>Szín:</strong> {product.color}</li>
                            <li><strong>Leírás:</strong> {product.description}</li>
                        </ul>

                        <button className="add-to-cart-btn" onClick={handleAddToCart}>
                            Kosárba
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProductPage;
