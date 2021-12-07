import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function MenSale() {
    const [data, setData] = useState([]);
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
                <ProductFilter category={category} />
                <ProductContent data={data} />
            </div>
        </div>
    );
}
export default MenSale;
