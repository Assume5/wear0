import { Button } from "react-bootstrap";
import CartItem from "./CartItem";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { serverUrl } from "../../constants/Global";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            totalItem: 0,
            loaded: false,
            totalPrice: 0,
        };
    }
    async componentDidMount() {
        console.log(this.props);
        //if i fetch information form server
        if (this.props.user.id) {
            const respond = await fetch(
                `${serverUrl}/get-user-cart-information`,
                {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        userId: this.props.user.id,
                        guest: `${this.props.user.login ? false : true}`,
                    }),
                }
            );
            const data = await respond.json();
            let sumPrice = 0;
            let totalItem = 0;
            data.map((x) => {
                return (sumPrice += x.productPrice * x.quantity);
            });

            data.map((x) => {
                return (totalItem += x.quantity);
            });

            this.setState({ totalPrice: sumPrice.toFixed(2) });
            this.setState({ products: data });
            this.setState({ loaded: true });
            this.setState({ totalItem: totalItem });
        }
    }

    findIndex = (id, size) => {
        let products = this.state.products;
        let index = products.findIndex(
            (x) => x.productid === id && x.productSize === size
        );
        return index;
    };

    async cartIncrement(product) {
        const respond = await fetch(`${serverUrl}/update-cart`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: this.props.user.id,
                guest: `${this.props.user.login ? false : true}`,
                updateOn: "increase",
                productId: product.productid,
                productSize: product.productSize,
                quantity: product.quantity,
            }),
        });
        const data = await respond.json();
        if (data === true) {
            return true;
        }
    }

    async cartDecrement(product) {
        const respond = await fetch(`${serverUrl}/update-cart`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: this.props.user.id,
                guest: `${this.props.user.login ? false : true}`,
                updateOn: "decrease",
                productId: product.productid,
                productSize: product.productSize,
                quantity: product.quantity,
            }),
        });
        const data = await respond.json();
        if (data === true) {
            return true;
        }
    }

    async cartRemove(product) {
        const respond = await fetch(`${serverUrl}/update-cart`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: this.props.user.id,
                guest: `${this.props.user.login ? false : true}`,
                updateOn: "remove",
                productId: product.productid,
                productSize: product.productSize,
                quantity: product.quantity,
            }),
        });
        const data = await respond.json();
        if (data === true) {
            return true;
        }
    }

    updateBadge = () => {
        let badge = document.querySelector(".nav-icons .icon-wrapper .badge");
        badge.innerHTML = this.state.totalItem;
    };

    onRemoveClick = (id, size) => {
        size = `${size === "One Size" ? "0" : size}`;
        let products = this.state.products;
        let index = this.findIndex(id, size);
        this.cartRemove(products[index]).then((res) => {
            if (res === true) {
                let quantity = products[index]["quantity"];
                let totalPrice = quantity * products[index]["productPrice"];
                let copyProducts = [...products];
                copyProducts.splice(index, 1);

                this.setState({ products: copyProducts });
                this.setState({ totalItem: this.state.totalItem - quantity });
                this.setState({
                    totalPrice: (
                        this.state.totalPrice - totalPrice.toFixed(2)
                    ).toFixed(2),
                });
                this.updateBadge();
            }
        });
    };

    onIncreaseClick = (id, size) => {
        size = `${size === "One Size" ? "0" : size}`;
        let products = this.state.products;
        let index = this.findIndex(id, size);
        let currentQuantity = products[index]["quantity"];

        //let quantity = this.state.product[index]["quantity"]
        this.cartIncrement(products[index]).then((res) => {
            if (res) {
                this.setState({
                    products: [
                        ...products.slice(0, index),
                        Object.assign({}, products[index], {
                            quantity: currentQuantity + 1,
                        }),
                        ...products.slice(index + 1),
                    ],
                });
                let totalPrice =
                    parseFloat(this.state.totalPrice) +
                    parseFloat(products[index].productPrice);
                this.setState({ totalItem: this.state.totalItem + 1 });
                this.setState({
                    totalPrice: totalPrice.toFixed(2),
                });
                this.updateBadge();
            }
        });
    };

    onDecreaseClick = (id, size) => {
        size = `${size === "One Size" ? "0" : size}`;
        let products = this.state.products;
        let index = this.findIndex(id, size);

        if (products[index]["quantity"] === 1) {
            this.cartRemove(products[index]).then((res) => {
                if (res) {
                    let copyProducts = [...products];
                    copyProducts.splice(index, 1);
                    this.setState({ products: copyProducts });
                    this.setState({ totalItem: this.state.totalItem - 1 });
                    let totalPrice =
                        parseFloat(this.state.totalPrice) -
                        parseFloat(products[index].productPrice);
                    this.setState({
                        totalPrice: totalPrice.toFixed(2),
                    });
                    this.updateBadge();
                }
            });
        } else {
            let currentQuantity = products[index]["quantity"];
            this.cartDecrement(products[index]).then((res) => {
                if (res) {
                    this.setState({
                        products: [
                            ...products.slice(0, index),
                            Object.assign({}, products[index], {
                                quantity: currentQuantity - 1,
                            }),
                            ...products.slice(index + 1),
                        ],
                    });
                    this.setState({ totalItem: this.state.totalItem - 1 });
                    let totalPrice =
                        parseFloat(this.state.totalPrice) -
                        parseFloat(products[index].productPrice);
                    this.setState({
                        totalPrice: totalPrice.toFixed(2),
                    });
                    this.updateBadge();
                }
            });
        }
    };

    onProductImageClick = (id) => {
        window.location = "./productdetails/" + id;
    };

    onCheckoutClick = () => {
        window.location = "./checkout";
    };

    render() {
        return !this.state.loaded ? ( //if not loaded yet
            <h1 style={{ marginTop: "10%" }}>Loading</h1>
        ) : this.state.loaded && this.state.totalItem > 0 ? ( //if has items in their bag
            <div className="CartContainer">
                <div className="Header">
                    <h1>CART</h1>
                </div>
                <div className="CartContent center">
                    <div className="CartItemHeading f6">
                        <p>PRODUCT</p>
                    </div>
                    <div className="CartItemHeading f6">
                        <p>QUANTITY</p>
                    </div>
                    <div className="CartItemHeading f6">
                        <p>PRICE</p>
                    </div>
                    <hr style={{ marginTop: "-30px" }}></hr>
                </div>
                {this.state.products.map((product, i) => {
                    return (
                        <CartItem
                            productid={product.productid}
                            productimage={`${serverUrl}${product.productImage}`}
                            productname={product.productName}
                            quantity={product.quantity}
                            total={product.productPrice}
                            onRemoveClick={this.onRemoveClick}
                            onIncreaseClick={this.onIncreaseClick}
                            onDecreaseClick={this.onDecreaseClick}
                            onProductImageClick={this.onProductImageClick}
                            productSize={`${
                                product.productSize === "0"
                                    ? "One Size"
                                    : product.productSize
                            }`}
                            key={i}
                        />
                    );
                })}
                <div className="CartContent center">
                    <hr></hr>
                    <div className="CartRecap">
                        <p>Total: ${this.state.totalPrice}</p>
                        <Button
                            size="md"
                            variant="dark"
                            className="shadow-5 grow br3"
                            onClick={this.onCheckoutClick}
                        >
                            Checkout
                        </Button>
                    </div>
                </div>
            </div>
        ) : (
            //if no items
            <div className="empty-cart">
                <div className="Header f5">
                    <p>YOUR CART IS EMPTY</p>
                    <Button variant="dark" className="shop mx-2" href="./">
                        <FontAwesomeIcon
                            className="FontAwesomeIcon"
                            icon={faShoppingCart}
                        />{" "}
                        Shop our product
                    </Button>
                </div>
            </div>
        );
    }
}
export default Cart;
