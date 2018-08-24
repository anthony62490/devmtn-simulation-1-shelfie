import React, { Component } from 'react';
import './Product.css'

function Product(props)
{
  return(
    <div className='product-box-individual'>
      <p>{props.name}</p>
      <p>${props.price}.99</p>
      <img src={props.url}/>
    </div>
  )//return
}

export default Product;