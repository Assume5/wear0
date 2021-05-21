import React from 'react'
import './Content.css'
import {Animated} from "react-animated-css";
import {BrowserView, MobileView} from 'react-device-detect';
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
class Content extends React.Component{
    constructor(props){
        super(props)
        this.state={
            img:props.productimage,
            hover:false
        }
    }
    mouseOver = () => {
        this.setState({img: this.props.productimageHover});
      }
    mouseOut = () => {
        this.setState({img: this.props.productimage});
    }
    render(){
        const {productid,productname,productprice,productimage,productalt,productstock, isPosition,animationDelay,onProductCardClick} = this.props
        return(
            <div className="item_content" >
                        <BrowserView>
                            <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={850} animationOutDuration={0} animationInDelay={animationDelay} isVisible={isPosition}>
                                <div className="home_card shadow-5 br3 grow">
                                    <div className="container" onClick={()=>onProductCardClick(productid)}>
                                    <img src={this.state.img} alt={productalt} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                                        <h5>{productname}</h5>  
                                        <p>{productprice}</p> 
                                    </div>
                                    {
                                        productstock>0?
                                        <Button variant="dark" className="m-4 br4 shadow-3" width="10px"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/> Add To Cart</Button>
                                        :
                                        <Button variant="dark" className="m-4 br4 shadow-3" width="10px" style={{cursor:"no-drop"}}>OUT OF STOCK</Button>
                                    }
                                </div>
                            </Animated>
                        </BrowserView>
                        <MobileView>
                            <Animated animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={2000} animationOutDuration={0} animationInDelay={animationDelay} isVisible={isPosition}>
                                <div className="home_card shadow-5 br3 grow">
                                    <div className="container" onClick={()=>onProductCardClick(productid)}>
                                        <img src={productimage} alt={productalt}/>
                                        <h5>{productname}</h5>  
                                        <p>{productprice}</p> 
                                    </div>
                                    {
                                        productstock>0?
                                        <Button variant="dark" className="m-4 br4 shadow-3" width="10px"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/> Cart</Button>
                                        :
                                        <Button variant="dark" className="m-4 br4 shadow-3" width="10px" style={{cursor:"no-drop"}}>OUT OF STOCK</Button>
                                    }
                                </div>
                            </Animated>
                        </MobileView>
            </div>
        )
    }
}
export default Content















// function HomeContent({productname,productprice,productimage,productalt}){
//     return(
//         <div className="homeContent">
//                 <div className="item_content">
//                     <div className="home_card shadow-5 br3 grow">
//                         <img src={brown} alt={"kaws"}/>
//                         <div className="container">
//                             <h5>KAWS:HOLIDAY(BROWN)</h5>  
//                             <p>$225</p> 
//                         </div>
//                     </div>
//                 </div>
//                 <div className="item_content">
//                     <div className="home_card shadow-5 br3 grow">
//                         <img src={grey} alt="kaws"/>
//                         <div className="container">
//                             <h5>KAWS:HOLIDAY(BROWN)</h5>  
//                             <p>$225</p> 
//                         </div>
//                     </div>
//                 </div>
//                 <div className="item_content">
//                     <div className="home_card shadow-5 br3 grow">
//                         <img src={brown} alt="kaws"/>
//                         <div className="container">
//                             <h5>KAWS:HOLIDAY(BROWN)</h5>  
//                             <p>$225</p> 
//                         </div>
//                     </div>
//                 </div>
//                 <div className="item_content">
//                     <div className="home_card shadow-5 br3 grow">
//                         <img src={brown} alt="kaws"/>
//                         <div className="container">
//                             <h5>KAWS:HOLIDAY(BROWN)</h5>  
//                             <p>$225</p> 
//                         </div>
//                     </div>
//                 </div>
//         </div>
//     )
// }