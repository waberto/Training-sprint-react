import React, { Component } from 'react';
import axios from 'axios'


class ProductInput extends Component {


    state = {
        name: '',
        quantity: '',
        price: '',
        message: null
    }



    handleNameChange = event => {
       this.setState({ name: event.target.value })
    }

    
    handleQuantityChange = event => {
        this.setState({ quantity:  event.target.value })
     }

     
    handlePriceChange = event => {
        this.setState({ price:  event.target.value })
     }


    handleSubmit = event => {
        //alert('nom : ' + this.state.name + ' quantité : ' + this.state.quantity + 'price : ' + this.state.price)
        event.preventDefault()

        //const product = { ...this.state }

        const product = {
            name: this.state.name,
            quantity: this.state.quantity,
            price: this.state.price
        }

        if (this.state.name !== '' && this.state.quantity !== '' && this.state.price !== '') {
           
            console.log('name', this.state.name, 'quantity', this.state.quantity, 'price', this.state.price);

            axios.post(`http://localhost:9191/addProduct`,
                { product })
                .then(res => {
                    console.log(res);
                    console.log("Added successfully");
                    console.log(res.data);
                    this.setState({ message: 'Product added successfully.'})
                }).catch(err => {
                    console.log(err);
                });

            //Reset
            // Object.keys(product).forEach(item => {
            //     product[item] = ''
            // })
            // this.setState({ ...product })
        } else {
            alert('The fields must be completed !')
        }

    }

    render() {

        return (
            <div>
                <h2 className="text">Add Product</h2>
                <form>

                    <div className="form-group">
                        <label>Product name: </label>
                        <input type="text" name="name" onChange={this.handleNameChange}
                            value={this.state.name} placeholder='Nom du produit' className="form-control" />
                    </div>
            
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input value={this.state.quantity} onChange={this.handleQuantityChange}
                            name='quantity' type="number" placeholder=' Quantite du produit' className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Price: </label>
                        <input value={this.state.price} onChange={this.handlePriceChange}
                            name='price' type="number" placeholder='Prix du produit' className="form-control" />
                    </div>

                    <div>
                        <button className="btn btn-success" onClick={this.handleSubmit}>Add new product</button>
                    </div>


                </form>
            </div>
        );
    }
}

export default ProductInput;