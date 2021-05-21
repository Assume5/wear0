import React from 'react'
class ProductSizeList extends React.Component{
    render(){
        const {onSelectSizeClick,stock}=this.props
        return(
            <div>
                <h6>SELECT A SIZE</h6>
                <div className="SizeList">
                    {
                        Object.keys(stock).sort().map((size,i)=>{
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