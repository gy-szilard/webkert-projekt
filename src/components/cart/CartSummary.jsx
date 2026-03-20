import React from "react";
import "../../styles/CartSummary.css";

const CartSummary = ({ total }) => {
    const shipping = 1490;
    const finalTotal = total + shipping;

    return (
        <aside className="cart-summary" aria-label="Kosár összegzés">
            <h2>Összegzés</h2>

            <div className="summary-row">
                <span>Termékek összesen:</span>
                <strong>{total} Ft</strong>
            </div>

            <div className="summary-row">
                <span>Szállítás:</span>
                <strong>{shipping} Ft</strong>
            </div>

            <div className="summary-row total">
                <span>Végösszeg:</span>
                <strong>{finalTotal} Ft</strong>
            </div>

            <button className="checkout-btn">
                Tovább a fizetéshez
            </button>
        </aside>
    );
};

export default CartSummary;
