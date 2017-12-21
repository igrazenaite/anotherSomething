import React from 'react';
import P1 from '../ProductCard/ProductCard';
import plant from '../Habenaria_radiata.jpg';
import axios from 'axios';

class ProductListComponent extends React.Component{
    constructor(props){
        super(props);
        var productsArray= [{
            title: 'Some plant', 
            imageURL: plant, 
            description: 'Wonderful plant', 
            price: '100', 
            quantity: '5'
            },
           {
            title: 'Some other plant',
            imageURL: plant,
            description: 'This one is priceless',
            price: '99',
            quantity: '1'
          },
           {
            title: 'One more plant',
            imageURL: plant,
            description: 'You will not be able to buy it',
            price: '5',
            quantity: '2'
          },
           {
            title: 'Actually it is a Habenaria radiata',
            imageURL: plant,
            description: 'A terrestrial orchid from Japan',
            price: '15',
            quantity: '4'
          }]
        this.state={
            products: productsArray
        }
    }
    //goProducts = () => this.props.router.push("products");
  
    componentWillMount(){
        //1.skaitysit is serverio su axios.get
        //2.this.setState({products:atsakymasisserverio})
        axios.get('localhost:3000/#/products')
        .then((responce)=>{
            this.setState({products: responce.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <div className="container">
                    <div className="row1">
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.state.products[0]}/>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.state.products[1]}/>
                        </div>
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.state.products[2]}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row2">
                        <div className="col-sm-4 col-md-4">
                            <P1 product={this.state.products[3]}/>
                        </div>
                    </div>
                </div>
                {/* <p><button onClick={this.goProducts}
                    className="btn btn-primary"
                    role="button">
                    Go to products</button></p> */}
            </div>
        );
    }
};

export var PList=ProductListComponent;
export default ProductListComponent;