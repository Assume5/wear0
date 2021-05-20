import './Cart.css'
import {Button} from 'react-bootstrap';
import CartItem from './CartItem'
import React from 'react'
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
                productimage:"./TestingImage/brown.jpg",
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
            this.setState({totalItem:Object.keys(products).length})
            this.setState({loaded:true})
            let sumPrice=0;
            Object.keys(products).map((product,i)=>{
               return sumPrice=sumPrice+products[product].total*products[product].quantity
            })
            this.setState({totalPrice:sumPrice})
        }
    }
      
    onRemoveClick=(id)=>{
        delete this.state.testing[id]
        this.setState({totalItem:this.state.totalItem-1})
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
                            />
                            )
                        })
                    }
                    <div className="CartContent center">
                        <hr></hr>
                        <div className="CartRecap">
                            <p>Total: ${this.state.totalPrice}</p>
                            <Button size="md" variant="dark" className="shadow-5 grow br3">Checkout</Button>
                        </div>
                    </div>
                </div>)
                : //if no items
                            (     
                            <div className="CartContainer ">
                                <div className="Header f5">
                                    <p>YOUR CART IS EMPTY</p>
                                </div>
                            </div>
                            )
                )
        

                
    }
   
}
export default Cart