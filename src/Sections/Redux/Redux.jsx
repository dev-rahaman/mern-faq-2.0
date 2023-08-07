import React from "react";
import allModule from "../../../public/allModule.svg";
import Center from "../../Components/Center";
import CartContainer from "../../Components/CartContainer";

const Redux = () => {
  return (
    <div id="story">
      <Center
        topImg={allModule}
        firstText={"এক নজরে"}
        heading={"মার্ন স্ট্যাক প্রশ্নপত্র"}
        secondText={"বই।"}
        title={"এই বইয়ে যা যা থাকছে।"}
      ></Center>
      <CartContainer></CartContainer>
    </div>
  );
};

export default Redux;
