import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Style/Product.module.css";
import { clearState, getProductById } from "../store/slice/product/productSlice";
import { useSelector, useDispatch } from "react-redux";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import { Button, Stack } from "@mui/material";
import { addItemToCartThunk } from "../store/slice/cart/cartSlice";
export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  useEffect(() => {
    dispatch(getProductById(id));
    return ()=> {
      dispatch(clearState())
    }
  }, []);

  const handleAddItemToCart = async () => {
    console.log("adding item cart btn");
    const item = { product_id: id, quantity: 1, product: product };
    console.log(item);
    dispatch(addItemToCartThunk(item));
  };
  return (
    <>
      <div className={style["product-container"]}>
        <div className={style["left"]}>
          <img src={product?.product_img} alt="" />
          <Stack style={{ width: "80%", marginTop: "5%" }} direction={"row"}>
            <Button
              variant="contained"
              onClick={handleAddItemToCart}
              style={{
                fontWeight: "bold",
                backgroundColor: "#ff9f00",
                boxShadow: "0 1px 2px 0 rgba(0,0,0,.2)",
                marginRight: "20px",
              }}
              className={style["additembtn"]}
            >
              Add to cart
            </Button>
            <Button
              variant="contained"
              style={{
                fontWeight: "bold",
                backgroundColor: "#fb641b",
                boxShadow: "0 1px 2px 0 rgba(0,0,0,.2)",
              }}
              className={style["additembtn"]}
            >
              Buy Now
            </Button>
          </Stack>
        </div>
        <div className={style["right"]}>
          <h6 id={style["product-title"]}>{product?.title}</h6>

          <div className={style["price-container"]}>
            <h4 id={style["price-title"]}>
              ₹{product?.getFinalPrice?.toLocaleString("en-In")}
            </h4>
            <p id={style["original-price-title"]}>
              <del>₹{product?.price?.toLocaleString("en-In")}</del>
            </p>
            <p id={style["discount-price-para"]}>{product?.discount}% off</p>
          </div>

          <div className={style["description-container"]}>
            <p>{product?.description}</p>
          </div>
          <div className={style["content-container"]}>
            <FroalaEditorView model={product?.content} />
          </div>
        </div>
      </div>
    </>
  );
}
