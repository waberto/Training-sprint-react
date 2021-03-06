import React, { Component } from 'react';
import axios from 'axios'
import '../App.css';
import ProductInput from './ProductInput';
//import { Link, Router, Redirect } from 'react-router-dom'


class ProductList extends Component {
    state = {
        products: [],
        showForm: false
    }

    showForm = () => {
        return (
            <div>
                <ProductInput />
            </div>
        );
    }

    componentDidMount() {
        if (this.state.products !== '') {
            axios.get(`http://localhost:9191/products`)
                .then(res => {
                    const products = res.data;
                    this.setState({ products });
                }).catch(err => {
                    console.log(err);
                })
        } else {
            alert('No product added !')
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Product Details</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.products.map(
                            (product, index) =>

                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button className="btn btn-success">Delete</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-success">Edit</button>
                                    </td>
                                </tr>

                        )
                        }

                    </tbody>
                </table>

                <button onClick={() => this.setState({ showForm: true })}>
                    Add Product
                </button>
                {this.state.showForm ? this.showForm() : null}
            </div>
        );
    }
}

export default ProductList;