import './App.css';
import 'tachyons';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import New from './components/New/New'
import KidsAccessories from './components/Kid/Accessories/KidsAccessories'
import KidsApparel from './components/Kid/Apparel/KidsApparel'
import KidsFootwear from './components/Kid/Footwear/KidsFootWear'
import MenAccessories from './components/Men/Accessories/MenAccessories'
import MenApparel from './components/Men/Apparel/MenApparel'
import MenFootwear from './components/Men/Footwear/MenFootwear'
import WomenAccessories from './components/Women/Accessories/WomenAccessories'
import WomenApparel from './components/Women/Apparel/WomenApparel'
import WomenFootwear from './components/Women/Footwear/WomenFootwear'
import KidsSale from './components/Sale/Kids/KidsSale'
import MenSale from './components/Sale/Mens/MenSale'
import WomenSale from './components/Sale/Women/WomenSale'
import Profile from './components/Account/Profile/Profile'
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import BackgroundAccount from './components/Account/BackgroundAccount/BackgroundAccount'
import Cart from './components/Cart/Cart'
class App extends React.Component {
  constructor(){
    super()
    this.state={
      user:{
        name:'',
        id:'',
        login:false
      }
    }
  }

  onUserIconClick=()=>{
    if(this.state.user.login===false){
      if(document.URL.includes("/men/") || document.URL.includes("/women/") || document.URL.includes("/kids/") || document.URL.includes("/sale/") ) {
        window.location='../login'
      }
      else{
        window.location='./login'
      }
    }
    else{
      if(document.URL.includes("/men/") || document.URL.includes("/women/") || document.URL.includes("/kids/") || document.URL.includes("/sale/") ) {
        window.location='../profile'
      }
      else{
        window.location='./profile'
      }
    }
  }
  onUserShoppingBagClick=()=>{
    if(document.URL.includes("/men/") || document.URL.includes("/women/") || document.URL.includes("/kids/") || document.URL.includes("/sale/") ) {
      window.location='../cart'
    }
    else{
      window.location='./cart'
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar onUserIconClick={this.onUserIconClick} onUserShoppingBagClick={this.onUserShoppingBagClick}/>
        <BrowserRouter>
          <Switch>                
                 <Route exact path='/' component={Home}/>  
                 <Route path='/new' component={New}/>               
                 <Route path='/kids/footwear' component={KidsFootwear}/> 
                 <Route path='/kids/apparel' component={KidsApparel}/>  
                 <Route path='/kids/accessories' component={KidsAccessories}/>            
                 <Route path='/men/footwear' component={MenFootwear}/> 
                 <Route path='/men/apparel' component={MenApparel}/>  
                 <Route path='/men/accessories' component={MenAccessories}/>       
                 <Route path='/women/footwear' component={WomenFootwear}/> 
                 <Route path='/women/apparel' component={WomenApparel}/>  
                 <Route path='/women/accessories' component={WomenAccessories}/>       
                 <Route path='/sale/men' component={MenSale}/> 
                 <Route path='/sale/women' component={WomenSale}/>  
                 <Route path='/sale/kids' component={KidsSale}/>       
                 <Route path='/signup' component={()=><BackgroundAccount h5Txt={'Register Page!'} h1Txt={'Join Us!'} route={'register'}  />}/>
                 <Route path='/login' component={()=><BackgroundAccount h5Txt={'Login Page!'} h1Txt={'We Miss You!'} route={'login'}  />}/>
                 <Route path='/profile' component={Profile}/>
                 <Route path='/cart' component={()=><Cart/>}/>
                 
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
