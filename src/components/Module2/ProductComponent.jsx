import React,{useState} from 'react';

function ProductComponent(props){

    console.log(props);

    const [productName,setProductName]=useState(props.name);
    const[quantity,setQuantity]=useState(props.quantity);

   

    const incrementQuantity=()=>{
        setQuantity(quantity+1);
    };

    const decrementQuantity=()=>{
        setQuantity(quantity-1);
    }

    const formatQuantity=()=>{
        // if(quantity===0){
        //     return 'Zero';
        // }
        // else{
        //     return quantity;
        // }
        return quantity===0?'Zero':quantity;
    }

    const getBadgeClasses=()=>{
        let classes="badge m-2 ";
        classes+=(quantity===0)?'badge-warning':'badge-primary';
        return classes;
    }

    const styles={
        fontSize:16,
        fontWeight:'bold'
    }

    return (

        <div>
            <h4>{productName}</h4>
            <button className="btn btn-secondary btn-sm m-2" onClick={decrementQuantity}>-</button>
            <span style={styles} className={getBadgeClasses()}>{formatQuantity()}</span>
            <button className="btn btn-info btn-sm m-2" onClick={incrementQuantity}>+</button>
            <button 
                className="btn btn-danger btn-sm m-2"
                onClick={()=>props.onRemove(props.id)}
                >
                    Remove from Cart
            </button>
        </div>
    );
}

export default ProductComponent;