import React from "react";
import { serverUrl } from "../../constants/Global";
import Content from "../Content/Content";
import { onProductCardClick } from "../../constants/GlobalFunction";

export const ProductContent = ({ data }) => {
    return (
        <div className="Content">
            {data
                .slice(0)
                .reverse()
                .map((data, i) => {
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
