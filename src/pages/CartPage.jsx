import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import "../styles/CartPage.css";

const CartPage = () => {
    const [cart, setCart] = useState([]);

    // 🔥 Kosár betöltése
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(saved);
    }, []);

    // 🔥 Kosár mentése
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const increase = (id) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const decrease = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    const remove = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <>
            <Header />

            <main className="cart-container">
                <section className="cart-items">
                    <h1>Kosár</h1>

                    {cart.length === 0 ? (
                        <p>A kosár üres.</p>
                    ) : (
                        cart.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                onIncrease={() => increase(item.id)}
                                onDecrease={() => decrease(item.id)}
                                onRemove={() => remove(item.id)}
                            />
                        ))
                    )}
                </section>

                <CartSummary total={total} />
            </main>
        </>
    );
};

export default CartPage;