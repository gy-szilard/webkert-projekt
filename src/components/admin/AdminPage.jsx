import React, { useEffect, useState } from "react";
import Header from "../../components/layout/Header";
import { getProducts } from "../../services/productService";
import { deleteProduct } from "../../services/productService";
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
                        <th>Műveletek</th>
                    </tr>
                    </thead>

                    <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price} Ft</td>
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
