import React, { Component } from 'react'
import { connect } from 'react-redux';
import {filterProducts,sortProducts} from '../actions/productActions'

class FilterElement  extends Component {
    render() {

        console.log(`props ${JSON.stringify(this.props)}`)
        return (
            !this.props.filterProducts?
            <div>Loading..</div>:(
                <div className="filter">
                <div className ="filter-result">{this.props.filterProducts.length} Products</div>
                <div className ="filter-sort"> Order{""}
                <select value ={this.props.sort} onChange ={(e)=>this.props.sortProducts(
                    this.props.products,
                    e.target.value )}>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to lowest</option>
                    <option>new arrivals</option>
                </select>
                
                
                </div>
                <div className ="filter-category"> 
                Filter{" "}
                <select value = {this.props.FilterElement}
                onChange = {(e)=>this.props.filterProducts(this.props.products,e.target.value)}>
                    <option value="toy">toy</option>
                    <option value="Soap">Soap</option>
                    <option value="piggy bank">piggy bank</option>
                    <option value="blanket">blanket</option>
                    <option value="pen">pen</option>
                    
                    </select></div>
                
            </div> 
            )
            
        )
    }
}

export default connect(
    (state) => ({
      size: state.products.size,
      sort: state.products.sort,
      products: state.products.items,
      filteredProducts: state.products.filteredItems ,
    }),
    {
      filterProducts,
      sortProducts,
    }
  )(FilterElement);