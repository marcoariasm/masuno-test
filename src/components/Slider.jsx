import React from "react";
import Button from "react-bootstrap/esm/Button";
import Carousel from "react-bootstrap/esm/Carousel";
import Image from "react-bootstrap/esm/Image";
import slider1 from "../shared/images/slider1.png";
import slider2 from "../shared/images/slider2.png";
import slider3 from "../shared/images/slider3.png";
import stars from "../shared/images/star 1.png";

const Slider = () => {
  return (
    <Carousel style={{ position: "relative" }}>
      <Carousel.Item>
        <Image src={slider1} />
        <Carousel.Caption className="slider__caption">
          <Image src={stars} />
          <h3 className="slider__title">Diseño UX/UI</h3>
          <p className="slider__text">
            Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel
            id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse
            iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.
          </p>
          <Button className="btn btn-lg btn-masuno my-4">Ver tecnología</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider2} />
        <Carousel.Caption className="slider__caption">
          <Image src={stars} />
          <h3 className="slider__title">PHP</h3>
          <p className="slider__text">
            Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel
            id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse
            iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.
          </p>
          <Button className="btn btn-lg btn-masuno my-4">Ver tecnología</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={slider3} />
        <Carousel.Caption className="slider__caption">
          <Image src={stars} />
          <h3 className="slider__title">Flutter</h3>
          <p className="slider__text">
            Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel
            id nunc. Ultricies dui pharetra laoreet laoreet laoreet habitasse
            iaculis lobortis. Amet diam dolor tincidunt congue sagittis in.
          </p>
          <Button className="btn btn-lg btn-masuno my-4">Ver tecnología</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
