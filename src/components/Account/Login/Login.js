import React from "react";
import { serverUrl } from "../../../constants/Global";
import {
    setCookie,
    getCookie,
    removeCookie,
} from "../../../constants/GlobalFunction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            SigninEmail: "",
            SigninPassword: "",
            errorMessage: "",
            rememberMe: false,
            buttonSubmit: false,
        };
    }

    onEmailChange = (event) => {
        this.setState({ SigninEmail: event.target.value });
    };
    onPasswordChange = (event) => {
        this.setState({ SigninPassword: event.target.value });
    };
    onRegisterClick = () => {
        window.location = "./signup";
    };
    onRememberMe = () => {
        this.setState({ rememberMe: !this.state.rememberMe });
    };
    onEnterPress = (event) => {
        if (event.key === "Enter") {
            this.onSubmitSignIn();
        }
    };
    onSubmitSignIn = () => {
        let allInput = true;
        this.setState({ errorMessage: "" });
        this.setState({ waitingMessage: "Please Wait" });
        this.setState({ buttonSubmit: true });
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.state.SigninEmail).toLowerCase())) {
            allInput = false;
        }
        if (this.state.SigninPassword.length < 8) {
            allInput = false;
        }
        if (!allInput) {
            this.setState({ errorMessage: "Email or Password incorrect" });
            this.setState({ waitingMessage: "" });
            this.setState({ buttonSubmit: false });
        }

        if (allInput) {
            fetch(`${serverUrl}/login`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: this.state.SigninEmail,
                    password: this.state.SigninPassword,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ waitingMessage: "" });
                    if (data.success === true) {
                        if (this.state.rememberMe) {
                            setCookie("_rem", "true", 7);
                            setCookie("_id", data.id, 7);
                        } else {
                            setCookie("_rem", "true", 1);
                            setCookie("_id", data.id, 1);
                        }
                        if (getCookie("_guest")) {
                            // removeCookie("_guest");
                            fetch(`${serverUrl}/transfer-cart`, {
                                method: "post",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    guestCookie: getCookie("_guest"),
                                    userId: data.id,
                                }),
                            })
                                .then((response) => response.json())
                                .then((res) => {
                                    if (res === "true") {
                                        removeCookie("_guest");
                                        window.location = "./account"
                                    }
                                });
                        }

                    } else {
                        this.setState({ errorMessage: data });
                        this.setState({ buttonSubmit: false });
                    }
                });
        }
    };
    componentDidMount() {
        let rem = getCookie("_rem");
        let id = getCookie("_id");
        if (rem && id) {
            window.location = "./account";
        }
    }
    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center black">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset
                            id="sign_up"
                            className="ba b--transparent ph0 mh0"
                        >
                            <legend className="f1 fw6 ph0 mh0 black">
                                Sign In
                            </legend>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6 black"
                                    htmlFor="email-address"
                                >
                                    Email
                                </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent black w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                    onKeyDown={this.onEnterPress}
                                />
                            </div>
                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6 black"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black black w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                    onKeyDown={this.onEnterPress}
                                />
                            </div>
                            <p className="error-message">
                                {this.state.errorMessage}
                            </p>
                            <label className="pa0 ma0 lh-copy f6 pointer black">
                                <input
                                    type="checkbox"
                                    onClick={this.onRememberMe}
                                />{" "}
                                Remember me for 7 days
                            </label>
                        </fieldset>
                        <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib black">
                            <input
                                className="bg-transparent pointer black border-0"
                                type="submit"
                                value="Sign in"
                                onClick={this.onSubmitSignIn}
                                onKeyDown={this.onEnterPress}
                            />
                            <FontAwesomeIcon
                                className={`FontAwesomeIcon ${
                                    this.state.buttonSubmit
                                        ? "fa-spin"
                                        : "d-none"
                                }`}
                                icon={faCircleNotch}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p
                                className="f6 link dim black db pointer black"
                                onClick={this.onRegisterClick}
                            >
                                Register
                            </p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}
export default Login;
