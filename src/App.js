import "./App.css";
import "./styles/main.scss";
import { serverUrl } from "./constants/Global";
import {
    getCookie,
    generateGuestCookieValues,
    setCookie,
} from "./constants/GlobalFunction";

import "tachyons";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import New from "./components/New/New";
import KidsApparel from "./components/Kid/Apparel/KidsApparel";
import KidsFootwear from "./components/Kid/Footwear/KidsFootWear";
import MenAccessories from "./components/Men/Accessories/MenAccessories";
import MenApparel from "./components/Men/Apparel/MenApparel";
import MenFootwear from "./components/Men/Footwear/MenFootwear";
import WomenAccessories from "./components/Women/Accessories/WomenAccessories";
import WomenApparel from "./components/Women/Apparel/WomenApparel";
import WomenFootwear from "./components/Women/Footwear/WomenFootwear";
import KidsSale from "./components/Sale/Kids/KidsSale";
import MenSale from "./components/Sale/Mens/MenSale";
import WomenSale from "./components/Sale/Women/WomenSale";
import Account from "./components/Account/Account/Account";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import BackgroundAccount from "./components/Account/BackgroundAccount/BackgroundAccount";
import Cart from "./components/Cart/Cart";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

import Orders from "./components/Orders/Orders";
//pages
import MensSiteMap from "./components/Pages/MensSiteMap/MensSiteMap";
import WomenSiteMap from "./components/Pages/WomenSiteMap/WomensSiteMap";
import KidsSiteMap from "./components/Pages/KidsSiteMap/KidsSiteMap";
import SaleSiteMap from "./components/Pages/SaleSiteMap/SaleSiteMap";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Privacy from "./components/Pages/Privacy/Privacy";
import TermOfUse from "./components/Pages/TermOfUse/TermOfUse";
//services
import ContactUs from "./components/Services/ContactUs/ContactUs";
import OrderStatus from "./components/Services/OrderStatus/OrderStatus";
import { CheckoutFail } from "./components/Checkout/CheckoutFail";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                id: "",
                login: false,
                cartNumber:0
            },
            guest: {
                id: "",
            },
        };
    }

    onUserIconClick = () => {
        if (this.state.user.login === false) {
            window.location = "/login";
        } else {
            window.location = "/account";
        }
    };
    onUserShoppingBagClick = () => {
        window.location = "/cart";
    };

    componentDidMount() {
        let rem = getCookie("_rem");
        let id = getCookie("_id");
        //check if this user has login before
        if (rem && id) {
            fetch(`${serverUrl}/get-user-cart-number`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cookie: id,
                }),
            })
                .then((respond) => respond.json())
                .then((data) => {
                    this.setState({user: {id:id, login: true, cartNumber:data}})
                });
        } else {
            //if this user has not login before generate random cookie values
            if (!getCookie("_guest")) {
                generateGuestCookieValues().then((res) => {
                    setCookie("_guest", res, 3);
                    fetch(`${serverUrl}/add-gust`, {
                        method: "post",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            cookie: res,
                        }),
                    });
                });
            }
            if (getCookie("_guest")) {
                let ownerCookie = getCookie("_guest");
                fetch(`${serverUrl}/get-guest-cart-number`, {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        cookie: ownerCookie,
                    }),
                })
                    .then((respond) => respond.json())
                    .then((data) => {
                        this.setState({
                            guest: { id: ownerCookie },
                        });
                        this.setState({ cartNumber: data });
                        this.setState({user: {id:ownerCookie, login: false, cartNumber:data}})
                    });
            }
        }
    }

    render() {
        return (
            <div className="App">
                <Navbar
                    onUserIconClick={this.onUserIconClick}
                    onUserShoppingBagClick={this.onUserShoppingBagClick}
                    cartNumber={this.state.user.cartNumber}
                />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/new" component={New} />
                        <Route path="/kids/footwear" component={KidsFootwear} />
                        <Route path="/kids/apparel" component={KidsApparel} />
                        <Route path="/men/footwear" component={MenFootwear} />
                        <Route path="/men/apparel" component={MenApparel} />
                        <Route
                            path="/men/accessories"
                            component={MenAccessories}
                        />
                        <Route
                            path="/women/footwear"
                            component={WomenFootwear}
                        />
                        <Route path="/women/apparel" component={WomenApparel} />
                        <Route
                            path="/women/accessories"
                            component={WomenAccessories}
                        />
                        <Route path="/sale/men" component={MenSale} />
                        <Route path="/sale/women" component={WomenSale} />
                        <Route path="/sale/kids" component={KidsSale} />
                        <Route
                            path="/signup"
                            component={() => (
                                <BackgroundAccount
                                    h5Txt={"Register Page!"}
                                    h1Txt={"Join Us!"}
                                    route={"register"}
                                />
                            )}
                        />
                        <Route
                            path="/login"
                            component={() => (
                                <BackgroundAccount
                                    h5Txt={"Login Page!"}
                                    h1Txt={"We Miss You!"}
                                    route={"login"}
                                    loginSubmit={this.onLoginSubmit}
                                />
                            )}
                        />
                        <Route path="/account" component={()=> <Account user={this.state.user} />} />
                        <Route
                            path="/cart"
                            component={() => <Cart user={this.state.user} />}
                        />
                        <Route
                            path="/productdetails"
                            component={() => (
                                <ProductDetails
                                    user={this.state.user}
                                    cartNumber={this.state.user.cartNumber}
                                />
                            )}
                        />
                        <Route
                            path="/checkout-fail"
                            component={() => (
                                <CheckoutFail/>
                            )}
                        />
                        <Route
                            path="/checkout"
                            component={() => (
                                <Checkout user={this.state.user} />
                            )}
                        />
                        <Route path="/orders" component={() => <Orders />} />

                        <Route
                            path="/services/contact-us"
                            component={() => <ContactUs />}
                        />
                        <Route
                            path="/services/order-status"
                            component={() => <OrderStatus />}
                        />
                        <Route
                            path="/pages/mens-sitemap"
                            component={() => <MensSiteMap />}
                        />
                        <Route
                            path="/pages/kids-sitemap"
                            component={() => <KidsSiteMap />}
                        />
                        <Route
                            path="/pages/sale-sitemap"
                            component={() => <SaleSiteMap />}
                        />
                        <Route
                            path="/pages/women-sitemap"
                            component={() => <WomenSiteMap />}
                        />
                        <Route
                            path="/pages/about-us"
                            component={() => <AboutUs />}
                        />
                        <Route
                            path="/pages/privacy-statement"
                            component={() => <Privacy />}
                        />
                        <Route
                            path="/pages/terms-of-use"
                            component={() => <TermOfUse />}
                        />

                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;
