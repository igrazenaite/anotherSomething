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
            .get("http://localhost:8081/rest/products")
            .then((response) => {
                console.log(response);
                this.setState({products: response.data});
            })
            .catch((error) => {
                console.log(error);
            });
    }
    goMain = () => this.props.router.push("/");
    
    render (){
        return <div>
        At route: {this.props.router.getCurrentLocation().pathname}
        <button onClick={this.goMain}>Back to Main Page</button>
       {/*  <pre>
            {JSON.stringify(props, null, 2)}
        </pre> */}
        <ManyProductsComponent allProducts={this.state.products}/>
      </div>
    }
}
 //var BackToMainNavigation =(props)=>{
    /*var */
    /*return (
      <div>
          At route: {props.router.getCurrentLocation().pathname}
          <button onClick={goMain}>Back to Main Page</button>
          <pre>
              {JSON.stringify(props, null, 2)}
          </pre>
        </div>
    );
  }; */
export default ProductsContainer;