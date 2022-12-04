import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
import { createProduct } from "./../../Redux/Actions/ProductActions";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddProductMain = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image01, setImage01] = useState("");
  const [image02, setImage02] = useState("");
  const [type, setType] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const [categorySlug, setCategorySlug] = useState();

  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  useEffect(() => {
    if (product) {
      toast.success("Product Added", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      setTitle("");
      setDescription("");
      setCountInStock(0);
      setImage01("");
      setImage02("");
      setType("");
      setPrice(0);
      setCategorySlug("");
    }
  }, [product, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct(
        title,
        price,
        description,
        image01,
        image02,
        type,
        countInStock,
        categorySlug
      )
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
            <h2 className="content-title">Thêm sản phẩm</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Thêm sản phẩm
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
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
                      className="form-control"
                      id="product_price"
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Số lượng sẵn có
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="product_price"
                      required
                      value={countInStock}
                      onChange={(e) => setCountInStock(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_slug" className="form-label">
                      Phân loại
                    </label>
                    <select
                      placeholder="Type here"
                      className="form-select"
                      id="product_slug"
                      required
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="male">male</option>
                      <option value="smart_watch">smart_watch</option>
                      <option value="female">female</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="product_category" className="form-label">
                      Phân loại sản phẩm
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_category_slug"
                      required
                      value={categorySlug}
                      onChange={(e) => setCategorySlug(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Mô tả</label>
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
                    <label className="form-label">Ảnh 01</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={image01}
                      required
                      onChange={(e) => setImage01(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">Ảnh 02</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={image02}
                     
                      onChange={(e) => setImage02(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
