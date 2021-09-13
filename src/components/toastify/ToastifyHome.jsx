import React from 'react';
import {toast} from 'react-toastify';

function ToastifyHome(){

    const showInfo=()=>{
        toast.info('This is an info toast');
    }
    const showSuccess=()=>{
        toast.success('This is a success toast');
    }
    const showError=()=>{
        toast.error('This is an error toast');
    }
    const showWarning=()=>{
        toast.warning('This is a warning toast');
    }


    return (
        <div>
            Toastify Home

            <button className="btn btn-info" onClick={showInfo}>Info</button>&nbsp;
            <button className="btn btn-success" onClick={showSuccess}>Success</button>&nbsp;
            <button className="btn btn-danger" onClick={showError}>Error</button>&nbsp;
            <button className="btn btn-warning" onClick={showWarning}>Warning</button>&nbsp;
        </div>
    );
}

export default ToastifyHome;