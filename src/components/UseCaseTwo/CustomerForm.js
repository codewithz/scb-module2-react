import React,{useState} from 'react';

function CustomerForm(props){

    const baseURL='http://localhost:9009/api/v1/pioneers/common';

    const[customer,setCustomer]=useState({
        id:0,
        name:"",
        email:"",
        phone:0,
        accountType:""
    });

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

    const handleSave=(event)=>{

        event.preventDefault();

        const customer={
           
        }
        props.saveCustomer(customer);
        clearState();

    }

    const clearState=()=>{
        // setFirstName('');
        // setLastName('');
        // setEmail('');
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

            </form>
        </div>
    );
}

export default CustomerForm;
