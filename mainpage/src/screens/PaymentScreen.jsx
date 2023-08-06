import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../Redux/Actions/CartActions";
import Header from "../components/Header";

const PaymentScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <>
      <Header advanceCheck={false} />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>CHỌN PHƯƠNG THỨC THANH TOÁN</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="checkbox"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "PayPal"}
              />
              <label className="form-check-label">
                PayPal hoặc thẻ tín dụng
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value="COD"
                onChange={(e) => setPaymentMethod(e.target.value)}
                checked={paymentMethod === "COD"}
              />
              <label className="form-check-label">Thanh toán COD</label>
            </div>
          </div>

          <button type="submit">Tiếp tục</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
