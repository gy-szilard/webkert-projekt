import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import { getProducts, deleteProduct } from "../../services/productService";
import "../../styles/AdminPage.css";
import { Link } from "react-router-dom";

const AdminPage = () => {
    const [products, setProducts] = useState([]);

    const load = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        load();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Biztosan törlöd?")) return;

        await deleteProduct(id);
        load();
    };

    return (
        <>
            <Header />

            <main className="admin-container">
                <h1>Admin – Termékkezelés</h1>

                <Link to="/admin/add" className="add-btn">Új termék hozzáadása</Link>

                <table className="admin-table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Név</th>
                        <th>Ár</th>
                        <th>Akció</th>
                        <th>Műveletek</th>
                    </tr>
                    </thead>

                    <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price.toLocaleString("hu-HU")} Ft</td>
                            <td>
                                {p.discountPercent > 0
                                    ? `-${p.discountPercent}% (${p.discountPrice.toLocaleString("hu-HU")} Ft)`
                                    : "Nincs"}
                            </td>
                            <td>
                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(p.id)}
                                >
                                    Törlés
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
        </>
    );
};

export default AdminPage;
