import React from "react";
import Image from "react-bootstrap/esm/Image";
import step1 from "../shared/images/Group 173.png";

const Step = () => {
  return (
    <>
      <h2>Paso 1</h2>
      <Image src={step1} />
      <h2>Registrate</h2>
    </>
  );
};

export default Step;
