import React from 'react';

var SingleProductComponent = (props)=>{
    var product = props.singleProduct;
    return <span>{product.imageurl}<br/>
                Name: {product.name}<br/>
                Price: {product.price} $<br/>
                Quantity: {product.quantity}<br/>
                Description: {product.description}<br/>
                <p><a href="#" className="btn btn-primary" 
                        role="button">Buy</a></p>
    </span>

}

export default SingleProductComponent;