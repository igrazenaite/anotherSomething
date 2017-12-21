import React from 'react';
import axios from 'axios';

class ProductAdministrationComponent extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            title : '',
            imageurl: '',
            description: '',
            price: '',
            quantity: ''};

    }

    componentWillMount(){
        axios.get('localhost:3000/#/admin/products/new')
        .then((responce)=>{
            this.setState({products: responce.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    handleSubmit = (event)=> {
        console.log(this.state);
        event.preventDefault();
    }
    
    updateTitle = (event) => {
        this.setState({title: event.target.value});
    }

    updatePrice = (event) => {
        this.setState({price: event.target.value});
    }

    updateQuantity = (event) => {
        this.setState({quantity: event.target.value});
    }

    updateDescription = (event) => {
        this.setState({description: event.target.value});
    }

    updateImage = (event) => {
        this.setState({imageurl: event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="productTitle">Title: </label>
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </div><br/>
                <div className="form-group">
                    <label htmlFor="productPrice">Price: </label>
                    <input type="text"  value={this.state.price} onChange={this.updatePrice}/>
                </div><br/>
                <div className="form-group">
                    <label htmlFor="productQuantity">Quantity: </label>
                    <input type="text" value={this.state.quantity} onChange={this.updateQuantity}/>
                </div><br/>
                <div>
                    <label htmlFor="productDescription">Description: </label>
                    <textarea className="form-control" rows="3" value={this.state.description} onChange={this.updateDescription} ></textarea>
                </div><br/>    
                <div className="form-group">
                    <label htmlFor="productImage">Upload files: </label>
                    <input type="file" id="productImage" value={this.state.imageurl} onChange={this.updateImage}/>
                </div><br/>
                <br/>
                <button type="save" className="btn btn-default" onClick={this.handleSubmit}>Save</button>
            </form>); 
        } 
        
    }

//export var Administration = ProductAdministrationComponent;
export default ProductAdministrationComponent;