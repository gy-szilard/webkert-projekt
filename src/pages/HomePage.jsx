import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import FilterSidebar from "../components/filters/FilterSidebar";
import ProductCard from "../components/product/ProductCard";
import { getProducts } from "../services/productService";
import "../styles/HomePage.css";

const HomePage = () => {
    const [filters, setFilters] = useState({
        brand: [],
        ram: [],
        storage: [],
        color: [],
        q: "" // 🔥 ide jön a keresés
    });

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleFilterChange = (name, values) => {
        setFilters(prev => ({
            ...prev,
            [name]: values
        }));
    };

    const handleSearch = (value) => {
        setFilters(prev => ({
            ...prev,
            q: value // 🔥 valós időben frissítjük
        }));
    };

    const loadProducts = async () => {
        setLoading(true);
        const data = await getProducts();

        const q = filters.q.trim().toLowerCase();

        const filtered = data.filter(product => {
            const brandOk =
                filters.brand.length === 0 || filters.brand.includes(product.brand);

            const ramOk =
                filters.ram.length === 0 || filters.ram.includes(product.ram);

            const storageOk =
                filters.storage.length === 0 || filters.storage.includes(product.storage);

            const colorOk =
                filters.color.length === 0 || filters.color.includes(product.color);

            // 🔥 ÜRES KERESÉS = MINDEN TERMÉK
            const searchOk =
                q === "" ||
                product.name.toLowerCase().includes(q) ||
                product.brand.toLowerCase().includes(q);

            return brandOk && ramOk && storageOk && colorOk && searchOk;
        });

        setProducts(filtered);
        setLoading(false);
    };

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    };


    useEffect(() => {
        loadProducts();
    }, [filters]);

    return (
        <>
            <Header onSearch={handleSearch} />

            <div className="home-container">
                <FilterSidebar filters={filters} onFilterChange={handleFilterChange}/>

                <div className="product-list">
                    {loading ? (
                        <p>Betöltés...</p>
                    ) : (
                        products.map((p) => (
                            <ProductCard
                                key={p.id}
                                product={p}
                            />
                        ))
                    )}
                </div>

            </div>
        </>
    );
};

export default HomePage;
