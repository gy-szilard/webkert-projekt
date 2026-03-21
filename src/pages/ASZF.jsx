import React from "react";
import "../styles/InfoPages.css";
import {NavLink} from "react-router-dom";

const ASZF = () => {
    return (
        <div className="info-container">
            <NavLink to="/" className="back-btn">← Vissza a főoldalra</NavLink>

            <h1>ÁSZF és Adatvédelmi tájékoztató</h1>

            <h2>Általános Szerződési Feltételek</h2>
            <p>A MobileShop webáruház használatával a vásárló elfogadja az alábbi feltételeket.</p>

            <h3>1. Vásárlás menete</h3>
            <p>A termékek kosárba helyezése után a rendelés leadható regisztrációval.</p>

            <h3>2. Fizetés és számlázás</h3>
            <p>Bankkártyás fizetés és utánvét érhető el. A számlát e-mailben küldjük.</p>

            <h3>3. Szállítás</h3>
            <p>A szállítási idő 1–3 munkanap. A futárszolgálat email-ben értesít.</p>

            <h3>4. Elállási jog</h3>
            <p>A vásárló 14 napon belül indoklás nélkül elállhat a vásárlástól.</p>

            <h2>Adatvédelmi tájékoztató</h2>
            <p>A MobileShop kiemelten kezeli a személyes adatok védelmét.</p>

            <h3>Milyen adatokat kezelünk?</h3>
            <p>Név, e-mail cím, szállítási cím, rendelési adatok.</p>

            <h3>Adatkezelés célja</h3>
            <p>Rendelések teljesítése, ügyfélszolgálat, számlázás.</p>

            <h3>Adatok megőrzése</h3>
            <p>A rendelési adatokat 8 évig őrizzük meg a jogszabályoknak megfelelően.</p>
        </div>
    );
};

export default ASZF;
