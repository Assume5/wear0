import Content from '../../Content/Content'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function HomeNewcollection({productdetailsNewCollection,isPosition,onProductCardClick,serverUrl}){
    return(
        <div className="Content" id="homeNewcollectionContent">
        <div className="title" id="homeNewcollectionStart">
            <h5>New Collection</h5>
            <hr></hr>
        </div>
        {           
            productdetailsNewCollection.slice(0).reverse().map((data,i) => {
                if(i<7) //only rendering 7 new item from the db
                return(
                    <Content
                        productid={data.productId}
                        productname={data.productName}
                        productprice={data.productPrice}
                        productimage={`${serverUrl}${data.productImg1}`}
                        productalt={data.productName}
                        isPosition = {isPosition}
                        productimageHover={`${serverUrl}${data.productImg2}`}
                        animationDelay={100+i*100}
                        onProductCardClick={onProductCardClick}
                        productstock={data.totalStock}
                        key={data['productId']}
                    />
                )
            })

        }
        <div className="bottom_tittle" id="homeNewcollectionEnd">
            <hr></hr>
                <Button variant="dark"  className="shop m-3 shadow-3 grow" href="/new"><FontAwesomeIcon className="FontAwesomeIcon"icon={faShoppingCart}/>Shop More</Button>
        </div>

    </div>

    )
}
export default HomeNewcollection