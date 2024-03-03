import { Include } from "@/app/lib/types";
import React from "react";

const InBox = ({ inbox }: { inbox: Include[] }) => {
  return (
    <>
      {inbox.map((box, i) => (
        <div key={i} className="one__box">
          <h2>{box.quantity}x</h2>
          <h3>{box.item}</h3>
        </div>
      ))}
    </>
  );
};

export default InBox;
