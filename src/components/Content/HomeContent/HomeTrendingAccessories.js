import Content from '../Content'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function HomeTrendingAccessories({productdetailsTrending,isPosition,onProductCardClick}){
    const {productTrendingId,productnameTrending,productpriceTrending,productimageTrending,productimageTrendingHover,productaltTrending,productstockTrending}=productdetailsTrending

    return (
        <div className="Content" id="homeTrendingAccessories">
        <div className="title" id="homeTrendingAccessoriesStart">
            <h5>Trending Accessories</h5>
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
                    animationDelay={100+i*100}
                    key={x}
                />
            )
        }
        <div className="bottom_tittle" >
            <hr></hr>
            <Button variant="dark" className="shop m-3 shadow-3 grow" href="./men/accessories" id="homeTrendingAccessoriesEnd"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Men</Button>
            <Button variant="dark" className="shop m-3 shadow-3 grow" href="./women/accessories"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Women</Button>
        </div>
        </div>


    )
}
export default HomeTrendingAccessories