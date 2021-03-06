import React from 'react';
import Button from '../../Forms/Buttons';
import { Link } from 'react-router-dom';

const Product = ({
  documentID,
  productThumbnail,
  productName,
  productPrice,
}) => {
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === 'undefined'
  )
    return null;
  const configAddtoCartBtn = {
    type: 'button',
  };
  return (
    <div className="product">
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>
      <div className="details">
        <ul>
          <li>
            <Link to={`/product/${documentID}`}>
              <span className="name">{productName}</span>
            </Link>
          </li>
          <li>
            <span className="price">${productPrice}</span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddtoCartBtn}>Add to cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
