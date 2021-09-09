import React from 'react';

function AlertComponent(){
    
    const showAlert=()=>{
        alert('React is very good library!!');
    }

    return(
        <div>
            <button onClick={showAlert}>Click Me</button>
        </div>
    );
}

export default AlertComponent;