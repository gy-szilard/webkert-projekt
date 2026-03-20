import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            navigate("/login");
            return;
        }

        addToCart(product);
    };

    return (
        <article className="product-card">
            <img
                src={product.image}
                alt={product.name}
                className="product-img"
            />

            <h3 className="product-title">{product.name}</h3>
            <p className="price">{product.price} Ft</p>

            <button
                className="add-to-cart"
                aria-label={`${product.name} hozzáadása a kosárhoz`}
                onClick={handleAddToCart}
            >
                Kosárba
            </button>
        </article>
    );
};

export default ProductCard;
