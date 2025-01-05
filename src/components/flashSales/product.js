import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Spin } from "antd";
// import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ProductCard from "../card";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch products
  const getProducts = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

      const response = await fetch("/allProductsStore.json"); // Ensure this path is correct
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data.allProductsStore);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
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
    <>
      <div className="product-slider-container">
        {loading ? (
          <Spin size="large" />
        ) : (
          <Slider {...settings}>
            {products.slice(0, 10).map(
              (
                product // Limit to top 10 products
              ) => (
                <div key={product.id} className="product-card">
                  {
                    <ProductCard
                      _id={product.id}
                      productprice={product.price}
                      discountprice={product.discount_price}
                      productname={product.name}
                      productimg={product.img}
                      productstars={product.stars}
                      productreviews={product.reviews}
                    />
                  }
                </div>
              )
            )}
          </Slider>
        )}
      </div>

      <div style={{ textAlign: "center", padding: "3em 0" }}>
        <button type="primary" block className="veiw-all">
          View All Products
        </button>
      </div>
    </>
  );
};

export default ProductSlider;
