import React from "react";
import { serverUrl } from "../../../constants/Global";
import { setCookie } from "../../../constants/GlobalFunction";
class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            SigninEmail: "",
            SigninPassword: "",
            errorMessage: "",
            rememberMe: false,
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
    onSubmitSignIn = () => {
        let allInput = true;
        this.setState({ errorMessage: "" });
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
                    if (data.success === true) {
                        this.props.loginSubmit(data.fullname, data.id);
                        if (this.state.rememberMe) {
                            setCookie("rem", "true", 7);
                        } else {
                            setCookie("rem", "true", 1);
                        }
                        // window.location = "./account";
                    } else {
                        this.setState({ errorMessage: data });
                    }
                });
        }
    };
    render() {
        return (
            <article className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center black">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset
                            id="sign_up"
                            className="ba b--transparent ph0 mh0"
                        >
                            <legend className="f1 fw6 ph0 mh0 white">
                                Sign In
                            </legend>
                            <div className="mt3">
                                <label
                                    className="db fw6 lh-copy f6 white"
                                    htmlFor="email-address"
                                >
                                    Email
                                </label>
                                <input
                                    className="pa2 input-reset ba bg-transparent white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mv3">
                                <label
                                    className="db fw6 lh-copy f6 white"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.onPasswordChange}
                                />
                            </div>
                            <p className="error-message">
                                {this.state.errorMessage}
                            </p>
                            <label className="pa0 ma0 lh-copy f6 pointer white">
                                <input
                                    type="checkbox"
                                    onClick={this.onRememberMe}
                                />{" "}
                                Remember me for 7 days
                            </label>
                        </fieldset>
                        <div className="">
                            <input
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
                                type="submit"
                                value="Sign in"
                                onClick={this.onSubmitSignIn}
                            />
                        </div>
                        <div className="lh-copy mt3">
                            <p
                                className="f6 link dim black db pointer white"
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
