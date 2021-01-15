import React, { Component } from 'react';
import ProductList from './componets/productList';
import data from './data.json';

export default class App extends Component {
  constructor()
  {
    super();
    this.state = {
      products: data.products,
      sort : "",
      category:""
    }
  }
  render() {
    console.log(this.state.products)
    return (
      <div className="grid-container">
        <header className="brand">
        <a href ='/'> No No</a>
        </header>
        <main>

         
        <div className="content">

          <div className ="main">
            <ProductList products={this.state.products}/></div>
          <div className="sidebar"></div>
        </div>

        </main>
        <footer>Only for demo purpose <br/> contact priya.lorha@gmail.com...</footer>

      </div>
    )
  }
}
