import React, { useEffect, useState } from "react";

import Rating from "../components/homeComponent/Rating";
import { Link, useParams } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductReview,
  listProductDetails,
} from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/ProductConstants";
import { withRouter } from "react-router";
import moment from "moment";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ProductImagesSlider from "./ProductImagesSlider";

const ProductView = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { id } = useParams();

  const productId = id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const loading = productDetails?.loading;
  const error = productDetails?.error;
  const product = productDetails?.product;
  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = userLogin?.userInfo;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successCreateReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };
  const productImages = [
    product.image01,
    product.image02,
    product.image03,
    product.image04,
  ];
  

  return (
    <>
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                {/* <div className="single-image">
                  <img src={product.image01} alt={product.title} />
                </div> */}
                <div
                  style={{
                    height: "50vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "500px",
                      backgroundColor: "#fff",
                      padding: "40px",
                    }}
                  >
                    <ProductImagesSlider images={productImages} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.title}</div>
                  </div>
                  <p>{product.description}</p>

                  <div className="product-count col-lg-7 ">
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Gi?? s???n ph???m</h6>
                      <span>{product.price} &#8363;</span>
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Tr???ng th??i </h6>
                      {product.countInStock > 0 ? (
                        <span>C??n h??ng</span>
                      ) : (
                        <span>T???m h???t h??ng</span>
                      )}
                    </div>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>????nh gi??</h6>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} ????nh gi??`}
                      />
                    </div>
                    {product.countInStock > 0 ? (
                      <>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                          <h6>S??? l?????ng</h6>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <button
                          onClick={AddToCartHandle}
                          className="round-black-btn"
                        >
                          Th??m v??o gi??? h??ng
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* RATING */}
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">????NH GI?? S???N PH???M</h6>
                {product.reviews.length === 0 && (
                  <Message variant={"alert-info mt-3"}>
                    Ch??a c?? ????nh gi??
                  </Message>
                )}
                {product.reviews.map((review) => (
                  <div
                    key={review._id}
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <span>{moment(review.createdAt).calendar()}</span>
                    <div className="alert alert-info mt-3">
                      {review.comment}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h6>VI???T ????NH GI?? C???A B???N</h6>
                <div className="my-4">
                  {loadingCreateReview && <Loading />}
                  {errorCreateReview && (
                    <Message variant="alert-danger">
                      {errorCreateReview}
                    </Message>
                  )}
                </div>
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <div className="my-4">
                      <strong>Ch???t l?????ng</strong>
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      >
                        <option value="">L???a ch???n...</option>
                        <option value="1">1 - R???t T???</option>
                        <option value="2">2 - T???</option>
                        <option value="3">3 - T???t</option>
                        <option value="4">4 - R???t T???t</option>
                        <option value="5">5 - Xu???t s???c 10 ??i???m</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>N???i dung</strong>
                      <textarea
                        row="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button
                        disabled={loadingCreateReview}
                        className="col-12 bg-black border-0 p-3 rounded text-white"
                      >
                        G???I ????NH GI??
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="my-3">
                    <Message variant={"alert-warning"}>
                      Vui l??ng{" "}
                      <Link to="/login">
                        " <strong>????ng nh???p</strong> "
                      </Link>{" "}
                      ????? vi???t ????nh gi??{" "}
                    </Message>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default withRouter(ProductView);
