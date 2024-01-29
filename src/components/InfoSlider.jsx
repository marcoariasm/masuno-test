import React from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import SliderOne from "../shared/images/slider1.png";
import Image from "react-bootstrap/esm/Image";

const InfoSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={SliderOne} text="First slide" />
        <Carousel.Caption>
          <h3>Heading 3</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={SliderOne} />
        <Carousel.Caption>
          <h3>Heading 3</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={SliderOne} />
        <Carousel.Caption>
          <h3>Heading 3</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default InfoSlider;
