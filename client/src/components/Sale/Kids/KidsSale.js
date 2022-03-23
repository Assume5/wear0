import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function KidsSale() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [alphabetical, setAlphabetical] = useState("");
    const [popular, setPopular] = useState("");
    const category = "SaleKid";

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);

    return (
        <div>
            <Background
                backGroundImgLink={
                    "https://diyprojects.com/wp-content/uploads/2018/08/Kids-Clothes-Ideas-feature-px.jpg"
                }
                h5Txt={"Kids Sale!"}
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
export default KidsSale;
