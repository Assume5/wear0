import React from 'react'
import Informations from './Informations/Informations'
import OrdersCart from './Carts/OrdersCart'
import logo_icon from '../Navbar/logo.png'
import {MobileView} from 'react-device-detect';
import { serverUrl } from '../../constants/Global';

class Orders extends React.Component{
    constructor(){
        super() 
        this.state={
            products:{},
            information:{},
            loaded:false,
            subtotal:0,
            cardNumber: ""
        }
    }

    async componentDidMount(){
        //getting cart from db
        const currenturl = document.URL;
        const orderNumber = currenturl.substring(currenturl.lastIndexOf("/") + 1);
        console.log(orderNumber)
        const response = await fetch(`${serverUrl}/orders/${orderNumber}`)
        const data = await response.json()
        console.log(data)
        const responseCard = await fetch(`${serverUrl}/get-last-four/${orderNumber}`)
        const cardNumber = await responseCard.json()
        console.log(cardNumber)
        const responseProducts = await fetch(`${serverUrl}/order-details/${orderNumber}`)
        const productDetails = await responseProducts.json()
        console.log(productDetails)
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
            this.setState({products:productDetails})
            this.setState({information:data})
            this.setState({cardNumber:cardNumber})
            this.setState({loaded:true})
            this.setState({subtotal:data[0]["totalPrice"]})
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
                        <img src = {logo_icon} alt="" className="logo pointer" style={{marginTop:'5%'}} onClick={event =>  window.location.href='/'}/>
                    </MobileView>
                    <div className="order-status">
                        <Informations information={this.state.information} card = {this.state.cardNumber}/>
                        <OrdersCart products={this.state.products} subtotal={this.state.subtotal}/>
                    </div>
                </div>
    
            )
        }

    }

}   
export default Orders