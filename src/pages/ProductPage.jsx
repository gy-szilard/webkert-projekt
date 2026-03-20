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
                            className="product-image"
                        />
                    </div>

                    <div className="product-info">
                        <h1>{product.name}</h1>
                        <p className="product-price">{product.price} Ft</p>

                        <h2>Specifikációk</h2>
                        <ul className="spec-list">
                            <li><strong>Márka:</strong> {product.brand}</li>
                            <li><strong>RAM:</strong> {product.ram}</li>
                            <li><strong>Tárhely:</strong> {product.storage}</li>
                            <li><strong>Szín:</strong> {product.color}</li>
                            <li><strong>Processzor:</strong> {product.cpu}</li>
                        </ul>

                        <button className="add-to-cart-btn">
                            Kosárba
                        </button>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProductPage;
