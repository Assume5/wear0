import './Background.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {BrowserView, MobileView} from 'react-device-detect';
import Login from '../Account/Login/Login'
function Background({backGroundImgLink,route,h5Txt,h1Txt}){
    return(
        <div className="background">
            <div className="item">
                <BrowserView>
                    <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                        <div className="background_text">
                            <h5>{h5Txt}</h5>
                            <h1>{h1Txt}</h1><br></br>
                        </div>
                    </Animated>
                </BrowserView>
                <MobileView>
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                        <div className="background_text">
                            <h5>{h5Txt}</h5>
                            <h1>{h1Txt}</h1><br></br>
                        </div>
                    </Animated>
                </MobileView>
                {
                route==='home'?
                    <div>
                        <BrowserView>
                            <Animated animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                                <Button variant="light" className="shop mx-2" href="./sale/men"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  SHOP MEN</Button>
                                <Button variant="light"className="shop mx-2" href="./sale/women"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  SHOP WOMEN</Button><br></br><br></br>
                                <Button variant="light"className="shop mx-2" href="./sale/kids"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  SHOP KIDS</Button>
                            </Animated>
                        </BrowserView>
                        <MobileView>
                            <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                                <Button variant="light"className="shop mx-2" href="./sale/men"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  SHOP MEN</Button>
                                <Button variant="light"className="shop mx-2" href="./sale/women"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  SHOP WOMEN</Button><br></br><br></br>
                                <Button variant="light"className="shop mx-2" href="./sale/kids"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  SHOP KIDS</Button>
                            </Animated>
                        </MobileView>
                    </div>
                :
                (
                <div>

                </div>
                )

                }

            </div>
            {/* Background left sided */}
            <div className="item">
            {
                route==='login'?
                         <div>
                             <BrowserView>
                                <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                                    <Login/>
                                </Animated>
                            </BrowserView>
                            <MobileView>
                                <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                                    <Login/>
                                </Animated>
                            </MobileView>
                         </div>
                :
                <div>
                    <BrowserView>
                        <Animated animationIn="fadeInRight" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <img className="background_img" src={backGroundImgLink} alt="background"/>
                        </Animated>
                    </BrowserView>
                    <MobileView>
                        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <img className="background_img" src={backGroundImgLink} alt="background"/>
                        </Animated>
                    </MobileView>
                </div>    
            }
            </div>
        </div>

    )
}
export default Background