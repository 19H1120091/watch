import React, { useState, useEffect } from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  updateProduct,
} from "./../../Redux/Actions/ProductActions";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstants";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditProductMain = (props) => {
  const { productId } = props;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image01, setImage01] = useState("");
  const [image02, setImage02] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = productEdit;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      toast.success("Product Updated", ToastObjects);
    } else {
      if (!product.title || product._id !== productId) {
        dispatch(editProduct(productId));
      } else {
        setTitle(product.title);
        setDescription(product.description);
        setCountInStock(product.countInStock);
        setImage01(product.image01);
        setImage02(product.image02);
        setPrice(product.price);
      }
    }
  }, [product, dispatch, productId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        title,
        price,
        description,
        image01,
        image02,
        countInStock,
      })
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Quay lại
            </Link>
            <h2 className="content-title">Cập nhật sản phẩm</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Cập nhật
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          Tên sản phẩm
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          id="product_title"
                          required
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                        Giá
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Số lượng
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={countInStock}
                          onChange={(e) => setCountInStock(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Mô tả </label>
                        <textarea
                          placeholder="Type here"
                          className="form-control"
                          rows="7"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Ảnh01</label>
                        <input
                          className="form-control"
                          type="text"
                          value={image01}
                          required
                          onChange={(e) => setImage01(e.target.value)}
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Ảnh 02</label>
                        <input
                          className="form-control"
                          type="text"
                          value={image02}
                          required
                          onChange={(e) => setImage02(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
