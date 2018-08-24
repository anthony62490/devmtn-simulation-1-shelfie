import React, { Component } from 'react';
import axios from 'axios';
import './Form.css';

class Form extends Component 
{
  constructor()
  {
    super();
    this.state =
    {
      userInputName: "",
      userInputPrice: 0,
      userInputURL: ""
    };

    this.handleCancelButtonEvent = this.handleCancelButtonEvent.bind(this);
  }

  handleCancelButtonEvent()
  {
    //resets all user-input values to initial states
    this.setState(
      {
        newName: "",
        newPrice: 0,
        newImage: ""
      });
    
      this.postNewItem = this.postNewItem.bind(this);
  }

  postNewItem()
  {
    const { newName, newPrice, newImage } = this.state;
    axios
      .post('/api/product', {newName, newPrice, newImage})
      .then(response => 
      {
        console.log(response)
      })
      .catch(err => console.log(`Error in postNewItem() - ${err}`));
  }

  render() 
  {
    return (
      <div className="submit-form-contents">
        <p>Image URL:</p>
        <input 
          onChange={(e) => this.setState({newImage:e.target.value})} 
          value={this.state.userInputURL}/>

        <p>Product Name:</p>
        <input 
          onChange={(e) => this.setState({newName:e.target.value})} 
          value={this.state.userInputName}/>

        <p>Price:</p>
        <input 
          onChange={(e) => this.setState({newPrice:e.target.value})} 
          value={this.state.userInputPrice}/>

        <button onClick={() => this.handleCancelButtonEvent()}>Cancel</button>
        <button onClick={() => this.postNewItem()}>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;