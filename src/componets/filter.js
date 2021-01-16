import React, { Component } from 'react'

export default class FilterElement  extends Component {
    render() {
        return (
            <div className="filter">
                <div className ="filter-result">{this.props.count} Products</div>
                <div className ="filter-sort"> Order{""}
                <select value ={this.products} onChange ={this.props.sortProducts}>
                    <option value="lowest">Lowest to Highest</option>
                    <option value="highest">Highest to lowest</option>
                    <option>new arrivals</option>
                </select>
                
                
                </div>
                <div className ="filter-category"> 
                Filter{" "}
                <select value = {this.props.FilterElement}
                onChange = {this.props.filterProducts}>
                    <option value="toy">toy</option>
                    <option value="Soap">Soap</option>
                    <option value="piggy bank">piggy bank</option>
                    <option value="blanket">blanket</option>
                    <option value="pen">pen</option>
                    
                    </select></div>
                
            </div>
        )
    }
}
