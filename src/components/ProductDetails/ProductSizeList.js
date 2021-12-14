import React from 'react'
//loading https://www.geeksforgeeks.org/how-to-create-skeleton-screen-loading-effect-using-css/
class ProductSizeList extends React.Component{
    render(){
        const {onSelectSizeClick,stock}=this.props
        return(
            <div>
                <h6>SELECT A SIZE</h6>
                <div className="SizeList">
                    {
                        Object.keys(stock).map((size,i)=>{
                            if(size === '0') {
                                return(
                                    <>
                                    </>
                                )
                            }
                            return(
                                stock[size]>0?
                                    <p className="f4 br3 SizeInStock" id={size} onClick={()=>onSelectSizeClick(size)}>{size}</p>
                                :
                                    <p className="f4 br3 SizeNoStock" id={size}>{size}</p>

                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ProductSizeList