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
      productList: []
      //   {id: 0, name: 'Dictionary of Russian...', price: 4, image: 'http://pictures.abebooks.com/isbn/9780933884540-uk-300.jpg'},
      //   {id: 1, name: 'How to Sharpen Pencils', price: 12, image: 'http://i.gr-assets.com/images/S/photo.goodreads.com/books/1388632898i/12862903._UY468_SS468_.jpg'},
      //   {id: 2, name: 'The Mullet: Hairstyle...', price: 15, image: 'http://scout.cheatsheet.me/wp-content/uploads/2014/09/b7288bae2f6f020d2ce4110150ef31f6_650x.jpg'}
      // ]
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
        <Dashboard productList={this.state.productList}/>
        <Form updateList={this.getUpdatedInventoryList}/>
      </div>
    ); //return
  }
}

export default App;
