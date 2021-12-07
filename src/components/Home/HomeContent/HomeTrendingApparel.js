import Content from '../../Content/Content'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function HomeTrendingApparel({productdetailsTrendingApparel,isPosition,onProductCardClick,serverUrl}){
    return (
        <div className="Content" id="homeTrendingApparel">
        <div className="title" id="homeTrendingApparelStart">
            <h5>Trending Apparel</h5>
            <hr></hr>
        </div>
        {
            Object.keys(productdetailsTrendingApparel).map((key,i) => {
                let data = productdetailsTrendingApparel
                if(i<7) //only rendering 7 items from the db
                return(
                    <Content
                        productid={data[key].productId}
                        productname={data[key].productName}
                        productprice={data[key].productPrice}
                        productimage={`${serverUrl}${data[key].productImg1}`}
                        productalt={data[key].productName}
                        isPosition = {isPosition}
                        productimageHover={`${serverUrl}${data[key].productImg2}`}
                        animationDelay={100+i*100}
                        onProductCardClick={onProductCardClick}
                        productstock={data[key].totalStock}
                        key={data[key]['productId']}
                    />
                )
            })
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