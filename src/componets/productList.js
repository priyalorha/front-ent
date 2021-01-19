import React, { Component } from 'react'
import formatCurrency from '../util'

export default class ProductList extends Component {
    render() {
        return (
            <div className="products">
                <ul className="products">
                {this.props.products.map((product) => (
                <li key={product._id}>
                  <div className="product">
                    <a href={"#" + product._id}>
                      <img src={product.image} alt={product.name}></img>
                      <p>{product.name}</p>
                    </a>
                    <div className="product-price">
                      <div className="product-price-currency">{formatCurrency(product.price)}</div>
                      <button onClick= {()=>this.props.addToCart(product)} className="button primary">
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </li>
                ))}
                </ul>
            </div>
        )
    }
}