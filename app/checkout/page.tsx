"use client";
import React, { useContext } from "react";
import Inputs from "./components/Inputs";
import OptionInput from "./components/OptionInput";
import CheckoutSavadcha from "./components/CheckoutSavadcha";
import { cartContext } from "../context/cartContext";

const Page = () => {
  const context = useContext(cartContext);
  console.log(context?.cart);

  const cartResult = context?.cart.reduce(
    (acc, el) => {
      acc.totalCount += el.count;
      acc.totalSumm += el.count * el.price;
      return acc;
    },
    {
      totalCount: 0,
      totalSumm: 0,
    }
  );
  return (
    <div className="container ">
      <div className="checkout">
        <div className="checkout__form ">
          <h1>CHECKOUT</h1>
          <h2>Billing Details</h2>
          <div className="billing__inputs">
            <Inputs name={"Name"} plcholder={"Alexei Ward"} />
            <Inputs name={"Email Address"} plcholder={"alexei@mail.com"} />
            <Inputs name={"Phone Number"} plcholder={"+1 202-555-0136"} />
          </div>
          <h2>shipping info</h2>
          <div className="shipping__inputs">
            <form className="address">
              <h3>Address</h3>
              <input type="text" placeholder="1137 Williams Avenue" />
            </form>
            <Inputs name={"ZIP Code"} plcholder={"10001"} />
            <Inputs name={"City"} plcholder={"City"} />
            <Inputs name={"Country"} plcholder={"United States"} />
          </div>
          <h2>payment details</h2>
          <div className="payment">
            <h4 className="pay__method">Payment Method</h4>
            <OptionInput name={"e-Money"} />
            <OptionInput name={"Cash on Delivery"} />
            <Inputs name={"e-Money Number"} plcholder={"238521993"} />
            <Inputs name={"e-Money PIN"} plcholder={"6891"} />
          </div>
        </div>
        <div className="checkout__savadcha h-max ">
          <h1>summary</h1>
          {context?.cart.map((product) => (
            <CheckoutSavadcha key={product.id} {...product} />
          ))}

          <div>
            <div className="checkout__savadcha--info">
              <div className="checkout__savadcha--title">TOTAL</div>
              <div className="checkout__savadcha--numbers">
                $ {cartResult?.totalSumm}
              </div>
            </div>
            <div className="checkout__savadcha--info">
              <div className="checkout__savadcha--title">SHIPPING</div>
              <div className="checkout__savadcha--numbers">$ 50</div>
            </div>
            <div className="checkout__savadcha--info">
              <div className="checkout__savadcha--title">VAT (INCLUDED)</div>
              <div className="checkout__savadcha--numbers">$ 1,079</div>
            </div>
            <div className="checkout__savadcha--info">
              <div className="checkout__savadcha--title">GRAND TOTAL</div>
              <div className="checkout__savadcha--numbers ]">$ 5,446</div>
            </div>
            <button className="btnorg w-full mt-6">CONTINUE & PAY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
