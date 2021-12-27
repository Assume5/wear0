import React, { useEffect, useState } from "react";
import { serverUrl } from "../../constants/Global";
import Content from "../Content/Content";
import { onProductCardClick } from "../../constants/GlobalFunction";
import { fetchProductSizes } from "../../constants/GlobalFunction";
export const ProductContent = ({ data, filterData, category, alphabetical, popular }) => {
    const [productSizes, setProductSizes] = useState([]);
    if(alphabetical === "A-Z") {
        data = data.sort((a,b) => a.productName.localeCompare(b.productName)).reverse()
        console.log(data)
    }

    else if(alphabetical === "Z-A") {
        data.sort((a,b) => a.productName.localeCompare(b.productName))
        console.log(data)
    }

    if(popular === "Most Popular") {
        data.sort((a,b) => a.productCheckout - b.productCheckout)
    }

    else if(popular === "Least Popular") {
        data.sort((a,b) => b.productCheckout - a.productCheckout)
    }

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
                    console.log(data)
                    let filtered = false;
                    if (filterData.length === 0) filtered = true;
                    for (let j = 0; j < filterData.length; j++) {
                        let key = Object.keys(filterData[j])[0];
                        console.log(data)
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
