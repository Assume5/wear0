import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function KidsFootWear() {
    const [data, setData] = useState([]);
    const category = "KidApparel"

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);

    return (
        <div>
            <Background
                backGroundImgLink={
                    "https://i.pinimg.com/originals/53/2d/5a/532d5a20031fef15d814770a530e179c.jpg"
                }
                h5Txt={"Kids Footwear!"}
                h1Txt={"SHOP NOW!"}
                route={"new"}
            />

            <div className="product-details">
                <ProductFilter category={category} />
                <ProductContent data = {data} />
            </div>
        </div>
    );
}
export default KidsFootWear;
