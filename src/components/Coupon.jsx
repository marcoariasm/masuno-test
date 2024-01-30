import React from "react";
import Card from "react-bootstrap/esm/Card";
import Image from "react-bootstrap/esm/Image";
import Discount10 from "../shared/images/discount10.png";
import underlined2 from "../shared/images/Subrayado Azul.png";

const CouponSection = () => {
  return (
    <Card
      style={{
        borderRadius: 0,
      }}
    >
      <Card.Body>
        <div
          style={{
            border: "1px dashed var(--blue-sf)",
            borderRadius: 8,
            padding: "20px",
          }}
        >
          <Card.Title className="text-center">
            <p className="coupon__title">Regístrate y obtén</p>
            <Image src={underlined2} />
          </Card.Title>
          <Card.Text>
            <div className="text-center">
              <Image src={Discount10} />
              <span className="coupon__info1">En tu primera compra de</span>
              <span className="coupon__info2">CYBER DAYS</span>
              <br />
              <br />
              <p className="coupon__text">
                Aplicamos el descuento mediante un código que se te eviará a tu
                correo registrado. <br />
                Cupón válido del 28 al 30 de marzo. <br />
                *Aplican términos y condiciones
              </p>
            </div>
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CouponSection;
