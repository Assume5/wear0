import {Button,Collapse} from 'react-bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function CheckoutCartCollapse(){
    const [open, setOpen] = React.useState(false);
    return(
        <div className="CheckoutColapse">
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                <FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/> Order Summary
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>  
        </div>
    )
}
export default CheckoutCartCollapse