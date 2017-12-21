import React, {Component} from 'react';
import ManyProductsComponent from './ManyProductsComponent';
import axios from 'axios';

class ProductsContainer extends Component{
    constructor() {
        super();

        this.state = {
            products: []
        }
    }

    componentWillMount(){
        axios
            .get("http://localhost:8081/rest/product")
            .then((responce) => {
                console.log(responce);
                this.setState({products: responce.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render (){
        return <ManyProductsComponent allProducts={this.state.products}/>
    }
}
/* var BackToMainNavigation =(props)=>{
    var goApp = () => props.router.push("/");
    return (
      <div>
          At route: {props.router.getCurrentLocation().pathname}
          <button onClick={goApp}>Back to Main Page</button>
          <pre>
              {JSON.stringify(props, null, 2)}
          </pre>
        </div>
    );
  }; */
export default ProductsContainer;