import React from "react";

const Cart = ({ svgIcon, cartTitle, cartParagraph }) => {
  return (
    <div className="cart text-center w-80 rounded p-3 flex items-center justify-center flex-col m-3 border-b-2 border-e-2 zoom-effect">
      <div>{svgIcon}</div>
      <div>
        <h3 className="font-medium my-2 text-[#464c5b]  dark:text-white">
          {cartTitle}
        </h3>
        <p className=" text-[#384559] dark:text-[#7a899d]">{cartParagraph}</p>
      </div>
    </div>
  );
};

export default Cart;
