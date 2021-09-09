import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Products(){

    const productList=[
        {id:1,name:'Product 1'},
        {id:2,name:'Product 2'},
        {id:3,name:'Product 3'},
    ];

    const [products,setProducts]=useState(productList);


    return (
      <div>
          <h1>Products</h1>
          <hr />
          <ul>
              {
                  products.map((product)=>
                  <li><Link to={`/products/${product.id}`}>{product.name}</Link></li>
                  )
              }
          </ul>
      </div>
    );
}

export default Products;
