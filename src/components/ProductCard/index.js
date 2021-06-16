import React, { useEffect } from 'react';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductStart,
  setProduct,
} from '../../Redux/Products/products.actions';
import Button from '../Forms/Buttons';

const mapState = (state) => ({
  product: state.productsData.product,
});

const ProductCard = ({}) => {
  const dispatch = useDispatch();
  const { product } = useSelector(mapState);
  const { productID } = useParams();
  const { productName, productThumbnail, productPrice } = product;

  useEffect(() => {
    dispatch(fetchProductStart(productID));
    return () => {
      setProduct({});
    };
  }, []);

  const configtAddToCartBtn = {
    type: 'button',
  };

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} alt="thumbnail" />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>{productName}</h1>
          </li>
          <li>
            <span>${productPrice}</span>
          </li>
          <li>
            <div className="addToCard">
              <Button {...configtAddToCartBtn}>Add to Cart</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
