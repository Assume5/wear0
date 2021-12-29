import React from 'react'
import { Animated } from 'react-animated-css'
import { serverUrl } from '../../../../constants/Global';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default class PastOrders extends React.Component {
    constructor() {
        super()
        this.state = {
            orders: []
        }
    }

    onOrderNumberClick = (orderId) => {
        window.location.href = `/orders/${orderId}`;
    }

    async componentDidMount() {
        const respond = await fetch(
            `${serverUrl}/get-user-order`,
            {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: this.props.userId
                }),
            }
        );
        const data = await respond.json()
        this.setState({orders:data})
    }

    render () {
        if(this.state.orders.length === 0) {
            return (
                <div>
                    <p>No Past Orders Found</p>
                    <Button variant="dark" className="shop mx-2" href="./">
                        <FontAwesomeIcon
                            className="FontAwesomeIcon"
                            icon={faShoppingCart}
                        />{" "}
                        Shop our product
                    </Button>
                </div>
            )
        }
        return (
            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                <div className="past-orders">
                    <div className="header">
                        <div className="order-number">
                            <p className="f6">Order Number</p>
                        </div>
                        <div className="order-date">
                            <p className="f6">Date</p>
                        </div>
                        <div className="status">
                            <p className="f6">Status</p>
                        </div>
                        <div className="order-total">
                            <p className="f6">Total</p> 
                        </div>
                    </div>

                    {
                        this.state.orders.map((x,i) => {
                            return (
                                <div className="order" key={i}>
                                    <div className="order-number">
                                        <p className="f6 link dim black db pointer white underline" onClick={()=>this.onOrderNumberClick(x.orderId)}>{x.orderId}</p>
                                    </div>
                                    <div className="order-date">
                                        <p className="f6">{x.orderDate}</p>
                                    </div>
                                    <div className="status">
                                        <p className="f6">{x.orderStatus}</p>
                                    </div>
                                    <div className="order-total">
                                        <p className="f6">${x.totalPrice}</p> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </Animated>
        )
    }

}