import React from "react";
import project from "../../../public/project.svg";
import Center from "../../Components/Center";

const Project = () => {
  return (
    <>
      <Center
        topImg={project}
        firstText={"কোর্সে যে"}
        heading={"প্রজেক্ট "}
        secondText={"গুলো করানো হবে"}
        title={"দশটি প্রজেক্ট আমরা একসাথে করবো"}
      ></Center>
    </>
  );
};

export default Project;
