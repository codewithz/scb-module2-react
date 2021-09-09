import React,{useState} from 'react';


function ClickCounter(){

    const [counter,setCounter]=useState(0);
    const [company,setCompany]=useState('SCB');
    

    

    const incrementCount=()=>{
        setCounter(counter+1);
    }

    const showFullName=()=>{
        setCompany('Standard Chartered Bank');
    }

    return(
        <div>
            <p>Company Name:{company}</p>
            <p>You have clicked {counter} times</p>
            <button onClick={incrementCount} >Click Me</button>
            &nbsp;
            <button onClick={showFullName}>Full Name</button>
        </div>

    );
}


export default ClickCounter;