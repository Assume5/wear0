import React, { useEffect, useState } from "react";
import { serverUrl } from "../../constants/Global";
import Content from "../Content/Content";
import { onProductCardClick } from "../../constants/GlobalFunction";
import { fetchProductSizes } from "../../constants/GlobalFunction";
export const ProductContent = ({
    data,
    filterData,
    category,
    alphabetical,
    popular,
}) => {
    const [productSizes, setProductSizes] = useState([]);
    if (alphabetical === "A-Z") {
        data = data
            .sort((a, b) => a.productName.localeCompare(b.productName))
            .reverse();
        console.log(data);
    } else if (alphabetical === "Z-A") {
        data.sort((a, b) => a.productName.localeCompare(b.productName));
        console.log(data);
    }

    if (popular === "Most Popular") {
        data.sort((a, b) => a.productCheckout - b.productCheckout);
    } else if (popular === "Least Popular") {
        data.sort((a, b) => b.productCheckout - a.productCheckout);
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

    let tempArrayFilter = {};
    for (let i in filterData) {
        let key = Object.keys(filterData[i])[0];
        if (tempArrayFilter[key] === undefined) {
            tempArrayFilter[key] = [];
        }
        tempArrayFilter[key].push(filterData[i][key]);
    }
    return (
        <div className="Content">
            {data
                .slice(0)
                .reverse()
                .map((data, i) => {
                    let filtered = true;
                    for (let key in tempArrayFilter) {
                        if (key === "productSize") {
                            if (
                                !productSizes[0][data.productId].some((r) =>
                                    tempArrayFilter[key].includes(r)
                                )
                            ) {
                                filtered = false;
                            }
                        } else {
                            if (!tempArrayFilter[key].includes(data[key])) {
                                filtered = false;
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
