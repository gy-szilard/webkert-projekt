import React, { useState } from "react";
import Header from "../../components/layout/Header";
import { addProduct } from "../../services/productService";
import "../../styles/AddProductPage.css";
import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        brand: "",
        color: "",
        price: "",
        ram: "",
        storage: "",
        image: "",
        description: "",
        discountPercent: 0,
        discountPrice: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "discountPercent") {
            const percent = Number(value);
            const price = Number(form.price);

            const discounted = percent > 0 ? Math.round(price * (1 - percent / 100)) : "";
            setForm({ ...form, discountPercent: value, discountPrice: discounted });
            return;
        }

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = {
            ...form,
            price: Number(form.price),
            discountPercent: Number(form.discountPercent),
            discountPrice: form.discountPrice ? Number(form.discountPrice) : null
        };

        await addProduct(productData);
        navigate("/admin");
    };

    return (
        <>
            <Header />

            <main className="add-container">
                <h1>Új termék hozzáadása</h1>

                <form className="add-form" onSubmit={handleSubmit}>

                    <label>Termék neve</label>
                    <input name="name" required onChange={handleChange}/>

                    <label>Márka</label>
                    <input name="brand" required onChange={handleChange}/>

                    <label>Szín</label>
                    <input name="color" required onChange={handleChange}/>

                    <label>Ár (Ft)</label>
                    <input name="price" type="number" required onChange={handleChange}/>

                    <label>RAM</label>
                    <input name="ram" required onChange={handleChange}/>

                    <label>Tárhely</label>
                    <input name="storage" required onChange={handleChange}/>

                    <label>Kép URL</label>
                    <input name="image" required onChange={handleChange}/>

                    <label>Akció (%)</label>
                    <input
                        name="discountPercent"
                        type="number"
                        min="0"
                        max="90"
                        onChange={handleChange}
                    />

                    <label>Akciós ár</label>
                    <input
                        name="discountPrice"
                        type="number"
                        value={form.discountPrice}
                        readOnly
                    />

                    <label>Leírás</label>
                    <input
                        name="description"
                        type="string"
                        value={form.description}
                        onChange={handleChange}
                    />

                    <button type="submit" className="save-btn">Mentés</button>
                </form>
            </main>
        </>
    );
};

export default AddProductPage;
