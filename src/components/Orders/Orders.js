import React from "react";
import Informations from "./Informations/Informations";
import OrdersCart from "./Carts/OrdersCart";
import logo_icon from "../Navbar/logo.png";
import { MobileView } from "react-device-detect";
import { serverUrl } from "../../constants/Global";

class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            products: {},
            information: {},
            loaded: false,
            subtotal: 0,
            cardNumber: "",
        };
    }

    async componentDidMount() {
        //getting cart from db
        const currenturl = document.URL;
        const orderNumber = currenturl.substring(
            currenturl.lastIndexOf("/") + 1
        );
        const response = await fetch(`${serverUrl}/orders/${orderNumber}`);
        const data = await response.json();
        const responseCard = await fetch(
            `${serverUrl}/get-last-four/${orderNumber}`
        );
        const cardNumber = await responseCard.json();
        const responseProducts = await fetch(
            `${serverUrl}/order-details/${orderNumber}`
        );
        const productDetails = await responseProducts.json();

        //getting information from db

        this.setState({ products: productDetails });
        this.setState({ information: data });
        this.setState({ cardNumber: cardNumber });
        this.setState({ loaded: true });
        this.setState({ subtotal: data[0]["totalPrice"] });
    }
    render() {
        if (!this.state.loaded) {
            return <div>Loading .....</div>;
        } else {
            return (
                <div>
                    <MobileView>
                        <img
                            src={logo_icon}
                            alt=""
                            className="logo pointer"
                            style={{ marginTop: "5%" }}
                            onClick={(event) => (window.location.href = "/")}
                        />
                    </MobileView>
                    <div className="order-status">
                        <Informations
                            information={this.state.information}
                            card={this.state.cardNumber}
                        />
                        <OrdersCart
                            products={this.state.products}
                            subtotal={this.state.subtotal}
                        />
                    </div>
                </div>
            );
        }
    }
}
export default Orders;
