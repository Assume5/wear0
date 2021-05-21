import './ProductDetails.css'
import ProductSizeList from './ProductSizeList'
import React from 'react'
class ProductDetails extends React.Component{
    constructor(){
        super()
        this.state={
            productDetails:{},
            currentSizeClick:0,
            loaded:false
        }
    }
    componentDidMount(){
        const currenturl=document.URL;
        const id = currenturl.substring(currenturl.lastIndexOf('/') + 1);
        //if i get from db
        if(id==="1-45"){
            const product={
                productName:"Kaws Brown",
                productImg1:'../TestingImage/brown.png',
                productImg2:'../TestingImage/brownturn.png',
                productImg3:'../TestingImage/brown.png',
                productImg4:"",
                productSize:"MultipleSize",
                productColor:"Brown",
                productMaterial:"Vinyl",
                productDesc:"KAWS BROWN LIMITED EDITION!",
                productCategory:"Accessories",
                stock:{
                    3:0,
                    3.5:0,
                    4:10,
                    4.5:10,
                    5:0,
                    5.5:10,
                    6:10,
                    6.5:10,
                    7:10,
                    7.5:0
                }
            }
            if(Object.keys(product).length){
                this.setState({productDetails:product})
                this.setState({loaded:true})
            }
        }
        if(id==='1-47'){
            const product={
                productName:"Kaws Black",
                productImg1:'../TestingImage/black.png',
                productImg2:'../TestingImage/blackturn.png',
                productImg3:'../TestingImage/black.png',
                productImg4:"",
                productSize:"OneSize",
                productColor:"Black",
                productMaterial:"Vinyl",
                productDesc:"KAWS BLACK LIMITED EDITION!",
                productCategory:"Accessories",
                stock:0
            }
            if(Object.keys(product).length){
                this.setState({productDetails:product})
                this.setState({loaded:true})
            }
        }
    }
    onSelectSizeClick=(size)=>{
        if(this.state.currentSizeClick!==0){
            document.getElementById(this.state.currentSizeClick).style.backgroundColor=""
        }
        this.setState({currentSizeClick:size})
        document.getElementById(size).style.backgroundColor="black"
    }
    render(){
        if(this.state.loaded){
            const productDetails = this.state.productDetails
            return(
                <div className="ProductDetailContainer">
                    <div className="ProductImageContainer">
                        <img alt="" src={productDetails.productImg1}/>
                        <img alt="" src={productDetails.productImg2}/>
                        <img alt="" src={productDetails.productImg3}/>
                        <img alt="" src={productDetails.productImg4}/>
                    </div>
                    <div className="ProductInfoContainer">
                        <h6 className="f3 header">{productDetails.productName}</h6>
                        <hr/>
                        <div className="InfoDetails"> 
                            <h6 className="f4" style={{marginBottom:"4%"}}>SPECIFICATION:</h6>
                            <p className="f5">Color : {productDetails.productColor}</p>
                            <p className="f5">Material : {productDetails.productMaterial}</p>
                            <p className="f5">Detail : {productDetails.productDesc}</p>
                            <p className="f5">Category : {productDetails.productCategory}</p>
                        </div>
                        {
                            productDetails.productSize!=="OneSize"?
                                <div>            
                                    <ProductSizeList stock={productDetails.stock} onSelectSizeClick={this.onSelectSizeClick}/>
                                    {
                                        productDetails.stock!==0
                                        ?
                                            <input style={{marginTop:"5%"}}
                                            className="b ph3 pv2 input-reset ba w-60 b--black bg-transparent grow pointer f6 dib black"
                                            type="button"
                                            value="Add To Cart"
                                        />
                                        :
                                            <input style={{marginTop:"5%" ,cursor:"no-drop"}}
                                            className="b ph3 pv2 input-reset ba w-60 b--black bg-transparent grow f6 dib black"
                                            type="button"
                                            value="OUT OF STOCK"
                                        />
                                    }
                                </div>
                            :
                                productDetails.stock!==0
                                ?
                                    <input style={{marginTop:"5%"}}
                                    className="b ph3 pv2 input-reset ba w-60 b--black bg-transparent grow pointer f6 dib black"
                                    type="button"
                                    value="Add To Cart"
                                    />
                                :
                                    <input style={{marginTop:"5%" ,cursor:"no-drop"}}
                                    className="b ph3 pv2 input-reset ba w-60 b--black bg-transparent f6 dib black"
                                    type="button"
                                    value="OUT OF STOCK"
                                    />
                        }
    
                    </div>
                </div>
            )
        }
        else{
            return(
                <h1>Loading</h1>
            )
        }
        
    }
}
export default ProductDetails;