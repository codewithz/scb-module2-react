import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../config.json';

function CustomerForm(props){

    const baseURL=config.baseURL;

    const[customer,setCustomer]=useState({
        id:0,
        name:"",
        email:"",
        phone:0,
        accountType:""
    });

    useEffect(()=>{
       loadCustomer();
    },[props.id])

    const loadCustomer=async ()=>{
        if(props.id>0){
            const apiEndpoint=`${baseURL}/customer/${props.id}`;
            const response=await axios.get(apiEndpoint);
            setCustomer(response.data.body);
         }

    }

    // const[firstName,setFirstName]=useState('');
    // const[lastName,setLastName]=useState('');
    // const[email,setEmail]=useState('');

    // const handleFirstName=(event)=>{
    //     console.log('event',event)
    //     setFirstName(event.target.value);
    // }
    // const handleLastName=(event)=>{
    //     console.log('event',event)
    //     setLastName(event.target.value);
    // }
    // const handleEmail=(event)=>{
    //     console.log('event',event)
    //     setEmail(event.target.value);
    // }

    //--------------- Refactored------------------

    const handleInput=(event)=>{

        const {name,value}=event.target;

        let customerCopy={...customer};
        customerCopy[name]=value;
        setCustomer(customerCopy);

        // console.log(event);

        // const sourceElement=event.target.name;

        // if(sourceElement==='firstName'){
        //     setFirstName(event.target.value);
        // }
        // if(sourceElement==='lastName'){
        //     setLastName(event.target.value);
        // }
        // if(sourceElement==='email'){
        //     setEmail(event.target.value);
        // }

        
    }

    const handleSave=async (event)=>{

        event.preventDefault();
        
        //Validation Code
        if(customer.id===0){
        const apiEndpoint=baseURL+"/customer";
        const response=await axios.post(apiEndpoint,customer);
        console.log(response.data);
        if(response.data.status===201){
            toast.success('Customer Added Successfully');
            clearState();
        }
    }
    else{
        const apiEndpoint=baseURL+"/customer/"+customer.id;
        const response=await axios.put(apiEndpoint,customer);
        console.log(response.data);
        if(response.data.status===200){
            toast.warning('Customer Updated Successfully');
            clearState();
        }
    }


    }

    const clearState=()=>{
      
       const blankCustomer={
        id:0,
        name:"",
        email:"",
        phone:0,
        accountType:""
    };

    setCustomer(blankCustomer);
    }

    const clearForm=(event)=>{
        event.preventDefault();
        const blankCustomer={
         id:0,
         name:"",
         email:"",
         phone:0,
         accountType:""
     };
 
     setCustomer(blankCustomer);
     }



    return(

        <div>
            <h3>Add Customer</h3>
            <hr />

            <form className="ui form">
                <div className="form-group">
                    <label> Name:</label>
                    <input 
                        type="text"
                        name="name"
                        className="form-control"
                        value={customer.name}
                        onChange={handleInput}
                    />
                </div>
               
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
                <div className="form-group">
                    <label>Phone:</label>
                    <input 
                        type="text"
                        name="phone"
                        className="form-control"
                        value={customer.phone}
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label>Account Type:</label>
                    <input 
                        type="text"
                        name="accountType"
                        className="form-control"
                        value={customer.accountType}
                        onChange={handleInput}
                    />
                </div>

                <button 
                    className="btn btn-warning"
                    onClick={handleSave}
                    >    
                        Add Customer
                </button>

                &nbsp;
                <button 
                    className="btn btn-info"
                    onClick={clearForm}
                    >    
                        Clear Form
                </button>

            </form>
        </div>
    );
}

export default CustomerForm;
