import Content from '../Content'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function HomeTrendingApparel({productdetailsTrending,isPosition,onProductCardClick}){
    const {productTrendingId,productnameTrending,productpriceTrending,productimageTrending,productimageTrendingHover,productaltTrending,productstockTrending}=productdetailsTrending

    return (
        <div className="Content" id="homeTrendingApparel">
        <div className="title" id="homeTrendingApparelStart">
            <h5>Trending Apparel</h5>
            <hr></hr>
        </div>
        {
            [...Array(5)].map((x, i) =>
                <Content 
                    productid={productTrendingId}
                    productname={productnameTrending} 
                    productprice={productpriceTrending} 
                    productimage={productimageTrending} 
                    productalt={productaltTrending} 
                    isPosition = {isPosition}
                    productimageHover={productimageTrendingHover}
                    animationDelay={100+i*300}
                    onProductCardClick={onProductCardClick}
                    productstock={productstockTrending}
                />
            )
        }
        <div className="bottom_tittle" >
            <hr></hr>
            <Button variant="dark" className="shop m-3 shadow-3 grow" href="./men/apparel" id="homeTrendingApparelEnd"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Men</Button>
            <Button variant="dark" className="shop m-3 shadow-3 grow" href="./women/apparel"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Women</Button>
            <Button variant="dark" className="shop m-3 shadow-3 grow" href="./kids/apparel"><FontAwesomeIcon className="FontAwesomeIcon" icon={faShoppingCart}/>  Shop Kids</Button>
        </div>

        </div>


    )
}
export default HomeTrendingApparel