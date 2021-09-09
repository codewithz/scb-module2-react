import React,{useState} from 'react';

function CustomerForm(props){

    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');

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

        console.log(event);

        const sourceElement=event.target.name;

        if(sourceElement==='firstName'){
            setFirstName(event.target.value);
        }
        if(sourceElement==='lastName'){
            setLastName(event.target.value);
        }
        if(sourceElement==='email'){
            setEmail(event.target.value);
        }

        
    }

    const handleSave=(event)=>{

        event.preventDefault();

        const customer={
            firstName:firstName,
            lastName:lastName,
            email:email
        }
        props.saveCustomer(customer);
        clearState();

    }

    const clearState=()=>{
        setFirstName('');
        setLastName('');
        setEmail('');
    }



    return(

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
                        value={firstName}
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input 
                        type="text"
                        name="lastName"
                        className="form-control"
                        value={lastName}
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input 
                        type="email"
                        name="email"
                        className="form-control"
                        value={email}
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
