import React from "react";
import { Animated } from "react-animated-css";
import { Button } from "react-bootstrap";
import { serverUrl } from "../../../../constants/Global";
export default class AccountDeatils extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {},
        };
    }

    async componentDidMount() {
        const response = await fetch(`${serverUrl}/get-user-detail`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: this.props.userId,
            }),
        });
        const data = await response.json();
        Object.keys(data[0]).map((x, i) => {
            let elem = document.getElementById(x);
            elem.value = data[0][x];
        });
        this.setState({ data: data });
    }

    onSaveClick = () => {
        let inputs = document.querySelectorAll(".account-detail-form input");
        let inputData = {};
        for (let i = 0; i < inputs.length; i++) {
            inputData[inputs[i].id] = inputs[i].value;
        }
        fetch(`${serverUrl}/update-user-detail`, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                inputData: inputData,
                userId:this.props.userId
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data) {
                    window.location = "./account"
                }
            });
    };

    render() {
        return (
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={1000}
                animationOutDuration={1000}
                isVisible={true}
            >
                <div className="account-detail-form">
                    <div className="measure pa2 black-80 w-30 dib">
                        <label
                            className="db fw6 lh-copy f6 white "
                            htmlFor="first-name"
                        >
                            First Name
                        </label>
                        <input
                            id="first"
                            className="ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                        />
                    </div>
                    <div className="measure pa2 black-80 w-30 dib">
                        <label
                            className="db fw6 lh-copy f6 white "
                            htmlFor="last-name"
                        >
                            Last Name
                        </label>
                        <input
                            id="last"
                            className="ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                        />
                    </div>
                    <div className="pa2 black-80 w-60 center">
                        <label
                            className="db fw6 lh-copy f6 white "
                            htmlFor="address"
                        >
                            Phone
                        </label>
                        <input
                            id="phone"
                            className=" ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                        />
                    </div>
                    <div className="pa2 black-80 w-60 center">
                        <label
                            className="db fw6 lh-copy f6 white "
                            htmlFor="address"
                        >
                            Address
                        </label>
                        <input
                            id="address1"
                            className=" ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                        />
                    </div>
                    <div className="pa2 black-80 w-60 center">
                        <label
                            className="db fw6 lh-copy f6 white "
                            htmlFor="address"
                        >
                            Address Line 2
                        </label>
                        <input
                            id="address2"
                            className=" ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                        />
                    </div>
                    <div className="measure pa2  black-80 w-20 dib">
                        <label
                            className="db fw6 lh-copy f6 white"
                            htmlFor="city"
                        >
                            City
                        </label>
                        <input
                            id="city"
                            className=" ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                        />
                    </div>
                    <div className="measure pa2  black-80 w-20 dib">
                        <label
                            className="db fw6 lh-copy f6 white  "
                            htmlFor="state"
                        >
                            State
                        </label>
                        <input
                            id="state"
                            className=" ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                            placeholder="XX"
                            maxLength="2"
                        />
                    </div>
                    <div className="measure pa2 black-80 w-20 dib">
                        <label
                            className="db fw6 lh-copy f6 white  "
                            htmlFor="zipcode"
                        >
                            ZipCode
                        </label>
                        <input
                            id="zip"
                            className=" ba b--black-20 pa2 mb2 db w-100"
                            type="text"
                            aria-describedby="name-desc"
                            placeholder="XXXXX"
                            maxLength="5"
                        />
                    </div>
                    <br />
                    <br />
                    <div className="measure pa2 black-80 w-20 center">
                        <Button
                            variant="dark"
                            className="shop shadow-3 w-100 grow"
                            onClick={() => this.onSaveClick()}
                        >
                            Save
                        </Button>
                    </div>
                </div>
            </Animated>
        );
    }
}
