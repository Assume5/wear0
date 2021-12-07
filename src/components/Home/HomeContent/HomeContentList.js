import Content from '../../Content/Content'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Component } from 'react'
import HomeNewcollection from './HomeNewcollection'
import HomeTrendingApparel from './HomeTrendingApparel'
import HomeTrendingAccessories from './HomeTrendingAccessories'
import HomeTrendingFootwear from './HomeTrendingFootwear'
import { serverUrl } from '../../../constants/Global'

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
    onProductCardClick=(id)=>{
        window.location="/productdetails/"+id
    }
    render(){
        const {productdetailsNewCollection,productdetailsTrendingApparel,productdetailsTrendingFootwear,productdetailsTrendingAccessories} = this.props
        return(
            <div>
                <HomeNewcollection 
                    productdetailsNewCollection={productdetailsNewCollection}
                    isPosition={this.state.isPositionNewCollection}
                    onProductCardClick={this.onProductCardClick}
                    serverUrl = {serverUrl}
                />

                <HomeTrendingApparel
                    productdetailsTrendingApparel={productdetailsTrendingApparel}
                    isPosition={this.state.isPositionHomeTrendingApparel}
                    onProductCardClick={this.onProductCardClick}
                    serverUrl = {serverUrl}
                />
               <HomeTrendingFootwear
                    productdetailsTrendingFootwear={productdetailsTrendingFootwear}
                    isPosition={this.state.isPositionHomeTrendingFootwear}
                    onProductCardClick={this.onProductCardClick}
                    serverUrl = {serverUrl}
                />
                <HomeTrendingAccessories
                    productdetailsTrendingAccessories={productdetailsTrendingAccessories}
                    isPosition={this.state.isPositionHomeTrendingAccessories}
                    onProductCardClick={this.onProductCardClick}
                    serverUrl = {serverUrl}
                /> 
            </div>
        )
    }
}
export default HomeContentList