import React from "react";
import Card from "react-bootstrap/esm/Card";
import Image from "react-bootstrap/esm/Image";
//components
import Discount10 from "../shared/images/Group 899.png";
import underlined2 from "../shared/images/Subrayado Azul.png";
// content
import text from "../content/text";

const { coupon } = text;

const Coupon = () => {
  return (
    <Card className="coupon__card">
      <Card.Body>
        <div className="coupon__frame">
          <Card.Title className="text-center">
            <p className="coupon__title">{coupon.title}</p>
            <Image src={underlined2} />
          </Card.Title>
          <Card.Text className="text-center">
            <Image src={Discount10} />
            <p className="coupon__text m-3">
              {coupon.text1}
              <br />
              <br />
              {coupon.text2}
              <br />
              <br />
              {coupon.text3}
            </p>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Coupon;
