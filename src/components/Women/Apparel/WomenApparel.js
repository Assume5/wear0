import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function WomenApparel(){
    const [data, setData] = useState([]);
    const category = "WomenApparel"

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);

    return(
        <div>
            <Background backGroundImgLink={'http://cdn.shopify.com/s/files/1/0251/3007/4187/collections/gocoop_apparel_campaign_-_WOMAN.jpg?v=1568987843'}
             h5Txt={'Women Apparel!'} h1Txt={'SHOP NOW!'} route={'new'} />
             
            <div className="product-details">
                <ProductFilter category={category} />
                <ProductContent data = {data} />
            </div>
        </div>
    )
}
export default WomenApparel