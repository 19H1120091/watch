import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, payOrder } from "../Redux/Actions/OrderActions";
import Loading from "./../components/LoadingError/Loading";
import Message from "./../components/LoadingError/Error";
import moment from "moment";
import axios from "axios";
import { ORDER_PAY_RESET } from "../Redux/Constants/OrderConstants";
import numberWithCommas from "../utils/numberWithCommas";
import Helmet from "../components/Helmet";

const OrderScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const [sdkReady, setSdkReady] = useState(false);
 
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }
 

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };
  
  
  return (
    <>
      <Helmet title="????n H??ng">
      <div className="container">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row  order-detail">
              <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Kh??ch h??ng</strong>
                    </h5>
                    <p>{order.user.name}</p>
                    <p>
                      <a href={`mailto:${order.user.email}`}>
                        {order.user.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-truck-moving"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>Th??ng tin ????n h??ng</strong>
                    </h5>
                    <p>?????a ch???: {order.shippingAddress.country}</p>
                    <p>Ph????ng th???c thanh to??n: {order.paymentMethod}</p>
                    {order.isPaid ? (
                      <div className="bg-info p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Thanh to??n:  {moment(order.paidAt).format("HH:mm DD/MM/yyyy")}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-danger p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Ch??a thanh to??n
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
                <div className="row">
                  <div className="col-md-4 center">
                    <div className="alert-success order-box">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                  </div>
                  <div className="col-md-8 center">
                    <h5>
                      <strong>V???n chuy???n ?????n</strong>
                    </h5>
                    <p>
                      ?????a ch???:
                      {order.shippingAddress.address},{" "}
                       {order.shippingAddress.city}{" "}
                      
                     
                    </p>
                    <p>S??? ??i???n tho???i: {order.shippingAddress.postalCode}</p>
                    {order.isDelivered ? (
                      <div className="bg-info p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          Giao h??ng l??c: {moment(order.deliveredAt).format("HH:mm DD/MM/yyyy")}
                        </p>
                      </div>
                    ) : (
                      <div className="bg-danger p-2 col-12">
                        <p className="text-white text-center text-sm-start">
                          ??ang chu???n b???
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="row order-products justify-content-between">
              <div className="col-lg-8">
                {order.orderItems.length === 0 ? (
                  <Message variant="alert-info mt-5">
                    Gi??? h??ng c???a b???n tr???ng
                  </Message>
                ) : (
                  <>
                    {order.orderItems.map((item, index) => (
                      <div className="order-product row" key={index}>
                        <div className="col-md-3 col-6">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="col-md-5 col-6 d-flex align-items-center">
                          <Link to={`/products/${item.product}`}>
                            <h6>{item.name}</h6>
                          </Link>
                        </div>
                        <div className="mt-3 mt-md-0 col-md-2 col-6  d-flex align-items-center flex-column justify-content-center ">
                          <h4>S??? L?????NG</h4>
                          <h6>{item.qty}</h6>
                        </div>
                        <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center ">
                          <h4>T???NG TI???N</h4>
                          <h6>{numberWithCommas(item.qty * item.price)} &#8363;</h6>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              {/* total */}
              <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>
                        <strong>S???n ph???m</strong>
                      </td>
                      <td>{numberWithCommas(order.itemsPrice)} &#8363;</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Shipping</strong>
                      </td>
                      <td>{order.shippingPrice} &#8363;</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Tax</strong>
                      </td>
                      <td>{order.taxPrice} &#8363;</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>T???ng ti???n</strong>
                      </td>
                      <td>{numberWithCommas(order.totalPrice)} &#8363;</td>
                    </tr>
                  </tbody>
                </table>
                
                {(order.paymentMethod === "Paypal") &&!order.isPaid &&  (
                  <div className="col-12">
                    {loadingPay && <Loading />}
                    {!sdkReady ? (
                      <Loading />
                    ) : (
                      <PayPalButton
                        amount={order.totalPrice} 
                        onSuccess={successPaymentHandler}
                      />
                    )}
                  </div>
                )}
                
              </div>
            </div>
          </>
        )}
      </div>
      </Helmet>
      
      
    </>
  );
};

export default OrderScreen;
