import React from 'react'
import './Orders.scss'
import Informations from './Informations/Informations'
import OrdersCart from './Carts/OrdersCart'
import logo_icon from '../Navbar/logo.png'
import {BrowserView, MobileView} from 'react-device-detect';
class Orders extends React.Component{
    constructor(){
        super() 
        this.state={
            products:{},
            information:{},
            loaded:false,
            subtotal:0
        }
    }

    componentDidMount(){
        //getting cart from db
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

        //getting information from db

        const information = {
            ordernumber : "1",
            status : "Delivered",
            tracking : "",
            email : "test@gmail.com",
            card : "1111", 
            shipping : {
                first_name : "Chenyi",
                last_name : "Zou",
                address : "Chestnut Ridge RD",
                address_line_2 : "Apt6",
                city : "Buffalo",
                state : "NY",
                Zipcode : "14221",
                Phone : "1231231234"
            },
            billing : {
                first_name : "Chenyi",
                last_name : "Zou",
                address : "Chestnut Ridge RD",
                address_line_2 : "Apt6",
                city : "Buffalo",
                state : "NY",
                Zipcode : "14221",
                Phone : "1231231234"
            }
        }

        if(Object.keys(products).length && Object.keys(information).length){
            this.setState({products:products})
            this.setState({information:information})
            this.setState({loaded:true})
            let subtotal=0
            for(let i in products){
                subtotal+=(products[i].total*products[i].quantity)
            }
            this.setState({subtotal:subtotal})
        }
    }
    render(){
        if(!this.state.loaded){
            return(
                <div>
                    Loading .....
                </div>
            )
        }
        else{
            return(
                <div>
                    <MobileView>
                        <img src = {logo_icon} alt="" className="logo" style={{marginTop:'5%'}}/>
                    </MobileView>
                    <div className="order-status">
                        <Informations information={this.state.information}/>
                        <OrdersCart products={this.state.products} subtotal={this.state.subtotal}/>
                    </div>
                </div>
    
            )
        }

    }

}   
export default Orders