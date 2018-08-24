import React, { Component } from 'react';
import logo from './logo.svg';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import './App.css';
import axios from 'axios';

class App extends Component 
{
  constructor()
  {
    super();
    this.state =
    {
      productList: [],
      currentlyEditingID: null
    };

    this.getUpdatedInventoryList = this.getUpdatedInventoryList.bind(this);
  }

  getUpdatedInventoryList()
  {
    axios
      .get('/api/inventory')
      .then(response => this.setState({productList: response.data}) )
      .catch(err => console.log(`Error in ComponentDidMount() - ${err}`));
  }

  componentDidMount()
  {
    this.getUpdatedInventoryList();
  }

  render() 
  {
    return (
      <div className="App">
        <Header/>
        <div className="main-body-container">
          <Dashboard 
            productList={this.state.productList}
            updateList={this.getUpdatedInventoryList}/>
          <Form 
            updateList={this.getUpdatedInventoryList}
            currentlyEditingID={this.state.currentlyEditingID}/>
        </div>
      </div>
    ); //return
  }
}

export default App;
