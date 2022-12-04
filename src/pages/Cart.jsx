import React, { useEffect } from "react";

import { Link ,useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removefromcart } from "./../Redux/Actions/cartActions";
import numberWithCommas from "../utils/numberWithCommas";
import Helmet from "../components/Helmet";

const Cart = ({ match, location, history }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const { id } = useParams();

  const productId = id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  

  const cart = useSelector((state) => state.cart);
  const  cartItems  = cart?.cartItems;

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const checkOutHandler = () => {
    history.push("/login?redirect=checkout");
  };

  const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id));
  };
  console.log(productId);

  return (
    <>
    <Helmet title="Giỏ hàng">
    {/* Cart */}
    <div className="container">
        {cartItems.length === 0 ? (
          <div className=" alert alert-info text-center mt-3">
            Giỏ hàng của bạn trống
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{
                fontSize: "12px",
              }}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-info text-center mt-3">
              Tổng Số Sản Phẩm
              <Link className="text-success mx-2" to="/cart">
                ({cartItems.length})
              </Link>
            </div>
            {/* cartiterm */}
            {cartItems.map((item, index) => (

              <div className="cart-iterm row" key={index}>
                <div
                  onClick={() => removeFromCartHandle(item.product)}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <Link to={`/catalog/${item.product}`} ><img src={item.image} alt={item.title} /></Link>
                  
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/catalog/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                  <h6>SỐ LƯỢNG</h6>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, Number(e.target.value)))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>GIÁ SẢN PHẨM</h6>
                  <h4>{numberWithCommas(item.price)} &#8363;</h4>
                </div>
              </div>
            ))}

            {/* End of cart iterms */}
            <div className="total">
              <span className="sub">Tổng:</span>
              <span className="total-price">{numberWithCommas(total)} &#8363;</span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6 ">
                <button>Tiếp tục mua sắp</button>
              </Link>
              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={checkOutHandler}>Thanh Toán</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Helmet>
     
      
    </>
  );
};

export default Cart;
