import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Cart from './componets/cart';

import FilterElement from './componets/filter';
import ProductList from './componets/productList';
import data from './data.json';
import store from './store';

export default class App extends Component {
  constructor()
  {
    super();
    this.state = {
      products: data.products,
      cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
      sort : "",
      category:""
    };
  }

  createOrder = (order) =>
  {
    alert (`Need to save order for  + ${order.name}`)
  }


  addToCart = (product)=>
  {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item=>{if(item._id===product._id){
      item.count++;
    alreadyInCart = true;}})
    if(!alreadyInCart)
    { cartItems.push({...product,count:1})}

    this.setState({cartItems});
    localStorage.setItem("cartItems",
    JSON.stringify(cartItems));
   
  }
  sortProducts=(events) =>
  {
    const sort= events.target.value;
    console.log(sort)
    this.setState((state)=> ({
      sort:sort,
      products:this.state.products
     .slice()
      .sort((a,b)=>
        sort ==="lowest"?
      a.price>b.price?1:-1:
      sort === "highest"?
      a.price<b.price?1:-1:a._id<b._id?1:-1 )}))

  };

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    console.log(`product ${product}`)
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x._id !== product))
    );
  };

  filterProducts = (category)=>
  { if(category.target.value===''){
    this.setState({category,product:data.products})

  }
    else{this.setState({
      category:category.target.value,
      products: data.products.filter(product=>product.category
        .indexOf(category.target.value)>=0)
    })}

  }
  render() {
    return (
      <Provider store ={store}>
      <div className="grid-container">
        <header className="brand">
        <a href ='/'> No No</a>
        </header>
        <main>

         
        <div className="content">
          
          <div className ="main">
          <FilterElement count = {this.state.products.length}
          price = {this.state.price}
          category = {this.state.category}
          filterProducts ={this.filterProducts}
          sortProducts = {this.sortProducts} />
          <ProductList products={this.state.products} addToCart={this.addToCart }/></div>
          <div className="sidebar"><Cart cartItems ={this.state.cartItems}
          
          removeFromCart = {this.removeFromCart}
          createOrder = {this.createOrder}
          /></div>
        </div>

        </main>
        <footer>Only for demo purpose <br/> contact priya.lorha@gmail.com...</footer>

      </div>
      </Provider>
    )
  }
}
