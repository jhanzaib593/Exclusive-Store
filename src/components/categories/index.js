import React, { useEffect, useState } from "react";
import "./index.css";
import { Col, Row, Spin } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Categories() {
  const [categorie, setCategorie] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/categoriesData.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCategorie(data.categories || []);
    } catch (error) {
      console.error("Failed to fetch Categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
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
    <section className="categories">
      <div className="header">
        <h4 className="today">Categories</h4>
        <Row>
          <Col sm={8} md={8} style={{ padding: "2em 0" }}>
            <h2 style={{ fontWeight: 600, fontSize: "30px" }}>
              Browse By Category
            </h2>
          </Col>
          <Col sm={16} md={16}></Col>
        </Row>
      </div>

      <div className="product-slider-container">
        {loading ? (
          <Spin size="large" />
        ) : (
          <Slider {...settings}>
            {categorie && categorie.length > 0 ? (
              categorie.map((categore, index) => (
                <div key={index} className="categorie-main">
                  <div className="categorie-card">
                    <h1>{categore.title}</h1>
                  </div>
                </div>
              ))
            ) : (
              <p>No categories found</p>
            )}
          </Slider>
        )}
      </div>
    </section>
  );
}
