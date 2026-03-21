import React from "react";
import "../styles/InfoPages.css";
import {NavLink} from "react-router-dom";

const GYIK = () => {
    return (
        <div className="info-container">
            <NavLink to="/" className="back-btn">← Vissza a főoldalra</NavLink>
            <h1>GYIK – Gyakran Ismételt Kérdések</h1>

            <h2>1. Mennyi idő a szállítás?</h2>
            <p>A rendeléseket általában 1–3 munkanapon belül kiszállítjuk. A pontos idő a futárszolgálattól függ.</p>

            <h2>2. Van lehetőség személyes átvételre?</h2>
            <p>Jelenleg csak házhozszállítást biztosítunk, személyes átvétel nem elérhető.</p>

            <h2>3. Hogyan tudom visszaküldeni a terméket?</h2>
            <p>14 napon belül indoklás nélkül visszaküldheted. Írj nekünk a kapcsolat oldalon található e-mail címre.</p>

            <h2>4. Kapok garanciát a telefonokra?</h2>
            <p>Igen, minden készülékre 1 év hivatalos garancia jár.</p>

            <h2>5. Milyen fizetési módok érhetők el?</h2>
            <p>Bankkártyás fizetés és utánvét.</p>
        </div>
    );
};

export default GYIK;
