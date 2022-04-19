import { useState } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";

const Sliders = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        <Carousel.Item>
            <Image width={400} height={300} src="http://localhost:7000/097f01ed-0050-4f5c-bb98-a66fa526db3e.jpg"/>
          {/* <img
            className="d-block w-100"
            src="http://localhost:7000/097f01ed-0050-4f5c-bb98-a66fa526db3e.jpg"
            alt="First slide"
          /> */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image width={400} height={300} src="http://localhost:7000/59a818be-ecfd-4538-b8bb-8b7d924f59ea.jpg"/>
          {/* <img
            className="d-block w-100"
            src="http://localhost:7000/59a818be-ecfd-4538-b8bb-8b7d924f59ea.jpg"
            alt="Second slide"
          /> */}
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image width={400} height={300} src="http://localhost:7000/dcd0b940-040c-4887-b78d-958b102240fc.jpg"/>
          {/* <img
            className="d-block w-100"
            src="http://localhost:7000/dcd0b940-040c-4887-b78d-958b102240fc.jpg"
            alt="Third slide"
          /> */}
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Sliders