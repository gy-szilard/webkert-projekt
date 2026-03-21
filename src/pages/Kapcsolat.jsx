import React from "react";
import "../styles/InfoPages.css";
import {NavLink} from "react-router-dom";

const Kapcsolat = () => {
    return (
        <div className="info-container">
            <NavLink to="/" className="back-btn">← Vissza a főoldalra</NavLink>

            <h1>Kapcsolat és támogatás</h1>

            <p>Ha kérdésed van, vagy segítségre van szükséged, ügyfélszolgálatunk készséggel áll rendelkezésedre.</p>

            <h2>Ügyfélszolgálati elérhetőségek</h2>
            <p><strong>E-mail:</strong> support@mobileshop.hu</p>
            <p><strong>Telefon:</strong> +36 30 123 4567</p>
            <p><strong>Ügyfélszolgálati idő:</strong> H–P: 9:00–17:00</p>

            <h2>Székhely</h2>
            <p>1234 Budapest, Példa utca 12.</p>

            <h2>Hibabejelentés</h2>
            <p>Ha problémát tapasztalsz a weboldalon vagy a rendeléseddel, írj nekünk, és 24 órán belül válaszolunk.</p>
        </div>
    );
};

export default Kapcsolat;
