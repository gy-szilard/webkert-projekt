import React from "react";
import "../../styles/FilterSidebar.css";


const FilterSidebar = ({ filters, onFilterChange }) => {
    const handleCheckbox = (category, value) => {
        const currentValues = filters[category] || [];

        let updatedValues;

        if (currentValues.includes(value)) {
            updatedValues = currentValues.filter(v => v !== value);
        } else {
            updatedValues = [...currentValues, value];
        }

        onFilterChange(category, updatedValues);
    };

    return (
        <div className="filter-sidebar">
            <h3>Szűrés</h3>

            <h4>Márka</h4>
            <div>
                {["Apple", "Samsung", "Xiaomi", "Oppo", "Huawei"].map(brand => (
                    <div key={brand}>
                        <label>
                            <input
                                type="checkbox"
                                checked={filters.brand.includes(brand)}
                                onChange={() => handleCheckbox("brand", brand)}
                            />
                            {brand}
                        </label>
                    </div>
                ))}
            </div>

            <h4>RAM</h4>
            <div>
                {["4GB", "6GB", "8GB", "12GB", "16GB"].map(ram => (
                    <div key={ram}>
                        <label>
                            <input
                                type="checkbox"
                                checked={filters.ram.includes(ram)}
                                onChange={() => handleCheckbox("ram", ram)}
                            />
                            {ram}
                        </label>
                    </div>
                ))}
            </div>

            <h4>Tárhely</h4>
            <div>
                {["64GB", "128GB", "256GB", "512GB", "1TB"].map(storage => (
                    <div key={storage}>
                        <label>
                            <input
                                type="checkbox"
                                checked={filters.storage.includes(storage)}
                                onChange={() => handleCheckbox("storage", storage)}
                            />
                            {storage}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterSidebar;
