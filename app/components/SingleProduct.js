import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router'

import ReviewModule from './ReviewModule'

const SingleProduct = (props) => {
  const singleProduct = props.products.singleProduct
  console.log('PROOOOOOPS', props)
  return(
		<div>
			<div className="page-header col-xs-12">
        <h1>{singleProduct.producttype.name}</h1>
      </div>
      <div className="col-xs-12 col-sm-4">
        <img src="http://brewdrkombucha.com/2016/wp-content/uploads/2016/04/organic-raw-brew-dr-kombucha-clear-mind.png" className="img-responsive"/>
      </div>
      <div className="col-xs-12 col-sm-8">
        <h4 className="text-uppercase">Product Description</h4>
        <p>
          {singleProduct.size}
        </p>
        <p>
          {singleProduct.producttype.description}
        </p>
        <p>
          Act fast! Only <b>{singleProduct.remaining}</b> remaining
        </p>
        <a href="#" className="btn btn-default">${singleProduct.price}</a>
      </div>
      <div className="row col-xs-12">
        <div className="page-header col-xs-12">
          <h2>Reviews</h2>
        </div>
        <div className="col-xs-12">
          <ReviewModule/>
        </div>
      </div>
		</div>
  )
}

export default SingleProduct;
