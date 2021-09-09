import React,{useState} from 'react';
import customerData from './customer.json';
import CustomerForm from './CustomerForm';
import CustomerDetails from './CustomerDetails';

function CustomerList(){

    const[customers,setCustomers]=useState(customerData);
    const[selectedCustomer,setSelectedCustomer]=useState(null);

    const tableRows=customers.map((customer)=>{
    return  (
    <tr key={customer.id} onClick={()=>onCustomerSelect(customer)}>
     <td>{customer.id}</td>   
     <td>{customer.firstName}</td>   
     <td>{customer.lastName}</td>   
     <td>{customer.email}</td>   
    </tr>
    )}
    );

    const onCustomerSelect=(customer)=>{
        setSelectedCustomer(customer);
    }

    

    const addCustomer=(customer)=>{

        const totalCustomers=customers.length;
        customer.id=totalCustomers+1;
        let customerList=[...customers];
        customerList.push(customer);
        setCustomers(customerList);

    }

    return(

        <div>
            <h3>Customer List</h3>
            <table className="table table-bordered table-hover table-striped">
                <thead>
                   <tr>
                       <th>ID</th>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Email</th>
                   </tr>
                </thead>
                <tbody>
                        {tableRows}
                </tbody>
            </table>
            <br />
            <br />

            <div className="row">
                <div className="col-md-6">
                    <CustomerForm saveCustomer={addCustomer}/>
                
                </div>

                <div className="col-md-2">
                    
                </div>

                <div className="col-md-4">
                {   selectedCustomer ? <CustomerDetails customer={selectedCustomer}/>:null}
                </div>
            s
            </div>

        </div>

    );
}

export default CustomerList;