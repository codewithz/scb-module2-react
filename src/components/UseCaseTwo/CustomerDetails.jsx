import React from 'react';

const CustomerDetails=(props)=>{

    const customer=props.customer;

    return (

        <div>
            <h3>Customer Details</h3>
            <hr />
            <p>ID:{customer.id}</p>
            <p>Name:{customer.name}</p>
            <p>Email:{customer.email}</p>
            <p>Phone:{customer.phone}</p>
            <p>Account Type:{customer.accountType}</p>

        </div>

    );
}

export default CustomerDetails;