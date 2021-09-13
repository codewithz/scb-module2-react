import React, { useState } from 'react';
import Joi from 'joi-browser'
import Alert from '@material-ui/lab/Alert';
import { toast } from 'react-toastify';

function CustomerForm(props) {



    const [customer, setCustomer] = useState({
        firstName: '',
        lastName: '',
        email: '',
        pin: 0,
        birthdate: ''
    });

    const [errors, setErrors] = useState({});

    const schema = {
        firstName: Joi.string().min(1).max(20).required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        pin: Joi.number().min(1000).max(9999).required(),
        birthdate: Joi.date().min('2003-01-01').required()
    }



    const handleInput = (event) => {

        const { name, value } = event.target;

        let errorData = { ...errors };
        const errorMessage = validateProperty(event);

        if (errorMessage) {
            errorData[name] = errorMessage;
        }
        else {
            delete errorData[name];
        }

        let customerData = { ...customer };
        customerData[name] = value;
        setCustomer(customerData);
        setErrors(errorData);

    }

    const handleSave = (event) => {

        event.preventDefault();
        const errorsInForm = validateForm();

        if (!errorsInForm) {

            toast.success('Customer Added Successfully');
            clearState();
        }
        else {

            toast.error('Please fill valid customer details and submit ')

        }





    }

    const clearState = () => {
        setCustomer({
            firstName: '',
            lastName: '',
            email: '',
            pin: 0,
            birthdate: ''
        })
    }

    const validateForm = () => {
        const result = Joi.validate(customer, schema, { abortEarly: false });
        console.log(result);

        const { error } = result;

        if (!error) {
            return null;
        }
        else {

            const errorData = {};

            for (let item of error.details) {
                const name = item.path[0];
                const message = item.message;
                errorData[name] = message;
            }
            console.log(errors)
            setErrors(errorData);
            return errorData;
        }


    }

    const validateProperty = (event) => {

        const { name, value } = event.target;

        const obj = { [name]: value };

        const subSchema = { [name]: schema[name] };

        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;

    }



    return (

        <div>
            <h3>Add Customer</h3>
            <hr />

            <form className="ui form">
                <div className="form-group">
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        value={customer.firstName}
                        onChange={handleInput}
                    />
                </div>
                {errors.firstName && <Alert severity="error">{errors.firstName}</Alert>}
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={customer.lastName}
                        onChange={handleInput}
                    />
                </div>
                {errors.lastName && <div className="alert alert-danger">{errors.lastName}</div>}
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={customer.email}
                        onChange={handleInput}
                    />
                </div>
                {errors.email && <div className="alert alert-danger">{errors.email}</div>}
                <div className="form-group">
                    <label>PIN:</label>
                    <input
                        type="number"
                        name="pin"
                        className="form-control"
                        value={customer.pin}
                        onChange={handleInput}
                    />
                </div>
                {errors.pin && <div className="alert alert-danger">{errors.pin}</div>}
                <div className="form-group">
                    <label>Birthdate:</label>
                    <input
                        type="date"
                        name="birthdate"
                        className="form-control"
                        value={customer.birthdate}
                        onChange={handleInput}
                    />
                </div>
                {errors.birthdate && <div className="alert alert-danger">{errors.birthdate}</div>}

                <button
                    className="btn btn-warning"
                    onClick={handleSave}
                >
                    Add Customer
                </button>

            </form>
        </div>
    );
}

export default CustomerForm;
