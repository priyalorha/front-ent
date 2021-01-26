import React, { Component } from "react";
import { Provider } from "react-redux";
import Cart from "./componets/cart";

import FilterElement from "./componets/filter";
import ProductList from "./componets/productList";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header className="brand">
            <a href="/"> No No</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <FilterElement />
                <ProductList />
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer>
            Only for demo purpose <br /> contact priya.lorha@gmail.com...
          </footer>
        </div>
      </Provider>
    );
  }
}
