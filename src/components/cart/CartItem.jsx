import React from "react";
import "../../styles/CartItem.css";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <article className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />

            <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">{item.price} Ft</p>

                <div className="cart-item-quantity">
                    <button aria-label="Mennyiség csökkentése" onClick={onDecrease}>−</button>
                    <span>{item.quantity}</span>
                    <button aria-label="Mennyiség növelése" onClick={onIncrease}>+</button>
                </div>

                <button className="remove-btn" onClick={onRemove}>
                    Eltávolítás
                </button>
            </div>
        </article>
    );
};

export default CartItem;
