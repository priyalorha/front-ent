import React, { Component } from 'react'
import formatCurrency from '../util'

export default class ProductList extends Component {
    render() {
        console.log(this.props.products)
       
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
                      <div class="product-price-currency">{formatCurrency(product.price)}</div>
                      <button className="button primary">
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
