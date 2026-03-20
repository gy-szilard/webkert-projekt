import React from "react";
import "../../styles/FilterSidebar.css";

const FilterSidebar = ({ filters, onFilterChange }) => {
    const handleCheckbox = (name, value) => {
        const current = filters[name];

        const updated = current.includes(value)
            ? current.filter(v => v !== value)
            : [...current, value];

        onFilterChange(name, updated);
    };

    return (
        <aside className="filter-sidebar">
            <h2>Szűrők</h2>

            {/* Márka */}
            <h4>Márka</h4>
            {["Apple", "Samsung", "Xiaomi", "Oppo", "Huawei"].map(brand => (
                <label key={brand}>
                    <input
                        type="checkbox"
                        checked={filters.brand.includes(brand)}
                        onChange={() => handleCheckbox("brand", brand)}
                    />
                    {brand} <br/>
                </label>
            ))}

            {/* RAM */}
            <h4>RAM</h4>
            {["4GB", "6GB", "8GB", "12GB", "16GB"].map(ram => (
                <label key={ram}>
                    <input
                        type="checkbox"
                        checked={filters.ram.includes(ram)}
                        onChange={() => handleCheckbox("ram", ram)}
                    />
                    {ram} <br/>
                </label>
            ))}

            {/* Tárhely */}
            <h4>Tárhely</h4>
            {["64GB", "128GB", "256GB", "512GB", "1TB"].map(storage => (
                <label key={storage}>
                    <input
                        type="checkbox"
                        checked={filters.storage.includes(storage)}
                        onChange={() => handleCheckbox("storage", storage)}
                    />
                    {storage} <br/>
                </label>
            ))}

            {/* Szín */}
            <h4>Szín</h4>
            {["Fekete", "Fehér", "Kék"].map(color => (
                <label key={color}>
                    <input
                        type="checkbox"
                        checked={filters.color.includes(color)}
                        onChange={() => handleCheckbox("color", color)}
                    />
                    {color} <br/>
                </label>
            ))}
        </aside>
    );
};

export default FilterSidebar;
