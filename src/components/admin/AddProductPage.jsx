import React, { useState } from "react";
import Header from "../../components/layout/Header";
import { addProduct } from "../../services/productService";
import "../../styles/AddProductPage.css";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        price: "",
        image: "",
        brand: "",
        ram: "",
        storage: "",
        color: "",
        cpu: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProduct(form);
        navigate("/admin");
    };

    return (
        <>
            <Header />

            <main className="add-container">
                <h1>Új termék hozzáadása</h1>

                <form className="add-form" onSubmit={handleSubmit}>
                    {Object.keys(form).map((key) => (
                        <div key={key}>
                            <label>{key}</label>
                            <input
                                name={key}
                                required
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    <button type="submit" className="save-btn">Mentés</button>
                </form>
            </main>
        </>
    );
};

export default AddProductPage;
