import React, { Component } from 'react';
import FilterElement from './componets/filter';
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
    };
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
      a.price<b.price?1:-1:
      sort === "highest"?
      a.price>b.price?1:-1:a._id<b._id?1:-1 )}))

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
    console.log(this.state.products)
    return (
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
            <ProductList products={this.state.products}/></div>
          <div className="sidebar"></div>
        </div>

        </main>
        <footer>Only for demo purpose <br/> contact priya.lorha@gmail.com...</footer>

      </div>
    )
  }
}
