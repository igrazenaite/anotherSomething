import React from 'react';
import SingleProductComponent from './SingleProductComponent';

var ManyProductsComponent =(props)=>{
    var allProducts = props.allProducts;
    if (allProducts.length===0){
        return <div>all products from server</div>
    } else {
        var productDrawing = allProducts.map((product)=>{
            return <SingleProductComponent key={product.name} singleProduct={product}/>
        })
        return <div>{productDrawing}</div>
    }
}

export default ManyProductsComponent;