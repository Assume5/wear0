import React, { useEffect, useState } from "react";
import { serverUrl } from "../../constants/Global";
import Content from "../Content/Content";
import { onProductCardClick } from "../../constants/GlobalFunction";
import { fetchProductSizes } from "../../constants/GlobalFunction";
export const ProductContent = ({ data, filterData, category }) => {
    const [productSizes, setProductSizes] = useState([]);
    useEffect(() => {
        fetchProductSizes(category).then((response) => {
            let tempData = {};
            for (let i = 0; i < response.length; i++) {
                let key = response[i]["productId"];
                if (!tempData[key]) {
                    tempData[key] = [];
                }

                tempData[key].push(
                    response[i]["productSize"] === "0"
                        ? "onesize"
                        : response[i]["productSize"]
                );
            }
            setProductSizes([tempData]);
        });
    }, [category]);
    return (
        <div className="Content">
            {data
                .slice(0)
                .reverse()
                .map((data, i) => {
                    let filtered = false;
                    if (filterData.length === 0) filtered = true;
                    for (let j = 0; j < filterData.length; j++) {
                        let key = Object.keys(filterData[j])[0];
                        if (key === "productSize") {
                            if(productSizes[0][data.productId].includes(filterData[j][key])) {
                                filtered=true;
                            }
                        } else {
                            if (filterData[j][key] === data[key]) {
                                filtered = true;
                            }
                        }
                    }
                    if (filtered)
                        return (
                            <Content
                                productid={data.productId}
                                productname={data.productName}
                                productprice={data.productPrice}
                                productimage={`${serverUrl}${data.productImg1}`}
                                productalt={data.productName}
                                productimageHover={`${serverUrl}${data.productImg2}`}
                                animationDelay={100 + i * 100}
                                onProductCardClick={onProductCardClick}
                                productstock={data.totalStock}
                                key={data["productId"]}
                            />
                        );
                })}
        </div>
    );
};
