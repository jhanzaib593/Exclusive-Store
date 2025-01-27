import React, { useEffect, useState } from "react";
import { Col, Row, Spin } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import Image from "../../assets/img/360_F_249501541_XmWdfAfUbWAvGxBwAM0ba2aYT36ntlpH.jpg";
import "./index.css";

export default function OurBrand() {
  const { t } = useTranslation();

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div style={{ paddingTop: "5em" }}>
        <h1 style={{ fontWeight: 500, textAlign: "center" }}>
          {t("ourbrands")}
        </h1>
      </div>

      <div
        className="product-slider-container"
        style={{ padding: "2em 0 3em 0" }}
      >
        <Slider {...settings}>
          <div>
            <img
              className="partner-image"
              src={Image}
              alt=""
              height={50}
              width={50}
            />
          </div>
          <div>
            <img
              className="partner-image"
              src={Image}
              alt=""
              height={50}
              width={50}
            />
          </div>
          <div>
            <img
              className="partner-image"
              src={Image}
              alt=""
              height={50}
              width={50}
            />
          </div>
          <div>
            <img
              className="partner-image"
              src={Image}
              alt=""
              height={50}
              width={50}
            />
          </div>
          <div>
            <img
              className="partner-image"
              src={Image}
              alt=""
              height={50}
              width={50}
            />
          </div>
          <div>
            <img
              className="partner-image"
              src={Image}
              alt=""
              height={50}
              width={50}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}
