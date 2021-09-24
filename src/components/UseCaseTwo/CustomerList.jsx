import React,{useState,useEffect} from 'react';
//import customerData from './customer.json';
import CustomerForm from './CustomerForm';
import CustomerDetails from './CustomerDetails';
import axios from 'axios';
import config from '../../config.json';

import { toast } from 'react-toastify';

function CustomerList(){

   const baseURL=config.baseURL;

    const[customers,setCustomers]=useState([]);
    const[selectedCustomer,setSelectedCustomer]=useState(null);
    const[id,setId]=useState(0);

    useEffect(()=>{
            getCustomers();
    },[]);

    const getCustomers=async ()=>{
        //promise[pending] > resolved(success) OR rejected(failure)
      //  const promise=axios.get('http://localhost:9009/api/v1/pioneers/common/customer');
      const apiEndpoint=baseURL+'/customer';  
      
      const response=await axios.get(apiEndpoint);;
        //console.log(response.data.body)
        setCustomers(response.data.body);
    }

    const tableRows=customers.map((customer)=>{
    return  (
    <tr key={customer.id} onClick={()=>onCustomerSelect(customer)}>
     <td>{customer.id}</td>   
     <td>{customer.name}</td>   
     <td>{customer.email}</td>   
     <td>{customer.phone}</td>   
     <td>{customer.accountType}</td>   
     <td>
         <button className="btn btn-warning btn-sm"
            onClick={()=>setId(customer.id)}
         >Show</button>
        &nbsp;
         <button className="btn btn-danger btn-sm"
            onClick={(event)=>deleteCustomer(event,customer.id)}
         
         >Delete</button>
     </td>
    </tr>
    )}
    );

    const onCustomerSelect=(customer)=>{
        setSelectedCustomer(customer);
    }


    const deleteCustomer=async(event,id)=>{

        event.preventDefault();
        

        const apiEndpoint=`${baseURL}/customer/10001`;
        try{
        const response=await axios.delete(apiEndpoint);
         if(response.data.status===200){
             toast.success('Customer Deleted Successfully');

             let updatedCustomers=customers.filter(
                 (customer)=>customer.id!==id
             );

             setCustomers(updatedCustomers);
         }
        }
        catch(ex){

            console.log('ex.Request--->',ex.request);
            console.log('ex.Response--->',ex.response);
            
            //Expected [404:Not Found | 400: Bad Request] -- CLIENT ERRORS
            //-- Display a specific error message

            if(ex.response && ex.response.status===404){
                toast.error(ex.response.data.message);
            }
            //
            //Unexpected [Network Down | Server Down | DB Down | Bug]
            //--Log Them
            //-- Display a generic and friendly message Message 
            else{
                toast.error(' 🚨 Some unexpected error occurred!!');

            }
         //   toast.error('Something went wrong while deleting');

        }

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
                       <th>Name</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>Account Type</th>
                       <th>Actions</th>
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
                    <CustomerForm id={id}/>
                
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