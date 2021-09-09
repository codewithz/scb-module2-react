import React from 'react';

function ProductDetails(props){

    const handleSave=()=>{

        //Navigation Code Goes here

       // props.history.push('/products');
        props.history.replace('/products');
    }
    return(

        <div>
            <h1>Product Details - {props.match.params.id}</h1>
            <button className="btn btn-info" onClick={handleSave}>Save</button>
        </div>
    );
}

export default ProductDetails;