import React from "react";
import Category from "../layout/Category";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {children}
      <Category />
    </div>
  );
};

export default layout;
