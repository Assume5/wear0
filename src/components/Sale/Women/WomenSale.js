import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function WomenSale(){
    const [data, setData] = useState([]);
    const category = "SaleWomen"

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);

    return(
        <div>
            <Background backGroundImgLink={'https://static.fibre2fashion.com/articleresources/images/87/8609/shutterstock_577289239%20(1)_Big.jpg'} h5Txt={'Women Sale!'} h1Txt={'SHOP NOW!'} route={'new'} />
            
            <div className="product-details">
                <ProductFilter category={category} />
                <ProductContent data = {data} />
            </div>
        </div>
    )
}
export default WomenSale