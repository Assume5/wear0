import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function WomenFootwear() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const category = "WomenFootwear";

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);

    return (
        <div>
            <Background
                backGroundImgLink={
                    "https://cdn.shopify.com/s/files/1/1500/6912/articles/DSC_8858_1024x1024_2e92f467-d3e4-45c6-96d4-78b3f34c3c0c_1200x.JPG?v=1513131306"
                }
                h5Txt={"Women Footwear!"}
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
export default WomenFootwear;
