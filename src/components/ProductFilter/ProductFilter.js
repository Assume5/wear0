import React, { useEffect, useState } from "react";
import { serverUrl } from "../../constants/Global";
export const ProductFilter = ({ category }) => {
    const [data, setData] = useState([]);
    const [size, setSize] = useState([]);
    const [brand, setBrand] = useState([]);
    const [color, setColor] = useState([]);

    console.log(category);
    useEffect(() => {
        async function fetchData() {
            let response = await fetch(`${serverUrl}/filter/${category}`);
            response = await response.json();
            setData(response);
            console.log(response);
        }

        fetchData();
    }, []);
    return (
        <div className="product-filter">
            <div className="product-filter-brand">
                <p>Brands</p>
            </div>
            <div className="product-filter-size">
                <p>Size</p>
            </div>
            <div className="product-filter-color">
                <p>Color</p>
            </div>
            {category === "New" && (
                <div className="product-filter-department">
                    <p>Department</p>
                </div>
            )}
        </div>
    );
};
