import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';

class Dashboard extends Component 
{
  constructor(props)
  {
    super(props);
    // this.state =
    // {

    // };
  }
  render() 
  {
    return (
      <div className="main-product-feed">
        {this.props.productList.map( (e, i) =>
          <Product 
            key={e.id}
            name={e.name}
            price={e.price}
            url={e.image}
          />
        )}
      </div>
    );//return
  }
}

export default Dashboard;