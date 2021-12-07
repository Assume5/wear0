import React, { useEffect, useState } from "react";
import Background from "../../Background/Background";
import { fetchProductDataCategory } from "../../../constants/GlobalFunction";
import { ProductFilter } from "../../ProductFilter/ProductFilter";
import { ProductContent } from "../../ProductContent/ProductContent";

function MenApparel(){
    const [data, setData] = useState([]);
    const category = "MenAccessories";

    useEffect(() => {
        fetchProductDataCategory(category).then((response) =>
            setData(response)
        );
    }, []);
    
    return(
        <div>
            <Background backGroundImgLink={'https://www.vuelio.com/uk/wp-content/uploads/2020/07/Mens-Fashion.jpg'}
             h5Txt={'Men Apparel!'} h1Txt={'SHOP NOW!'} route={'new'} />
             
                         <div className="product-details">
                <ProductFilter category={category} />
                <ProductContent data={data} />
            </div>
        </div>
    )
}
export default MenApparel