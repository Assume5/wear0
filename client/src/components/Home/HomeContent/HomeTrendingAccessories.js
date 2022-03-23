import Content from '../../Content/Content'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function HomeTrendingAccessories({productdetailsTrendingAccessories,isPosition,onProductCardClick, serverUrl}){

    return (
        <div className="Content" id="homeTrendingAccessories">
        <div className="title" id="homeTrendingAccessoriesStart">
            <h5>Trending Accessories</h5>
            <hr></hr>
        </div>
        {
            Object.keys(productdetailsTrendingAccessories).map((key,i) => {
                let data = productdetailsTrendingAccessories
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
                return(<></>)
            })
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