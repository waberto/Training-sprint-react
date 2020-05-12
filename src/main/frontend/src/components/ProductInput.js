import React, { Component } from 'react';
import axios from 'axios'


class ProductInput extends Component {


    state = {
        name: '',
        quantity: '',
        price: ''
    }

    handleNameChange = event => {
        console.log('handleNameChange', this);
        this.setState({ name: event.target.value });
    }

    handleQuantityChange = event => {
        console.log('handleQuantityChange', this);
        this.setState({ quantity: event.target.value });
    }

    handlePriceChange = event => {
        console.log('handlePriceChange', this);
        this.setState({ price: event.target.value });
    }

    handleNameChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        //this.setState({ value: event.target.value });
    }

    handleQuantityChange = event => {
        //this.setState({ value: event.target.value });
        this.setState({ [event.target.quantity]: event.target.value });
    }

    handlePriceChange = event => {
        //this.setState({ value: event.target.value });
        this.setState({ [event.target.price]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault()

        // const product = {
        //     name: this.state.name,
        //     quantity: this.state.quantity,
        //     price: this.state.price
        // }

        const product = { ...this.state }

        if (this.state.name === '' || this.state.quantity === '' || this.state.price === '') {

            console.log('name', this.state.name, 'quantity', this.state.quantity, 'price', this.state.price);

            axios.post(`http://localhost:9191/addProduct`,
                { product })
                .then(res => {
                    console.log(res);
                    console.log("Added successfully");
                    console.log(res.data);
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
                <form className="admin-form ajouter-produit" onClick={this.handleSubmit}>

                    <div>
                        <label>Product name: </label>
                        <input type="text" name="name" onChange={this.handleNameChange}
                            value={this.state.name} placeholder='Nom du produit' className="form-control" />
                    </div>

                    <div>
                        <label>Quantity: </label>
                        <input value={this.state.quantity} onChange={this.handleQuantityChange}
                            name='quantity' type="text" placeholder='Quantité' className="form-control" />
                    </div>

                    <div>
                        <label>Price: </label>
                        <input value={this.state.price} onChange={this.handleNameChange}
                            name='price' type="text" placeholder='Nom du produit' className="form-control" />
                    </div>

                    <div>
                        <button className="btn btn-success" type="submit">Add new product</button>
                    </div>


                </form>
            </div>
        );
    }
}

export default ProductInput;