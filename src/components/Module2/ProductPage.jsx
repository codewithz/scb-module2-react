import React,{useState} from 'react';
import ProductComponent from './ProductComponent';

function ProductPage(){

    const productList=[
        {id:1,name:'Bread',quantity:3},
        {id:2,name:'Butter',quantity:2},
        {id:3,name:'Jam',quantity:1},
        {id:4,name:'Maggi',quantity:5},
        {id:5,name:'Eggs',quantity:6}
    ];

    const [products,setProducts]=useState(productList);

    const removeFromCart=(productId)=>{
        console.log("Product ID",productId);
        const filteredProducts=products.filter((product)=>(product.id!==productId));
        setProducts(filteredProducts);
    }


    return(
        <div>
            Product Page

            {
                products.map((product)=>
                    <ProductComponent 
                        key={product.id}
                        name={product.name} 
                        quantity={product.quantity}
                        id={product.id}
                        onRemove={removeFromCart}
                        />
                )
            }
           
        </div>
    );
}

export default ProductPage;