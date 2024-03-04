import React from "react";

const OptionInput = ({ name }: { name: string }) => {
  return (
    <div className="payment__input">
      <div className="payment__input--box">
        <div className="payment__input--box__inside"></div>
      </div>
      <h5>{name}</h5>
    </div>
  );
};

export default OptionInput;
