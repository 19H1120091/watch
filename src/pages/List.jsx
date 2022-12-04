import { React, useState, useEffect } from 'react'
import axios from 'axios';

const List = (props) => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState();

    useEffect(() => {
     const fetchproducts = async () => {
        const { data } = await axios.get("/api/home");
        setProducts(data);
       
  
     };
      fetchproducts();
    }, []);
    
    // console.log(products.filter(product => product.title.includes("Oppo")));

   

  return (
 <>
     {products.filter(product => product.title.includes(query)).map((product, index) => (
        <li key= {index}>
          {product.title}
        </li>
      ))}
 </>
  )
}

export default List