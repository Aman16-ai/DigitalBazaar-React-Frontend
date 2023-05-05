import React, { useEffect } from "react";
import style from "./Style/Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserCartThunk,
  getCartItemsThunk,
} from "../store/slice/cart/cartSlice";
import CartItemCard from "../components/CartItemCard";
export default function Cart() {
  const dispatch = useDispatch();
  const user_cart = useSelector((state) => state.cart.user_cart);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    // dispatch(getUserCartThunk());
    dispatch(getCartItemsThunk());
  }, []);

  return (
    <>
      <div className={style["cart-container"]}>
        <div className={style["left"]}>
          {cartItems.map((item) => {
            return (
              <div
                style={{
                  width: "100%",
                  height: "35%",
                  border: "1px solid grey",
                  padding: "10px",
                  marginTop: "5px",
                }}
              >
                <CartItemCard
                  cartItemId={item.id}
                  title={item.product.title}
                  price={item.product.price}
                  imageurl={item.product.product_img}
                  quantity={item.quantity}
                />
              </div>
            );
          })}
        </div>
        <div className={style["right"]}>
          <p id={style["price-heading"]}>PRICE DETAILS</p>
          <hr />
          <div className={style["first"]}>
            <p>Price({user_cart?.getCartTotalItems} item)</p>
            <p id={style["value"]}>
              ₹{user_cart?.getCartOriginalPrice.toLocaleString("en-IN")}
            </p>
          </div>
          <div className={style["first"]}>
            <p>Discount</p>
            <p id={style["value2"]}>
              -₹
              {(
                user_cart?.getCartOriginalPrice - user_cart?.getCartTotal
              ).toLocaleString("en-IN")}
            </p>
          </div>
          <div className={style["first"]}>
            <p>Delivery Charges</p>
            <p id={style["value3"]}>FREE</p>
          </div>
          <hr />
          <div className={style["total-amount-container"]}>
            <p>Total Amount</p>
            <p id={style["value4"]}>
              ₹{user_cart?.getCartTotal.toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
