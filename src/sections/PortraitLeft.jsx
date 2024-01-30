import React from "react";
import Image from "react-bootstrap/esm/Image";
import Coupon from "../components/Coupon";
// styles
import iconsGroup1 from "../shared/images/iconsGroup1.png";
import underlined from "../shared/images/Subrayado Rojo.png";
// content
import text from "../content/text";

const { portrait } = text;

const PortraitLeft = () => {
  return (
    <>
      <Image src={iconsGroup1} />
      <p className="portrait__info px-2">{portrait.info}</p>
      <p className="portrait__title my-4">{portrait.title}</p>
      <p className="portrait__subtitle">{portrait.subtitle}</p>
      <span className="portrait__underlined mx-3">{portrait.underlined}</span>
      <br />
      <Image className="portrait__line mx-5 pl-4" src={underlined} />
      <br />
      <p className="portrait__dates my-4">{portrait.dates}</p>
      {/* coupon */}
      <Coupon />
    </>
  );
};

export default PortraitLeft;
