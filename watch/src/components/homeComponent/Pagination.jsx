import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({totalPosts, postsPerPage}) => {
  let pages = [];

  for (let i  = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  console.log(Math.ceil(totalPosts / postsPerPage));
  return (
 
      <>
        {pages.map((page,index) => (
         <button key={index}>{page}</button>
        ))}


      </>
    )
  
};

export default Pagination;
