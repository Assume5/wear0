import {Button} from 'react-bootstrap';
export default function NotFound(){
    return(
        <div className="not-found">
            <div>
                <h5 className="f4">
                    Page Not Found 
                </h5>
                <p className="f6">The page you requested does not exist. Click below to continue shopping.</p>
                <Button size="md" variant="dark" className="shadow-5 grow br3 w-50" href="/">Continue Shopping</Button>
            </div>
        </div>
    )
}