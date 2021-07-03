import Content from '../Content'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function HomeNewcollection({productdetailsNewCollection,isPosition,onProductCardClick}){
    const {productNewCollectionId,productnameNewCollection,productpriceNewCollection,productimageNewCollection,productimageNewCollectionHover,productaltNewCollection,productstockNewCollection}=productdetailsNewCollection
    return(
        <div className="Content" id="homeNewcollectionContent">
        <div className="title" id="homeNewcollectionStart">
            <h5>New Collection</h5>
            <hr></hr>
        </div>
        {
            [...Array(5)].map((x, i) =>
                <Content 
                    productid={productNewCollectionId}
                    productname={productnameNewCollection}
                    productprice={productpriceNewCollection}
                    productimage={productimageNewCollection}
                    productalt={productaltNewCollection}
                    isPosition = {isPosition}
                    productimageHover={productimageNewCollectionHover}
                    animationDelay={100+i*300}
                    onProductCardClick={onProductCardClick}
                    productstock={productstockNewCollection}
                />
            )
        }
        <div className="bottom_tittle" id="homeNewcollectionEnd">
            <hr></hr>
                <Button variant="dark"  className="shop m-3 shadow-3 grow" href="/new"><FontAwesomeIcon className="FontAwesomeIcon"icon={faShoppingCart}/>Shop More</Button>
        </div>

    </div>

    )
}
export default HomeNewcollection