import { Animated } from "react-animated-css";
import { BrowserView, MobileView } from "react-device-detect";
import Login from "../../Account/Login/Login";
import Signup from "../../Account/Signup/Signup";
function BackgroundAccount({ route, h5Txt, h1Txt, loginSubmit }) {
    return (
        <div className="background-account">
            <div className="item">
                {route === "login" ? (
                    <div>
                        <BrowserView>
                            <Animated
                                animationIn="fadeInLeft"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <div className="background_text"></div>
                                <h5>{h5Txt}</h5>
                                <h1>{h1Txt}</h1>
                                <br></br>
                            </Animated>
                        </BrowserView>
                        <MobileView>
                            <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <br></br>
                                <h5>{h5Txt}</h5>
                                <h1>{h1Txt}</h1>
                                <br></br>
                            </Animated>
                        </MobileView>
                    </div>
                ) : (
                    <div>
                        <BrowserView>
                            <Animated
                                animationIn="fadeInRight"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <Signup />
                            </Animated>
                        </BrowserView>
                        <MobileView>
                            <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <Signup />
                            </Animated>
                        </MobileView>
                    </div>
                )}
            </div>
            {/* Background left sided */}
            <div className="item">
                {route === "login" ? (
                    <div>
                        <BrowserView>
                            <Animated
                                animationIn="fadeInRight"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <Login loginSubmit={loginSubmit} />
                            </Animated>
                        </BrowserView>
                        <MobileView>
                            <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <Login loginSubmit={loginSubmit} />
                            </Animated>
                        </MobileView>
                    </div>
                ) : (
                    <div>
                        <BrowserView>
                            <Animated
                                animationIn="fadeInLeft"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <div className="background_text"></div>
                                <h5>{h5Txt}</h5>
                                <h1>{h1Txt}</h1>
                                <br></br>
                            </Animated>
                        </BrowserView>
                        <MobileView>
                            <Animated
                                animationIn="fadeIn"
                                animationOut="fadeOut"
                                animationInDuration={1000}
                                animationOutDuration={1000}
                                isVisible={true}
                            >
                                <div className="background_text"></div>
                                <h5>{h5Txt}</h5>
                                <h1>{h1Txt}</h1>
                                <br></br>
                            </Animated>
                        </MobileView>
                    </div>
                )}
            </div>
        </div>
    );
}
export default BackgroundAccount;
