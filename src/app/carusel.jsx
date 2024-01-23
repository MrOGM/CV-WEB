// Carousel.js
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import LFBooks from '../../public/LF_Books.png';
import LFSearchBar from '../../public/LuckyFetchSearchBar.png';
import LFMongoDB from '../../public/LFMongoDB.png';
import LFGraphs from '../../public/LFGraphs.png';
import LFRender from '../../public/LFRender.png';



import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    LFBooks,
    LFSearchBar,
    LFGraphs,
    LFMongoDB,
    LFRender,
  ];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
           <Image src={image} alt={`Slide ${index + 1}`} className=" object-cover w-full h-120 rounded-lg md:h-120"/>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
