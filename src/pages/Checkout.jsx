import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import style from "./Style/Checkout.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserAddressThunk } from "../store/slice/addressSlice";
import { placeOrderService } from "../services/checkoutService";
import { selectUserCart } from "../store/slice/cart/cartSlice";
import useRazorpay from "react-razorpay";
export default function Checkout() {
  const dispatch = useDispatch();
  const [Razorpay] = useRazorpay();
  const addresses = useSelector((state) => state.address.userAddress);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const userCart = useSelector(selectUserCart);
  console.log("user cart --------> ", userCart);
  const [addressId, setAddressId] = useState();
  useEffect(() => {
    dispatch(getAllUserAddressThunk());
  }, []);

  const handlePlaceOrderbtn = async () => {
    const order = { address: addressId };
    const items = [];
    cartItems.map((item) => {
      items.push(item.id);
    });
    order["items"] = items;
    console.log("your order", order);
    const result = await placeOrderService(order);
    console.log("place holder result ------------>", result);
    if (result?.success === true) {
      const order_id = result?.data?.Response.online_payment_order_id;
      const amount = result?.data?.Response.get_total;

      try {
        const options = {
          key: "rzp_test_vy2VJ9K37eJMD9", // Enter the Key ID generated from the Dashboard
          amount: amount*100,
          currency: "INR",
          name: "Acme Corp",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: function (response) {
            //complete order
            // complete_order(
            //   response.razorpay_payment_id,
            //   response.razorpay_order_id,
            //   response.razorpay_signature
            // );
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
          },
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        rzp1.open();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className={style["container"]}>
        <Typography
          style={{ textAlign: "center", marginTop: "10px" }}
          variant="h4"
        >
          Checkout
        </Typography>
        <div className={style["accordion-container"]}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Address</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Pick Your Deliviery Address
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={(e) => setAddressId(e.target.value)}
                >
                  {addresses.map((address) => {
                    return (
                      <FormControlLabel
                        value={address.id}
                        control={<Radio />}
                        label={`${address.district} ${address.city} ${address.landmark} ${address.state} ${address.country} ${address.pincode}`}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Payment Mode</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Coupons and offers</Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>Review Items and Delivery</Typography>
            </AccordionSummary>
          </Accordion>
          <Button
            variant="contained"
            style={{ marginTop: "20px", width: "25%", height: "8%" }}
            onClick={handlePlaceOrderbtn}
            disabled={addressId === undefined ? true : false}
          >
            Place Order
          </Button>
        </div>
      </div>
    </>
  );
}
