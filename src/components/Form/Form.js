import React, { Component } from 'react';
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
        userInputName: "",
        userInputPrice: 0,
        userInputURL: ""
      });
  }

  render() 
  {
    return (
      <div className="submit-form-contents">
        <p>Image URL:</p>
        <input 
          onChange={(e) => this.setState({userInputURL:e.target.value})} 
          value={this.state.userInputURL}
        />
        <p>Product Name:</p>
        <input 
          onChange={(e) => this.setState({userInputName:e.target.value})} 
          value={this.state.userInputName}
        />
        <p>Price:</p>
        <input 
          onChange={(e) => this.setState({userInputPrice:e.target.value})} 
          value={this.state.userInputPrice}
        />
        <button onClick={() => this.handleCancelButtonEvent()}>Cancel</button>
        <button>Add to Inventory</button>
      </div>
    );
  }
}

export default Form;