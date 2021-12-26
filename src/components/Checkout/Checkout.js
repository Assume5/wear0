import React from "react";
import CheckoutUserInfo from "./CheckoutUserAddressInfo";
import CheckoutCart from "./CheckoutCart";
import CheckoutUserPaymentInfo from "./CheckoutUserPaymentInfo";
import CheckOutOverView from "./CheckOutOverView";
import CheckoutConfirm from "./OrderConfirmPage";
import logo_icon from "../Navbar/logo.png";
import { Animated } from "react-animated-css";
import { serverUrl } from "../../constants/Global";

class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            products: {},
            step: "UserAddressInfo",
            loaded: false,
            subtotal: 0,
            addressInfo: {
                firstname: "",
                lastname: "",
                address: "",
                apartment: "",
                city: "",
                state: "",
                zip: "",
                email: "",
                phone: "",
            },
            billingCheck: true,
            paymentInfo: {
                cn: "",
                ed: "",
                sc: "",
            },
            billingInfo: {
                firstnameBilling: "",
                lastnameBilling: "",
                addressBilling: "",
                cityBilling: "",
                stateBilling: "",
                zipBilling: "",
            },
            remember: false,
            orderId: ""
        };
    }
    async componentDidMount() {
        //getting cart from db
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
            
            if(data.length === 0) {
                window.location = './cart'
            }

            let sumPrice = 0;
            data.map((x) => {
                return (sumPrice += x.productPrice * x.quantity);
            });

            this.setState({ subtotal: sumPrice.toFixed(2) });
            this.setState({ products: data });
            this.setState({ loaded: true });

            //fetch then autofill address
        }
    }

    isEmpty = (str) => {
        return !str.trim().length;
    };

    onAutoFilled = (data) => {
        this.setState({addressInfo:data})
        console.log(data)
    }

    onRememberAddressClick = () => {
        this.setState({ remember: !this.state.remember });
    };

    OnChangeAddressInput = (event) => {
        this.setState((prevState) => {
            let addressInfo = Object.assign({}, prevState.addressInfo);
            addressInfo[event.target.id] = event.target.value;
            return { addressInfo };
        });
    };

    OnChangeBillingInput = (event) => {
        this.setState((prevState) => {
            let billingInfo = Object.assign({}, prevState.billingInfo);
            billingInfo[event.target.id] = event.target.value;
            return { billingInfo };
        });
    };

    OnChangePaymentInput = (event) => {
        this.setState((prevState) => {
            let paymentInfo = Object.assign({}, prevState.paymentInfo);
            paymentInfo[event.target.id] = event.target.value;
            return { paymentInfo };
        });
    };

    OnChangeBillingChecked = () => {
        if (!this.state.billingCheck) {
            const addressInfo = this.state.addressInfo;
            const billingInfo = {
                firstnameBilling: addressInfo["firstname"],
                lastnameBilling: addressInfo["lastname"],
                addressBilling:
                    addressInfo["address"] + " " + addressInfo["apartment"],
                cityBilling: addressInfo["city"],
                stateBilling: addressInfo["state"],
                zipBilling: addressInfo["zip"],
            };
            this.setState({ billingInfo: billingInfo }, () => {
                this.setState({ billingCheck: !this.state.billingCheck });
            });
        } else {
            const billingInfo = {
                firstnameBilling: "",
                lastnameBilling: "",
                addressBilling: "",
                cityBilling: "",
                stateBilling: "",
                zipBilling: "",
            };
            this.setState({ billingInfo: billingInfo }, () => {
                this.setState({ billingCheck: !this.state.billingCheck });
            });
        }
    };

    OnBackToUserAddressInfo = (step) => {
        this.setState({ step: step }, () => {
            const addressInfo = this.state.addressInfo;
            if (this.state.step === step) {
                Object.keys(addressInfo).map((id, i) => {
                    if (addressInfo.value !== "")
                        return (document.getElementById(id).value =
                            addressInfo[id]);
                });
            }
        });
    };

    OnToUserPaymentInfoClick = (step) => {
        const empty = this.isEmpty;
        const addressInfo = this.state.addressInfo;
        let allFilled = true;
        Object.keys(addressInfo).map((id, i) => {
            if (id === "state") {
                if (addressInfo[id].length < 2) {
                    allFilled = false;
                    return document.getElementById(id).classList.add("b--red");
                } else {
                    return document
                        .getElementById(id)
                        .classList.remove("b--red");
                }
            }
            if (id === "zip") {
                if (addressInfo[id].length !== 5) {
                    allFilled = false;
                    return document.getElementById(id).classList.add("b--red");
                } else {
                    return document
                        .getElementById(id)
                        .classList.remove("b--red");
                }
            }
            if (id === "phone") {
                if (addressInfo[id].length !== 10) {
                    allFilled = false;
                    return document.getElementById(id).classList.add("b--red");
                } else {
                    return document
                        .getElementById(id)
                        .classList.remove("b--red");
                }
            }
            if (id === "email") {
                if (
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                        addressInfo[id].toLocaleLowerCase()
                    )
                ) {
                    return document
                        .getElementById(id)
                        .classList.remove("b--red");
                } else {
                    allFilled = false;
                    return document.getElementById(id).classList.add("b--red");
                }
            }
            if (empty(addressInfo[id]) && id !== "apartment") {
                allFilled = false;
                return document.getElementById(id).classList.add("b--red");
            }
            if (!empty(addressInfo[id])) {
                return document.getElementById(id).classList.remove("b--red");
            }
        });
        if (this.state.billingCheck) {
            const billingInfo = {
                firstnameBilling: addressInfo["firstname"],
                lastnameBilling: addressInfo["lastname"],
                addressBilling:
                    addressInfo["address"] + " " + addressInfo["apartment"],
                cityBilling: addressInfo["city"],
                stateBilling: addressInfo["state"],
                zipBilling: addressInfo["zip"],
            };
            this.setState({ billingInfo: billingInfo });
        }

        if (!this.state.billingCheck) {
            this.setState({ step: step }, () => {
                const billingInfo = this.state.billingInfo;
                if (this.state.step === step) {
                    Object.keys(billingInfo).map((id, i) => {
                        if (billingInfo.value !== "")
                            return (document.getElementById(id).value =
                                billingInfo[id]);
                    });
                }
            });
        }

        if (allFilled) {
            this.setState({ step: step });
        }
        if (this.state.paymentInfo["cn"] !== "") {
            this.setState({ step: "UserPaymentInfo" }, () => {
                const paymentInfo = this.state.paymentInfo;
                if (this.state.step === "UserPaymentInfo") {
                    Object.keys(paymentInfo).map((id, i) => {
                        if (paymentInfo.value !== "")
                            return (document.getElementById(id).value =
                                paymentInfo[id]);
                    });
                }
            });
        }
    };

    OnUserOverViewClick = (step) => {
        const empty = this.isEmpty;
        let allFilled = true;
        if (!this.state.billingCheck) {
            const billingInfo = this.state.billingInfo;

            Object.keys(billingInfo).map((id, i) => {
                if (id === "stateBilling") {
                    if (billingInfo[id].length < 2) {
                        allFilled = false;
                        return document
                            .getElementById(id)
                            .classList.add("b--red");
                    } else {
                        return document
                            .getElementById(id)
                            .classList.remove("b--red");
                    }
                }
                if (id === "zipBilling") {
                    if (billingInfo[id].length !== 5) {
                        allFilled = false;
                        return document
                            .getElementById(id)
                            .classList.add("b--red");
                    } else {
                        return document
                            .getElementById(id)
                            .classList.remove("b--red");
                    }
                }
                if (empty(billingInfo[id])) {
                    return document.getElementById(id).classList.add("b--red");
                }
                if (!empty(billingInfo[id])) {
                    return document
                        .getElementById(id)
                        .classList.remove("b--red");
                }
            });
        }
        const paymentInfo = this.state.paymentInfo;
        Object.keys(paymentInfo).map((id, i) => {
            if (id === "cn") {
                if (paymentInfo[id].length !== 16) {
                    allFilled = false;
                    return document.getElementById(id).classList.add("b--red");
                } else {
                    return document
                        .getElementById(id)
                        .classList.remove("b--red");
                }
            }
            if (id === "ed") {
                if (
                    !/^(?:0?[1-9]|1[0-2]) *\/ *[1-9][0-9]$/.test(
                        paymentInfo[id]
                    )
                ) {
                    allFilled = false;
                    return document.getElementById(id).classList.add("b--red");
                } else {
                    return document
                        .getElementById(id)
                        .classList.remove("b--red");
                }
            }
            if (id === "sc") {
                if (paymentInfo[id].length !== 3) {
                    allFilled = false;
                    return document.getElementById(id).classList.add("b--red");
                } else {
                    return document
                        .getElementById(id)
                        .classList.remove("b--red");
                }
            }
        });
        if (allFilled) {
            this.setState({ step: step });
        }
    };

    OnBackToPaymentClick = () => {
        this.setState({ step: "UserPaymentInfo" }, () => {
            const paymentInfo = this.state.paymentInfo;
            if (this.state.step === "UserPaymentInfo") {
                Object.keys(paymentInfo).map((id, i) => {
                    if (paymentInfo.value !== "")
                        return (document.getElementById(id).value =
                            paymentInfo[id]);
                });
            }
            if (this.state.billingCheck === false) {
                const billingInfo = this.state.billingInfo;
                if (this.state.step === "UserPaymentInfo") {
                    Object.keys(billingInfo).map((id, i) => {
                        if (billingInfo.value !== "")
                            return (document.getElementById(id).value =
                                billingInfo[id]);
                    });
                }
            }
        });
    };

    onConfirmClick = () => {
        return new Promise((resolve, reject) => {
            console.log(this.state);
            fetch(`${serverUrl}/checkout`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    shippingAddress: this.state.addressInfo,
                    billingAddress: this.state.billingInfo,
                    productsDetail: this.state.products,
                    totalPrice: this.state.subtotal,
                    userId: `${this.props.user.login ? this.props.user.id : "None"}`,
                    paymentInfo: this.state.paymentInfo,
                    remember: this.state.remember,
                    guestId: `${!this.props.user.login ? this.props.user.id : "None"}`
                }),
            })
                .then((respond) => respond.json())
                .then((message) => {
                    let success = message[1]
                    if(success === "true") {
                        this.setState({orderId: message[0]})
                        resolve([message[0], true]);
                    }
                    else {
                        resolve([message[0], false])
                    }
                });
        });
    };

    OnChangeStepClick = (step) => {
        if (step === "UserPaymentInfo") {
            //when user click
            this.OnToUserPaymentInfoClick(step);
        }
        if (step === "UserAddressInfo") {
            //async function
            this.OnBackToUserAddressInfo(step);
        }
        if (step === "UserOverView") {
            this.OnUserOverViewClick(step);
        }
        if (step === "Confirm") {
            this.onConfirmClick().then((res) => {
                if(res[1]) {
                    this.setState({ step: step });
                    let badge = document.querySelector(".nav-icons .icon-wrapper .badge");
                    badge.innerHTML = 0;
                }
                else {
                    window.location = "./checkout-fail"
                }
                
            });
        }
    };

    render() {
        if (!this.state.loaded) {
            return <h1 style={{ marginTop: "10%" }}>Loading</h1>;
        } else
            return (
                <div className="checkout-container">
                    <div className="user-info">
                        <img
                            src={logo_icon}
                            alt="logo"
                            className="checkoutLogo db pointer"
                            onClick={(event) => (window.location.href = "/")}
                        />

                        {this.state.step === "UserAddressInfo" && (
                            <Animated
                                animationIn="fadeInLeft"
                                animationOut="fadeOut"
                                animationInDuration={1500}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <CheckoutUserInfo
                                    OnChangeStepClick={this.OnChangeStepClick}
                                    OnChangeAddressInput={
                                        this.OnChangeAddressInput
                                    }
                                    user={this.props.user}
                                    onRememberAddressClick = {this.onRememberAddressClick}
                                    onAutoFilled={this.onAutoFilled}
                                />
                            </Animated>
                        )}

                        {this.state.step === "UserPaymentInfo" && (
                            <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <CheckoutUserPaymentInfo
                                    OnChangeStepClick={this.OnChangeStepClick}
                                    billingInfo={this.state.billingInfo}
                                    OnChangeBillingInput={
                                        this.OnChangeBillingInput
                                    }
                                    OnChangePaymentInput={
                                        this.OnChangePaymentInput
                                    }
                                    OnChangeBillingChecked={
                                        this.OnChangeBillingChecked
                                    }
                                    billingCheck={this.state.billingCheck}
                                />
                            </Animated>
                        )}

                        {this.state.step === "UserOverView" && (
                            <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <CheckOutOverView
                                    billingInfo={this.state.billingInfo}
                                    addressInfo={this.state.addressInfo}
                                    paymentInfo={this.state.paymentInfo}
                                    OnChangeStepClick={this.OnChangeStepClick}
                                    OnBackToPaymentClick={
                                        this.OnBackToPaymentClick
                                    }
                                />
                            </Animated>
                        )}

                        {this.state.step === "Confirm" && (
                            <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <CheckoutConfirm
                                    OnChangeStepClick={this.OnChangeStepClick}
                                    addressInfo={this.state.addressInfo}
                                    billingInfo={this.state.billingInfo}
                                    cardNum={this.state.paymentInfo.cn.substr(
                                        16 - 4
                                    )}
                                    orderId = {this.state.orderId}
                                />
                            </Animated>
                        )}
                    </div>
                    <div className="bag-info">
                        <CheckoutCart
                            products={this.state.products}
                            subtotal={this.state.subtotal}
                        />
                    </div>
                </div>
            );
    }
}
export default Checkout;
