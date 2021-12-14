import ProductSizeList from "./ProductSizeList";
import React from "react";
import { serverUrl } from "../../constants/Global";
import { getCookie } from "../../constants/GlobalFunction";
class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetails: {},
            currentSizeClick: 0,
            loaded: false,
            errorMessage: "",
            atcLoading: false,
            cartNumber: this.props.cartNumber,
        };
    }
    async componentDidMount() {
        const currenturl = document.URL;
        const id = currenturl.substring(currenturl.lastIndexOf("/") + 1);
        const responseDetails = await fetch(
            `${serverUrl}/productDetails/${id}`
        );
        let detailData = await responseDetails.json();

        const totalStock = detailData[0]["totalStock"];
        if (totalStock <= 0) {
            detailData[0]["stock"] = 0;
        } else {
            const responseSize = await fetch(`${serverUrl}/productSizes/${id}`);
            let detailSize = await responseSize.json();
            let stock = {};

            for (let i = 0; i < detailSize.length; i++) {
                console.log(detailSize[i]);
                stock[detailSize[i]["productSize"]] = parseInt(
                    detailSize[i]["productSizeStock"]
                );
            }
            detailData[0]["stock"] = stock;
        }

        this.setState({ productDetails: detailData[0] });
        this.setState({ loaded: true });
    }
    onSelectSizeClick = (size) => {
        if (this.state.currentSizeClick !== 0) {
            document.getElementById(
                this.state.currentSizeClick
            ).style.backgroundColor = "";

            document.getElementById(this.state.currentSizeClick).style.color =
                "";
        }
        this.setState({ currentSizeClick: size });
        document.getElementById(size).style.backgroundColor = "black";
        document.getElementById(size).style.color = "white";
    };
    onAddToCartClick = () => {
        console.log(this.props.user);
        console.log(this.state);
        let sizeList = document.querySelectorAll(".SizeList p");
        if (
            (sizeList.length > 0 && this.state.currentSizeClick !== 0) ||
            (sizeList.length === 0 && this.state.currentSizeClick === 0)
        ) {
            this.setState({ errorMessage: "" });
            if (this.props.user.login) {
                //if user then store in cart table
                let id = this.props.user.id;
                console.log(id)
                this.setState({ atcLoading: true });
                fetch(`${serverUrl}/add-to-user-cart`, {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id: id,
                        productDetails: this.state.productDetails,
                        size: this.state.currentSizeClick,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data === "true") {
                            this.setState({ atcLoading: false });
                            let badge = document.querySelector(
                                ".nav-icons .icon-wrapper .badge"
                            );
                            this.setState({
                                cartNumber: this.state.cartNumber + 1,
                            });
                            badge.innerHTML = this.state.cartNumber;
                        } else {
                            this.setState({ errorMessage: data });
                        }
                    });
            } else {
                //store in gust cart table
                if (getCookie("_guest")) {
                    let ownerCookie = getCookie("_guest");
                    this.setState({ atcLoading: true });
                    fetch(`${serverUrl}/add-to-gust-cart`, {
                        method: "post",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            cookie: ownerCookie,
                            productDetails: this.state.productDetails,
                            size: this.state.currentSizeClick,
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            if (data === "true") {
                                this.setState({ atcLoading: false });
                                let badge = document.querySelector(
                                    ".nav-icons .icon-wrapper .badge"
                                );
                                this.setState({
                                    cartNumber: this.state.cartNumber + 1,
                                });
                                badge.innerHTML = this.state.cartNumber;
                            } else {
                                this.setState({ errorMessage: data });
                            }
                        });
                } else {
                    this.setState({
                        errorMessage:
                            "Something went wrong, please try again later",
                    });
                }
            }
        } else {
            this.setState({ errorMessage: "Please select a size" });
        }
    };
    render() {
        if (this.state.loaded) {
            const productDetails = this.state.productDetails;
            return (
                <div className="ProductDetailContainer">
                    <div className="ProductImageContainer">
                        <img
                            className="in-left"
                            alt=""
                            src={`${serverUrl}${productDetails.productImg1}`}
                        />
                        <img
                            className="in-left2"
                            alt=""
                            src={`${serverUrl}${productDetails.productImg2}`}
                        />
                        <img
                            className="in-left3"
                            alt=""
                            src={`${serverUrl}${productDetails.productImg3}`}
                        />
                        <img
                            className="in-left4"
                            alt=""
                            src={`${serverUrl}${productDetails.productImg4}`}
                        />
                    </div>
                    <div className="ProductInfoContainer">
                        <h6 className="f3 header">
                            {productDetails.productName}
                        </h6>
                        <p className="f5">{productDetails.productDesc}</p>
                        <hr />
                        <div className="InfoDetails">
                            <h6 className="f4" style={{ marginBottom: "4%" }}>
                                SPECIFICATION:
                            </h6>
                            <p className="f5">
                                Color : {productDetails.productColor}
                            </p>
                            <p className="f5">
                                Material : {productDetails.productMaterial}
                            </p>
                            <p className="f5">
                                Category : {productDetails.productType}
                            </p>
                            <h6 className="f5">
                                Price : ${productDetails.productPrice}
                            </h6>
                        </div>
                        {productDetails.productSize !== "OneSize" ? (
                            <div>
                                <ProductSizeList
                                    stock={productDetails.stock}
                                    onSelectSizeClick={this.onSelectSizeClick}
                                />
                                {productDetails.stock !== 0 ? (
                                    <>
                                        <input
                                            style={{ marginTop: "5%" }}
                                            className="b ph3 pv2 input-reset ba w-60 b--black bg-transparent grow pointer f6 dib black"
                                            type="button"
                                            value="Add To Cart"
                                            onClick={this.onAddToCartClick}
                                        />
                                        <p style={{ color: "red" }}>
                                            {this.state.errorMessage}
                                        </p>
                                    </>
                                ) : (
                                    <input
                                        style={{
                                            marginTop: "5%",
                                            cursor: "no-drop",
                                        }}
                                        className="b ph3 pv2 input-reset ba w-60 b--black bg-transparent grow f6 dib black"
                                        type="button"
                                        value="OUT OF STOCK"
                                    />
                                )}
                            </div>
                        ) : productDetails.stock !== 0 ? (
                            <>
                                <input
                                    style={{ marginTop: "5%" }}
                                    className="b ph3 pv2 input-reset ba w-60 b--black bg-transparent grow pointer f6 dib black"
                                    type="button"
                                    value="Add To Cart"
                                    onClick={this.onAddToCartClick}
                                />
                                <p>{this.state.errorMessage}</p>
                            </>
                        ) : (
                            <input
                                style={{ marginTop: "5%", cursor: "no-drop" }}
                                className="b ph3 pv2 input-reset ba w-60 b--black bg-transparent f6 dib black"
                                type="button"
                                value="OUT OF STOCK"
                            />
                        )}
                    </div>
                </div>
            );
        } else {
            return <h1>Loading</h1>;
        }
    }
}
export default ProductDetails;
