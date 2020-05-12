import React, { Component } from 'react';

class ValidationForm extends Component {

    state = {
        name: "",
        quantity:"",
        price:""
    }


    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }

    validate = () => {
        const nameProductError = "";
        const quantityError = "";
        const priceError = "";

        if (!this.state.name) {
            nameProductError = "Product name cannot be blank"
        }

        if (!this.state.quantity.value && !this.state.price.value ) {
            quantityError = "Quantity cannot be blank and must be a number"
        }

        if (nameProductError || quantityError || priceError) {
            this.setState({ nameProductError, quantityError, priceError });
            return false;
        }

        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState({ name, quantity, price })
        }
    }

    render() {
        return (
            <div>
               <ProductInput /> 
            </div>
        );
    }
}

export default ValidationForm;