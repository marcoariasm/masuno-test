import React from "react";
import Button from "react-bootstrap/esm/Button";
import Carousel from "react-bootstrap/esm/Carousel";
import Image from "react-bootstrap/esm/Image";
//styles
import slider1 from "../shared/images/slider1.png";
import slider2 from "../shared/images/slider2.png";
import slider3 from "../shared/images/slider3.png";
import stars from "../shared/images/star 1.png";
// content
import text from "../content/text";

const { slider1Content, slider2Content, slider3Content } = text;

const Slider = () => {
  return (
    <Carousel style={{ position: "relative" }}>
      <Carousel.Item>
        <Image src={slider1} />
        <Carousel.Caption className="slider__caption">
          <Image src={stars} />
          <h3 className="slider__title">{slider1Content.title}</h3>
          <p className="slider__text">{slider1Content.text}</p>
          <Button className="btn btn-lg btn-info my-4">
            {slider1Content.button}
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider2} />
        <Carousel.Caption className="slider__caption">
          <Image src={stars} />
          <h3 className="slider__title">{slider2Content.title}</h3>
          <p className="slider__text">{slider2Content.text} </p>
          <Button className="btn btn-lg btn-info my-4">
            {slider2Content.button}
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider3} />
        <Carousel.Caption className="slider__caption">
          <Image src={stars} />
          <h3 className="slider__title">{slider3Content.title}</h3>
          <p className="slider__text">{slider3Content.text} </p>
          <Button className="btn btn-lg btn-info my-4">
            {slider3Content.button}
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
