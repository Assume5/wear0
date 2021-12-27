import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function MenSale() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [alphabetical, setAlphabetical] = useState("");
    const [popular, setPopular] = useState("");
    const category = "SaleMen";

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);

    return (
        <div>
            <Background
                backGroundImgLink={"https://wallpapercave.com/wp/wp6326119.jpg"}
                h5Txt={"Men Sale!"}
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
export default MenSale;
