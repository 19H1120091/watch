import React,{ useState, useEffect} from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom';
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import Helmet from "../components/Helmet";







const Search = () => {
  window.scrollTo(0, 0);

  const keywords = useParams();

  const searchInput = keywords.keyword;
  const [products, setProducts] = useState([]);
 
    

  useEffect(() => {
   const fetchproducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
     

   };
    fetchproducts();
  }, []);

 
 
    
  return (
    
    <>
    <Helmet title="Search">
    <div className="container"><Grid col={4} mdCol={5} smCol={1} gap={20}>
    {products.filter(product => product.title.includes(keywords.keyword)).map((item, index) => (
      <ProductCard
        key={index}
        id={item._id}
        img01={item.image01}
        img02={item.image02}
        name={item.title}
        price={Number(item.price)}
        slug={item.slug}
        rate= {item.rating}
        review={item.numReviews}

      ></ProductCard>

     
    ))}
     
  </Grid></div>
    </Helmet>
   
     
        
    </>
  )
}

export default Search