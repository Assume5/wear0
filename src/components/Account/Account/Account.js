import React from 'react'
import AccountDeatils from './AccoutDeatils/AccountDeatils'
import PastOrders from './PastOrders/PastOrders'
import { removeCookie } from '../../../constants/GlobalFunction'
class Account extends React.Component{
    constructor() {
        super()
        this.state = {
            position : 'main'
        }
    }
    DeatilClick = () => {
        this.setState({position: 'Details'})
    }

    OrdersClick = () => {
        this.setState({position: 'Orders'})
    }

    SignOutClick = () => {
        window.location = "/"
        removeCookie("_rem","")
        removeCookie("_id","")
    }


    render() {
        return(
            <div className="account background">
                <div className="container">
                    <h1 className="f4">Welcome back Chenyi</h1>
                    <p className="f6 link dim black db pointer white dib" onClick={this.DeatilClick} >
                        Account Detail
                    </p>
                    <p className="f6 link dim black db pointer white dib" onClick={this.OrdersClick} >
                        Orders
                    </p>
                    <p className="f6 link dim black db pointer white dib" onClick={this.SignOutClick}>
                        Sign Out
                    </p>
                    
                    {
                        this.state.position === 'Details' ?
                        <AccountDeatils/>
                        :
                        <PastOrders/>
                    }
                </div>

            </div>
        )
    }
}
export default Account