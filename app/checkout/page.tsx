import React from "react";
import Inputs from "./components/Inputs";
import OptionInput from "./components/OptionInput";

const page = () => {
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
            <OptionInput />
            <OptionInput />
            <Inputs name={"e-Money Number"} plcholder={"238521993"} />
            <Inputs name={"e-Money PIN"} plcholder={"6891"} />
          </div>
        </div>
        <div className="checkout__savadcha ">right</div>
      </div>
    </div>
  );
};

export default page;
