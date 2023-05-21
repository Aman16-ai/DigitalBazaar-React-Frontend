import testimg from "../static/flipmob.webp";
import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../config";
import { useDispatch } from "react-redux";
import { decrementCartItemQuantityThunk, incrementCartItemQuantityThunk } from "../store/slice/cart/cartSlice";
import { Stack } from "@mui/material";
const CartItemCard = ({ cartItemId,title, price, imageurl, quantity,finalPrice,discount }) => {
  const [quantityCount, setQuantityCount] = useState(1);
  const dispatch = useDispatch()
  const handleDecreaseQuantity = () => {
    const payload = {"cartItemId":cartItemId,"quantity":1}
    dispatch(decrementCartItemQuantityThunk(payload))
  };

  const handleIncreaseQuantity = async() => {
    // if (quantity < 100) {
    //   setQuantityCount(quantity + 1);
    // }
    const payload = {"cartItemId":cartItemId,"quantity":1}
    dispatch(incrementCartItemQuantityThunk(payload))
  };

  useEffect(() => {
    setQuantityCount(quantity);
  }, [quantity]);
  return (
    <div
      className="cart-item-card"
      style={{ display: "flex", marginBottom: "20px" }}
    >
      <div
        className="item-image-container"
        style={{ width: "30%", marginRight: "20px" }}
      >
        <img
          src={`${SERVER_URL}${imageurl}`}
          alt={title}
          className="item-image"
          style={{ width: "80%", height: "80%" }}
        />
      </div>
      <div className="item-details" style={{ width: "70%" }}>
        <h3
          className="item-name"
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          {title}
        </h3>
        <Stack direction={"row"}>
        <p
          className="item-price"
          style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "10px" }}
        >
          ₹{finalPrice.toLocaleString('en-in')}
        </p>
        <p
          className="item-price"
          style={{ fontSize: "1rem", marginBottom: "10px",marginLeft:"15px" }}
        >
          <del>₹{price.toLocaleString('en-in')}</del>
        </p>
        <p
          className="item-price"
          style={{ fontSize: "1rem", marginBottom: "10px",marginLeft:"15px",color:"green" }}
        >
          {discount}% Off
        </p>
        </Stack>
        <div
          className="quantity-container"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <button
            className="quantity-button"
            onClick={handleDecreaseQuantity}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#ccc",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 5px",
              borderRadius: "5px",
              backgroundColor: "#f44336",
            }}
          >
            -
          </button>
          <input
            type="number"
            value={quantityCount}
            onChange={(e) => setQuantityCount(parseInt(e.target.value))}
            className="quantity-input"
            style={{
              width: "50px",
              height: "30px",
              textAlign: "center",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
            min="1"
            max="100"
          />
          <button
            className="quantity-button"
            onClick={handleIncreaseQuantity}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: "#ccc",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 5px",
              borderRadius: "5px",
              backgroundColor: "#4caf50",
            }}
          >
            +
          </button>
        </div>
        <button
          className="remove-button"
          style={{
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Remove
        </button>
      <div style={{width:"100%",height:"37%"}}>
          <p style={{fontSize:"1.8rem",textAlign:"right"}}>SubTotal : {finalPrice.toLocaleString('en-in')} X {quantity} = ₹{(finalPrice * quantity).toLocaleString('en-in')}</p>
      </div>
      </div>
    </div>
  );
};

export default CartItemCard;
