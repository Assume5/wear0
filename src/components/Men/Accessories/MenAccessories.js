import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function MenAccessories() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const category = "MenAccessories";

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);

    return (
        <div>
            <Background
                backGroundImgLink={
                    "https://img.grouponcdn.com/seocms/6jdU6U7AXhLmxxrp1diQod/Watch_detail_shot-600x390/v1/c600x390.jpg"
                }
                h5Txt={"Men Accessories!"}
                h1Txt={"SHOP NOW!"}
                route={"new"}
            />

            <div className="product-details">
                <ProductFilter
                    category={category}
                    setFilter={setFilter}
                    filterData={filter}
                />
                <ProductContent
                    data={data}
                    filterData={filter}
                    category={category}
                />
            </div>
        </div>
    );
}
export default MenAccessories;
