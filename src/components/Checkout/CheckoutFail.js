import React from "react";
import { Button } from "react-bootstrap";

export const CheckoutFail = (productId) => {
    return (
        <div className="checkout-fail background d-flex justify-center flex-column">
            <p className="black">One of your item is currently Out of Stock.</p>
            <p className="black">We have remove the items for you</p>
            <Button
                variant="dark"
                className="shop shadow-3 w-10 grow"
                onClick={() => window.location = "./cart"}
            >
                Back To Cart
            </Button>
        </div>
    );
};
