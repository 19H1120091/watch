import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { updateItem, removeItem } from "../Redux/Shopping-Cart/cartItemsSlide";

import numberWithCommas from "../utils/numberWithCommas";
import { Link } from "react-router-dom";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const itemRef = useRef(null);

  const [item, setItem] = useState(props.item);
  const [quantity, setQuantity] = useState(props.item.quantity);

  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const callToCart = (event) => {
    const a = event.target.value;
    dispatch(updateItem({ ...item, quantity: Number(a) }));
  };

  const removeCartItem = () => {
    console.log("removeCartItem");
    dispatch(removeItem(item));
  };
  console.log(props);

  return (
    <div className="cart-iterm row">
      <div
        onClick={() => removeCartItem(item.product)}
        className="remove-button d-flex justify-content-center align-items-center"
      >
        <i className="fas fa-times"></i>
      </div>
     
      <div className="cart-image col-md-3">
      <Link to={`/catalog/${item.product.slug}`} ><img src={item.product.image01} alt={item.product.title} /> </Link>
        
      </div>
      <div className="cart-text col-md-5 d-flex align-items-center">
        <Link to={`/catalog/${item.slug}`}>
          <h4>{item.title}</h4>
        </Link>
      </div>
      <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
        <h6>SỐ LƯỢNG</h6>
        <select value={quantity} onChange={callToCart}>
          {[...Array(item.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
        <h6>ĐƠN GIÁ</h6>
        <h4>{item.price}đ</h4>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
