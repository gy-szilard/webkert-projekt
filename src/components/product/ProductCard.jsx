import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ProductCard.css";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleAddToCart = () => {
        if (!user) {
            navigate("/login");
            return;
        }

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existing = cart.find(i => i.id === product.id);

        // 🔥 Akciós ár vagy normál ár
        const finalPrice = product.discountPercent > 0
            ? product.discountPrice
            : product.price;

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push({
                ...product,
                price: finalPrice,   // 🔥 mindig a végső ár kerül a kosárba
                quantity: 1
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
    };

    return (
        <article
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)} // 🔥 teljes kártya kattintható
        >

            {/* 🔥 Akció badge */}
            {product.discountPercent > 0 && (
                <div className="discount-badge">
                    -{product.discountPercent}%
                </div>
            )}

            <img src={product.image} alt={product.name} className="product-img" />

            <h3 className="product-title">{product.name}</h3>

            {/* 🔥 Akciós ár megjelenítése */}
            {product.discountPercent > 0 ? (
                <>
                    <p className="old-price">
                        {product.price.toLocaleString("hu-HU")} Ft
                    </p>

                    <p className="new-price">
                        {product.discountPrice.toLocaleString("hu-HU")} Ft
                    </p>
                </>
            ) : (
                <p className="price">
                    {product.price.toLocaleString("hu-HU")} Ft
                </p>
            )}

            <button
                className="add-to-cart"
                onClick={(e) => {
                    e.stopPropagation(); // 🔥 ne navigáljon el a termékoldalra
                    handleAddToCart();
                }}
            >
                Kosárba
            </button>
        </article>
    );
};

export default ProductCard;
