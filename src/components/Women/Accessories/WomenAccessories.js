import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function WomenAccessories() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [alphabetical, setAlphabetical] = useState("");
    const [popular, setPopular] = useState("");
    const category = "WomenAccessories";

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);

    return (
        <div>
            <Background
                backGroundImgLink={
                    "https://envato-shoebox-0.imgix.net/07e6/764e-7b5f-4d2c-82f8-3a2703f73141/202005205306.JPG?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=1370eda727680cbfa4b8e66b8eec9dbc"
                }
                h5Txt={"Women Accessories!"}
                h1Txt={"SHOP NOW!"}
                route={"new"}
            />

            <div className="product-details">
                <ProductFilter
                    category={category}
                    setFilter={setFilter}
                    filterData={filter}
                    setAlphabetical={setAlphabetical}
                    setPopular={setPopular}
                />
                <ProductContent
                    data={data}
                    filterData={filter}
                    category={category}
                    alphabetical={alphabetical}
                    popular={popular}
                />
            </div>
        </div>
    );
}
export default WomenAccessories;
