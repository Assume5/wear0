import HomeContent from './Content'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react'
class HomeContentList extends Component{
    constructor(){
        super()
        this.state={
            isPositionNewCollection:false,
            isPositionHomeTrendingApparel:false,
            isPositionHomeTrendingAccessories:false,
            isPositionHomeTrendingFootwear:false

        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
      
      componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
      }
      
      listenToScroll = () => {
        //////////////////////////////////////////// New collection ////////////////////////////////////////////  
        var homeNewcollectionStart = document.querySelector('#homeNewcollectionStart'); //when new collection content starts
        var positionHomeNewcollectionStart = homeNewcollectionStart.getBoundingClientRect();

        var homeNewcollectionEnd = document.querySelector('#homeNewcollectionEnd');
        var positionHomeNewcollectionEnd = homeNewcollectionEnd.getBoundingClientRect(); //when new collection content ends

        if(positionHomeNewcollectionStart.top >= 0 && positionHomeNewcollectionStart.bottom <= window.innerHeight) {
             //if newcollection content is at top of new collection show the new collection product cards.
            this.setState({isPositionNewCollection:true})
        }    
        else if(positionHomeNewcollectionEnd.top < window.innerHeight && positionHomeNewcollectionEnd.bottom >= 0) {
            //if newcollection content is at bottom of new collection show the new collection product cards.
            this.setState({isPositionNewCollection:true})
        }
        else if(positionHomeNewcollectionEnd.top > window.innerHeight && positionHomeNewcollectionStart.bottom <  window.innerHeight){
            //if in between show product cards
            this.setState({isPositionNewCollection:true})
        }
        else if(positionHomeNewcollectionStart.top >  window.innerHeight || positionHomeNewcollectionEnd.bottom <  window.innerHeight){
            //if newcollection content start didn't met or if newcollection content end has pass set visible to false
            this.setState({isPositionNewCollection:false})
        }


        //////////////////////////////////////////// Trending Apparel ////////////////////////////////////////////  
        var homeTrendingApparelStart = document.querySelector('#homeTrendingApparelStart'); //when new collection content starts
        var positionHomeTrendingApparelStart = homeTrendingApparelStart.getBoundingClientRect();

        var homeTrendingApparelEnd = document.querySelector('#homeTrendingApparelEnd');
        var positionHomeTrendingApparelEnd = homeTrendingApparelEnd.getBoundingClientRect(); //when new collection content ends

        if(positionHomeTrendingApparelStart.top >= 0 && positionHomeTrendingApparelStart.bottom <= window.innerHeight) {
             //if newcollection content is at top of new collection show the new collection product cards.
            this.setState({isPositionHomeTrendingApparel:true})
        }    
        else if(positionHomeTrendingApparelEnd.top < window.innerHeight && positionHomeTrendingApparelEnd.bottom >= 0) {
            //if newcollection content is at bottom of new collection show the new collection product cards.
            this.setState({isPositionHomeTrendingApparel:true})
        }
        else if(positionHomeTrendingApparelEnd.top > window.innerHeight && positionHomeTrendingApparelStart.bottom <  window.innerHeight){
            //if in between show product cards
            this.setState({isPositionHomeTrendingApparel:true})
        }
        else if(positionHomeTrendingApparelStart.top >  window.innerHeight || positionHomeTrendingApparelEnd.bottom <  window.innerHeight){
            //if newcollection content start didn't met or if newcollection content end has pass set visible to false
            this.setState({isPositionHomeTrendingApparel:false})
        }


        //////////////////////////////////////////// Trending Accessories ////////////////////////////////////////////  
        var homeTrendingAccessoriesStart = document.querySelector('#homeTrendingAccessoriesStart'); //when new collection content starts
        var positionHomeTrendingAccessoriesStart = homeTrendingAccessoriesStart.getBoundingClientRect();

        var homeTrendingAccessoriesEnd = document.querySelector('#homeTrendingAccessoriesEnd');
        var positionHomeTrendingAccessoriesEnd = homeTrendingAccessoriesEnd.getBoundingClientRect(); //when new collection content ends

        if(positionHomeTrendingAccessoriesStart.top >= 0 && positionHomeTrendingAccessoriesStart.bottom <= window.innerHeight) {
             //if newcollection content is at top of new collection show the new collection product cards.
            this.setState({isPositionHomeTrendingAccessories:true})
        }    
        else if(positionHomeTrendingAccessoriesEnd.top < window.innerHeight && positionHomeTrendingAccessoriesEnd.bottom >= 0) {
            //if newcollection content is at bottom of new collection show the new collection product cards.
            this.setState({isPositionHomeTrendingAccessories:true})
        }
        else if(positionHomeTrendingAccessoriesEnd.top > window.innerHeight && positionHomeTrendingAccessoriesStart.bottom <  window.innerHeight){
            //if in between show product cards
            this.setState({isPositionHomeTrendingAccessories:true})
        }
        else if(positionHomeTrendingAccessoriesStart.top >  window.innerHeight || positionHomeTrendingAccessoriesEnd.bottom <  window.innerHeight){
            //if newcollection content start didn't met or if newcollection content end has pass set visible to false
            this.setState({isPositionHomeTrendingAccessories:false})
        }        

        //////////////////////////////////////////// Trending Footwear ////////////////////////////////////////////  
        var homeTrendingFootwearStart = document.querySelector('#homeTrendingFootwearStart'); //when new collection content starts
        var positionHomeTrendingFootwearStart = homeTrendingFootwearStart.getBoundingClientRect();

        var homeTrendingFootwearEnd = document.querySelector('#homeTrendingFootwearEnd');
        var positionHomeTrendingFootwearEnd = homeTrendingFootwearEnd.getBoundingClientRect(); //when new collection content ends

        if(positionHomeTrendingFootwearStart.top >= 0 && positionHomeTrendingFootwearStart.bottom <= window.innerHeight) {
             //if newcollection content is at top of new collection show the new collection product cards.
            this.setState({isPositionHomeTrendingFootwear:true})
        }    
        else if(positionHomeTrendingFootwearEnd.top < window.innerHeight && positionHomeTrendingFootwearEnd.bottom >= 0) {
            //if newcollection content is at bottom of new collection show the new collection product cards.
            this.setState({isPositionHomeTrendingFootwear:true})
        }
        else if(positionHomeTrendingFootwearEnd.top > window.innerHeight && positionHomeTrendingFootwearStart.bottom <  window.innerHeight){
            //if in between show product cards
            this.setState({isPositionHomeTrendingFootwear:true})
        }
        else if(positionHomeTrendingFootwearStart.top >  window.innerHeight || positionHomeTrendingFootwearEnd.bottom <  window.innerHeight){
            //if newcollection content start didn't met or if newcollection content end has pass set visible to false
            this.setState({isPositionHomeTrendingFootwear:false})
        }        


        // if(positionHomeNewcollectionStart.bottom <  window.innerHeight) {
        //     console.log('Element Has pass start');
        // }
        // else if(positionHomeNewcollectionEnd.top > window.innerHeight) {
        //     console.log('Element Has not met end');
        // }
            //////////////////////////////////////////// Trending Apparel ////////////////////////////////////////////  

      }
    render(){
        const {productdetailsNewCollection,productdetailsTrending} = this.props
        const {productnameNewCollection,productpriceNewCollection,productimageNewCollection,productimageNewCollectionHover,productaltNewCollection}=productdetailsNewCollection
        const {productnameTrending,productpriceTrending,productimageTrending,productimageTrendingHover,productaltTrending}=productdetailsTrending
        return(
            <div>
                <div className="Content" id="homeNewcollectionContent">
                    <div className="title" id="homeNewcollectionStart">
                        <h5>New Collection</h5>
                        <hr></hr>
                    </div>
                    {
                        [...Array(5)].map((x, i) =>
                            <HomeContent productname={productnameNewCollection}
                                productprice={productpriceNewCollection}
                                productimage={productimageNewCollection}
                                productalt={productaltNewCollection}
                                isPosition = {this.state.isPositionNewCollection}
                                productimageHover={productimageNewCollectionHover}
                                animationDelay={100+i*500}
                            />
                        )
                    }
                    <div className="bottom_tittle" id="homeNewcollectionEnd">
                        <hr></hr>
                            <Button className="m-4 br4 shadow-3 grow" href="/new"><FontAwesomeIcon className="FontAwesomeIcon" size="2x"icon={faShoppingCart}/> <h5> Shop More</h5></Button>
                    </div>

                </div>
                
                <div className="Content" id="homeTrendingApparel">
                    <div className="title" id="homeTrendingApparelStart">
                        <h5>Trending Apparel</h5>
                        <hr></hr>
                    </div>
                    {
                        [...Array(5)].map((x, i) =>
                            <HomeContent 
                                productname={productnameTrending} 
                                productprice={productpriceTrending} 
                                productimage={productimageTrending} 
                                productalt={productaltTrending} 
                                isPosition = {this.state.isPositionHomeTrendingApparel}
                                productimageHover={productimageTrendingHover}
                                animationDelay={100+i*500}

                            />
                        )
                    }
                    <div className="bottom_tittle" >
                        <hr></hr>
                        <Button className="shop m-3 shadow-3 grow" href="./men/apparel" id="homeTrendingApparelEnd"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Men</Button>
                        <Button className="shop m-3 shadow-3 grow" href="./women/apparel"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Women</Button>
                        <Button className="shop m-3 shadow-3 grow" href="./kids/apparel"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Kids</Button>
                    </div>

                </div>
                <div className="Content" id="homeTrendingFootwear">
                    <div className="title" id="homeTrendingFootwearStart">
                        <h5>Trending Footwear</h5>
                        <hr></hr>
                    </div>
                    {
                        [...Array(5)].map((x, i) =>
                            <HomeContent 
                                productname={productnameTrending} 
                                productprice={productpriceTrending} 
                                productimage={productimageTrending} 
                                productalt={productaltTrending} 
                                isPosition = {this.state.isPositionHomeTrendingFootwear}
                                productimageHover={productimageTrendingHover}
                                animationDelay={100+i*500}

                            />
                        )
                    }
                    <div className="bottom_tittle" >
                        <hr></hr>
                        <Button className="shop m-3 shadow-3 grow" href="./men/footwear" id="homeTrendingFootwearEnd"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Men</Button>
                        <Button className="shop m-3 shadow-3 grow" href="./women/footwear"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Women</Button>
                        <Button className="shop m-3 shadow-3 grow" href="./kids/footwear"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Kids</Button>
                    </div>
                </div>
                <div className="Content" id="homeTrendingAccessories">
                    <div className="title" id="homeTrendingAccessoriesStart">
                        <h5>Trending Accessories</h5>
                        <hr></hr>
                    </div>
                    {
                        [...Array(5)].map((x, i) =>
                            <HomeContent 
                                productname={productnameTrending} 
                                productprice={productpriceTrending} 
                                productimage={productimageTrending} 
                                productalt={productaltTrending} 
                                isPosition = {this.state.isPositionHomeTrendingAccessories}
                                productimageHover={productimageTrendingHover}
                                animationDelay={100+i*500}

                            />
                        )
                    }
                    <div className="bottom_tittle" >
                        <hr></hr>
                        <Button className="shop m-3 shadow-3 grow" href="./men/accessories" id="homeTrendingAccessoriesEnd"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Men</Button>
                        <Button className="shop m-3 shadow-3 grow" href="./women/accessories"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Women</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeContentList