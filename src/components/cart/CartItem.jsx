import React from "react";
import "../../styles/CartItem.css";

const formatPrice = (num) => num.toLocaleString("hu-HU");

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <article className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />

            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{formatPrice(item.price)} Ft</p>

                <div className="cart-item-quantity">
                    <button onClick={onDecrease}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={onIncrease}>+</button>
                </div>

                <button className="remove-btn" onClick={onRemove}>
                    Eltávolítás
                </button>
            </div>
        </article>
    );
};

export default CartItem;
