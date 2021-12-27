import React, { useEffect, useState } from "react";
import Background from "../Background/Background";
import { ProductFilter } from "../ProductFilter/ProductFilter";
import { fetchProductDataCategory } from "../../constants/GlobalFunction";
import { ProductContent } from "../ProductContent/ProductContent";

function New() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [alphabetical, setAlphabetical] = useState("");
    const [popular, setPopular] = useState("");
    const category = "New";

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);

    return (
        <div>
            <Background
                backGroundImgLink={
                    "https://i.pinimg.com/originals/a0/04/7c/a0047c6fbe7355ce655176da3b4cba5e.jpg"
                }
                h5Txt={"New Collection!"}
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
export default New;
