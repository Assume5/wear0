import { Button } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { useState } from "react";
import { serverUrl } from "../../../constants/Global";
export default function OrderStatus() {
    const [error, setError] = useState("");
    const onSubmitClick = () => {
        const email = document.getElementById("order-email").value;
        const orderId = document.getElementById("order-number").value;
        fetch(`${serverUrl}/check-order-exist`,{
          method:"POST",
          headers: { "Content-Type": "application/json" },
          body:JSON.stringify({
            email:email,
            orderId:orderId
          })
        }).then((response)=>response.json()).then((res)=>{
          if(res === "success") {
            window.location = `/orders/${orderId}`
          }
          else{
            setError(res)
          }
        })
    };

    return (
        <div className="services">
            <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInDuration={1500}
                animationOutDuration={1000}
                isVisible={true}
            >
                <h5 className="f3">Order Status</h5>
                <div className="mt3 black-025 dib ma3">
                    <label
                        className="db fw6 lh-copy f6 white"
                        htmlFor="email-address"
                    >
                        Order Number
                    </label>
                    <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100 white"
                        type="text"
                        id="order-number"
                    />
                </div>
                <div className="mt3 black-025 dib ma3">
                    <label className="db fw6 lh-copy f6 white" htmlFor="name">
                        Email Address
                    </label>
                    <input
                        className="pa2 input-reset ba bg-transparent hover-bg-white hover-white w-100 white"
                        type="email"
                        id="order-email"
                    />
                </div>
                <br />
                <p className="red f7">{error}</p>
                <Button
                    size="md"
                    variant="dark"
                    className="shadow-5 grow br3 w-30"
                    onClick={() => onSubmitClick()}
                >
                    Submit
                </Button>
            </Animated>
        </div>
    );
}
