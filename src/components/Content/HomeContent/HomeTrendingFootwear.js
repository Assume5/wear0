import Content from '../Content'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function HomeTrendingFootwear({productdetailsTrending,isPosition,onProductCardClick}){
    const {productTrendingId,productnameTrending,productpriceTrending,productimageTrending,productimageTrendingHover,productaltTrending,productstockTrending}=productdetailsTrending

    return (
        <div className="Content" id="homeTrendingFootwear">
        <div className="title" id="homeTrendingFootwearStart">
            <h5>Trending Footwear</h5>
            <hr></hr>
        </div>
        {
            [...Array(5)].map((x, i) =>
                <Content 
                    productname={productnameTrending} 
                    productprice={productpriceTrending} 
                    productimage={productimageTrending} 
                    productalt={productaltTrending} 
                    isPosition = {isPosition}
                    productimageHover={productimageTrendingHover}
                    animationDelay={100+i*300}

                />
            )
        }
        <div className="bottom_tittle" >
            <hr></hr>
            <Button variant="dark" className="shop m-3 shadow-3 grow" href="./men/footwear" id="homeTrendingFootwearEnd"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Men</Button>
            <Button variant="dark" className="shop m-3 shadow-3 grow" href="./women/footwear"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Women</Button>
            <Button variant="dark" className="shop m-3 shadow-3 grow" href="./kids/footwear"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Kids</Button>
        </div>
        </div>


    )
}
export default HomeTrendingFootwear