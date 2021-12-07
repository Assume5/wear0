import React from "react";
import { serverUrl } from "../../../constants/Global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { getCookie } from "../../../constants/GlobalFunction";

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            registerName: "",
            registerEmail: "",
            registerPassword: "",
            failMessage: "",
            nameErrorMessage: "",
            emailErrorMessage: "",
            passwordErrorMessage: "",
            buttonSubmit: false,
        };
    }

    onNameChange = (event) => {
        this.setState({ registerName: event.target.value });
    };
    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value });
    };
    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value });
    };
    onEnterPress = (event) => {
        if (event.key === "Enter") {
            this.onRegisterButton();
        }
    }
    onRegisterButton = () => {
        let allInput = true;
        this.setState({ nameErrorMessage: "" });
        this.setState({ emailErrorMessage: "" });
        this.setState({ passwordErrorMessage: "" });
        this.setState({ buttonSubmit: true });

        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(this.state.registerEmail).toLowerCase())) {
            allInput = false;
            this.setState({ emailErrorMessage: "Invalid email" });
        }
        if (this.state.registerPassword.length < 8) {
            allInput = false;
            this.setState({
                passwordErrorMessage: "Password need to be at least 8 digits",
            });
        }
        if (this.state.registerName.length < 1) {
            allInput = false;
            this.setState({ nameErrorMessage: "Please enter your name" });
        }
        if (!allInput) {
            this.setState({ buttonSubmit: false });
        }
        if (allInput) {
            fetch(`${serverUrl}/register`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: this.state.registerEmail,
                    password: this.state.registerPassword,
                    name: this.state.registerName,
                }),
            })
                .then((response) => response.json())
                .then((respond) => {
                    console.log(respond);
                    if (respond === true) {
                        window.location = "./login";
                    } else {
                        this.setState({ emailErrorMessage: respond});
                        this.setState({ buttonSubmit: false });
                    }
                });
        }

        // this.props.onRouteChange("register");
    };
    onLoginClick = () => {
        window.location = "./login";
    };

    componentDidMount() {
        let rem = getCookie("_rem");
        let id = getCookie("_id");
        if (rem && id) {
            window.location = "./account";
        }
    }

    render() {
        console.log(`${serverUrl}/register`);
        return (
            <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset
                            id="sign_up"
                            className="ba b--transparent ph0 mh0"
                        >
                            <legend className="f1 fw6 ph0 mh0 white">
                                Register
                            </legend>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6 white"
                                    htmlFor="email-address"
                                >
                                    Name*
                                </label>
                                <input
                                    className={`pa2 input-reset ba bg-transparent hover-bg-black white w-100 ${
                                        this.state.nameErrorMessage.length > 0
                                            ? "input-fail"
                                            : ""
                                    }`}
                                    type="text"
                                    name="name"
                                    onChange={this.onNameChange}
                                    onKeyDown={this.onEnterPress}
                                />
                                <p className="error-message">
                                    {this.state.nameErrorMessage}
                                </p>
                            </div>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6 white"
                                    htmlFor="email-address"
                                >
                                    Email*
                                </label>
                                <input
                                    className={`pa2 input-reset ba bg-transparent hover-bg-black white w-100 ${
                                        this.state.emailErrorMessage.length > 0
                                            ? "input-fail"
                                            : ""
                                    }`}
                                    type="email"
                                    name="email-address"
                                    onChange={this.onEmailChange}
                                    onKeyDown={this.onEnterPress}
                                />
                                <p className="error-message">
                                    {this.state.emailErrorMessage}
                                </p>
                            </div>
                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6 white"
                                    htmlFor="password"
                                >
                                    Password*
                                </label>
                                <input
                                    className={`pa2 input-reset ba bg-transparent hover-bg-black white w-100 ${
                                        this.state.passwordErrorMessage.length >
                                        0
                                            ? "input-fail"
                                            : ""
                                    }`}
                                    type="password"
                                    name="password"
                                    id="registerPassword"
                                    onChange={this.onPasswordChange}
                                    onKeyDown={this.onEnterPress}
                                />
                                <p className="error-message">
                                    {this.state.passwordErrorMessage}
                                </p>
                            </div>
                        </fieldset>
                        <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white">
                            <input
                                className="bg-transparent pointer white border-0"
                                type="submit"
                                value="Register"
                                onClick={this.onRegisterButton}
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
                                className="f6 link dim black db pointer white"
                                onClick={this.onLoginClick}
                            >
                                Sign In
                            </p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}
export default Signup;
