import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router'

import SingleProduct from './SingleProduct';

const ProductModule = (props) => {
  return (
    <div className="col-xs-6 col-sm-3">
      <Link to="/single-product">
        <img src="http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png" className="img-responsive"/>
      </Link>
      <h4>Card title</h4>
      <p>Some quick example text to build on the card title and make up the bulk of the cards content.</p>
      <a href="#" className="btn btn-primary">Add To Cart</a>
    </div>
  )
}

export default ProductModule;