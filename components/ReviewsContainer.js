"use client";
import React from "react";
import Review from "./Review";
import Slider from "react-slick";

function ReviewsContainer() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="reviews-container">
      <Slider {...settings}>
        <Review
          name={"Salome & Elie"}
          review={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla laudantium voluptas?"
          }
        />
        <Review
          name={"Salome & Elie"}
          review={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla laudantium voluptas?"
          }
        />
        <Review
          name={"Salome & Elie"}
          review={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla laudantium voluptas?"
          }
        />
        <Review
          name={"Salome & Elie"}
          review={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla laudantium voluptas?"
          }
        />
        <Review
          name={"Salome & Elie"}
          review={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla laudantium voluptas?"
          }
        />
      </Slider>
    </div>
  );
}

export default ReviewsContainer;
