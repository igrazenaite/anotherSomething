import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import P1 from './ProductCard/ProductCard';
import PList from './ProductList/ProductList'
//import plant from './Habenaria_radiata.jpg';
//import App from './App.js'
import Administration from './ProductAdministrationComponent/ProductAdministrationComponent';
import ProductsContainer from './Products/ProductsContainer';

var NoMatch = (props) =>{
  return <div>Route did not match</div>;
}
/*
var DemonstruotiNavigacija =(props)=>{
  var goApp = () => props.router.push("/");
  return (
    <div>
        At route: {props.router.getCurrentLocation().pathname}
        <button onClick={goApp}>Go to App</button>
        <pre>
            {JSON.stringify(props, null, 2)}
        </pre>
      </div>
  );
};*/



// var lowPriceProducts = products.filter(prod => prod.price < 10);
// console.log("Products with prices less than 10: ", lowPriceProducts);

// var totalPrice = products
// 	.reduce((sum, prod) => sum + (parseInt(prod.price) * parseInt(prod.quantity)));
// console.log("Total price: ", totalPrice);

var InitialApp=(props)=>{
  return <div>
    <img src={props.imageurl} alt="Ner paveiksliuko" style={{width: 100, height: 100}}/>
  {props.children}</div>
}

ReactDOM.render((
  //<App />,
  //<PList products={products}/>, 
<Router history={hashHistory}>
    <Route path="/" component={InitialApp}>
    <IndexRoute component={PList}/>
    <Route path="/products" component={ProductsContainer}/>
    <Route path="/admin/products/:id" component={Administration}/>
    <Route path="/admin/products/new" component={Administration}/>
    <Route path="*" component={NoMatch}/>
    </Route>
  </Router>), 
  document.getElementById('root')
);

