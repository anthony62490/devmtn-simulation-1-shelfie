import React, { Component } from 'react';
import './Product.css'

function Product(props)
{
  return(
    <div className='product-box-individual'>
      <img src={props.url}/>
      <div className="product-box-info">
        <p>{props.name}</p>
        <p>${props.price}.99</p>
        <button onClick={() => props.deleteButtonEvent(props.id)}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  )//return
}

export default Product;