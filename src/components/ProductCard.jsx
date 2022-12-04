import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../components/homeComponent/Rating";
import Pagination from "./homeComponent/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import PropTypes from "prop-types";

import numberWithCommas from "../utils/numberWithCommas";

const ProductCard = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.id}`}>
        <div className="product-card__image">
          <img src={props.img01} alt="" />
          <img src={props.img02} alt="" />
        </div>
        <div className="product-card__name">{props.name}</div>
        <div className="product-card__price">
          {numberWithCommas(props.price) } &#8363;
          {/* <span className="product-card__price__old">
            <del>{numberWithCommas(599000)}</del>
          </span> */}
        </div>
        <div className="product-card__rating">
          <Rating value={props.rate} text={`${props.review} reviews`} />
        </div>
      </Link>
      <div className="frame">
      <Link to={`/catalog/${props.id}`}>
      <button className="custom-btn btn-14" variant="primary">
          Mua ngay
        </button>
      </Link>
        
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  review: PropTypes.number.isRequired,
};

export default ProductCard;
