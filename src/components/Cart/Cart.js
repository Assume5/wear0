import './Cart.css'
import {Button} from 'react-bootstrap';
import CartItem from './CartItem'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            testing:{},
            totalItem:0,
            loaded:false,
            totalPrice:0
        }
    }
    componentDidMount() {
        //if i fetch information form server
        const products={
            "1-45":{
                productimage:"./TestingImage/brown.png",
                productname:"Kaws Brown",
                quantity:1,
                total:100
            },
            "1-47":{
                productimage:"./TestingImage/black.png",
                productname:"Kaws Black",
                quantity:2,
                total:110
            }
        }
        if(Object.keys(products).length){
            this.setState({
                testing:products
            })
            let sumPrice=0;
            let sumTotalItem=0;
            Object.keys(products).map((product,i)=>{
                sumPrice=sumPrice+products[product].total*products[product].quantity
                return sumTotalItem+=products[product].quantity
            })
            this.setState({totalItem:sumTotalItem})
            this.setState({loaded:true})
            this.setState({totalPrice:sumPrice})
        }
    }
      
    onRemoveClick=(id)=>{
        const quantityRemove=this.state.testing[id].quantity
        delete this.state.testing[id]
        this.setState({totalItem:this.state.totalItem-quantityRemove})
    }
    onIncreaseClick=(id)=>{
        const testingId=this.state.testing[id]
        if(testingId.quantity<9){
            this.state.testing[id].quantity+=1;
            this.setState({totalItem:this.state.totalItem+1})
            this.setState({totalPrice:this.state.totalPrice+testingId.total})
        }
    }
    onDecreaseClick=(id)=>{
        const testingId=this.state.testing[id]
        if(testingId.quantity>0){
            this.state.testing[id].quantity-=1;
            this.setState({totalItem:this.state.totalItem-1})
            this.setState({totalPrice:this.state.totalPrice-testingId.total})
            if(this.state.testing[id].quantity===0){
                delete this.state.testing[id]
            }
        }
    }
    onProductImageClick=(id)=>{
        window.location="./productdetails/"+id
    }

    onCheckoutClick=()=>{
        if(this.props.user.login){ //if user didnt login
            //redirect to checkout page
        }
        else{
            //redirect to login page
            window.location="./login"
        }
    }

    render(){
        const {testing} = this.state
        return !this.state.loaded //if not loaded yet
            ?
            <h1 style={{marginTop:"10%"}}>Loading</h1>
            :
            (   
                this.state.loaded && this.state.totalItem>0? //if has items in their bag
                (<div className="CartContainer">
                    <div className="Header">
                        <h1>CART</h1>
                    </div>
                    <div className="CartContent center">
                        <div className="CartItemHeading f6">
                                <p>PRODUCT</p>
                            </div>
                            <div className="CartItemHeading f6">
                                <p>QUANTITY</p>
                            </div>
                            <div className="CartItemHeading f6">
                                <p>PRICE</p>
                        </div>
                        <hr style={{marginTop:"-30px"}}></hr>
                    </div>
                    {

                        Object.keys(testing).map((product,i)=>{
                            return(
                                <CartItem
                                productid={product}
                                productimage={testing[product].productimage}
                                productname={testing[product].productname}
                                quantity={testing[product].quantity}
                                total={testing[product].total}
                                onRemoveClick={this.onRemoveClick}
                                onIncreaseClick={this.onIncreaseClick}
                                onDecreaseClick={this.onDecreaseClick}
                                onProductImageClick={this.onProductImageClick}
                            />
                            )
                        })
                    }
                    <div className="CartContent center">
                        <hr></hr>
                        <div className="CartRecap">
                            <p>Total: ${this.state.totalPrice}</p>
                            <Button size="md" variant="dark" className="shadow-5 grow br3" onClick={this.onCheckoutClick}>Checkout</Button>
                        </div>
                    </div>
                </div>)
                : //if no items
                            (     
                            <div className="" style={{marginTop:"20%"}}>
                                <div className="Header f5">
                                    <p>YOUR CART IS EMPTY</p>
                                    <Button variant="dark" className="shop mx-2" href="./"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop our product</Button>
                                </div>
                            </div>
                            )
                )
        

                
    }
   
}
export default Cart