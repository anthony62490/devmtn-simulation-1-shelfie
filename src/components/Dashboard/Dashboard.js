import React, { Component } from 'react';
import axios from 'axios';
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
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id)
  {
    axios
      .delete(`/api/products/delete/${id}`)
      .then(response => 
      {
        //call the parent's update function to refresh the contents
        this.props.updateList();
        // response.sendStatus(200);
      })
      .catch(err=> console.log("Error in deleteItem()", err));
  }

  render() 
  {
    return (
      <div className="main-product-feed">
        {this.props.productList.map( (e, i) =>
          <Product 
            key={e.id}
            id={e.id} //needed for the buttons to have a reference number
            name={e.name}
            price={e.price}
            url={e.image}
            deleteButtonEvent={this.deleteItem}
          />
        )}
      </div>
    );//return
  }
}

export default Dashboard;