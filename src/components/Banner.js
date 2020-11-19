import React from "react"
import { Carousel, Button } from "react-bootstrap"

// import image1 from "../images/banner/ford-mustang.jpg"
// import image2 from "../images/banner/ford-ranger.jpg"
// import image3 from "../images/banner/ford-steering.jpg"
import banner1 from "../images/banner/banner-1.png"
import banner2 from "../images/banner/banner-2.png"
import banner3 from "../images/banner/banner-3.png"

export default function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 " src={banner3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100  "  src={banner2} alt="Second slide" />
      </Carousel.Item>
      
    </Carousel>
  )
}
