import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const Img = styled.img`
    
  `

  return (
    <>
      <Slider {...settings}>
        <div><Img src="/images/banner/image.png"/></div>
        <div><Img src="/images/banner/image_01.png"/></div>
        <div><Img src="/images/banner/image_02.png"/></div>
        <div><Img src="/images/banner/image_03.png"/></div>
        
      </Slider>
    </>
  )
}