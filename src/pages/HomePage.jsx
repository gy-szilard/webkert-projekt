import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/layout/Header";
import FilterSidebar from "../components/filters/FilterSidebar";
import ProductCard from "../components/product/ProductCard";
import { getProducts } from "../services/productService";
import "../styles/HomePage.css";

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        brand: [],
        ram: [],
        storage: [],
        q: ""
    });

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleFilterChange = (name, values) => {
        setFilters(prev => ({
            ...prev,
            [name]: values
        }));
    };

    const loadProducts = async () => {
        setLoading(true);
        const data = await getProducts();

        const filtered = data.filter(product => {
            const brandOk =
                filters.brand.length === 0 || filters.brand.includes(product.brand);

            const ramOk =
                filters.ram.length === 0 || filters.ram.includes(product.ram);

            const storageOk =
                filters.storage.length === 0 || filters.storage.includes(product.storage);

            return brandOk && ramOk && storageOk;
        });

        setProducts(filtered);
        setLoading(false);
    };

    useEffect(() => {
        loadProducts();
    }, [filters]);

    return (
        <>
            <Header />

            <div className="home-container">
                <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />

                <div className="product-list">
                    {loading ? (
                        <p>Betöltés...</p>
                    ) : (
                        products.map((p) => <ProductCard key={p.id} product={p} />)
                    )}
                </div>
            </div>
        </>
    );
};

export default HomePage;
