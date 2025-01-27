import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Row, Spin } from "antd";
import { Link } from "react-router-dom"; // For routing
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ProductCard from "../card"; // Import the ProductCard component
import { useTranslation } from "react-i18next";

const ProductDeals = () => {
  const { t, i18n } = useTranslation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products from the JSON file
  const getProducts = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

      const response = await fetch("/allProductsStore.json"); // Ensure this path is correct
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const allProducts = data.allProductsStore;

      // Update products with translations based on the selected language
      const translatedProducts = allProducts.map((product) => {
        const translated = product.translations?.[i18n.language] || {};
        return {
          ...product,
          name: translated.name || product.name, // Fallback to default name if no translation
          description: translated.description || product.description, // Fallback to default description
          alt: translated.alt || product.alt,
        };
      });

      setProducts(translatedProducts); // Set the translated products
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };
  console.log("products", products);

  useEffect(() => {
    getProducts();
  }, [i18n.language]); // Re-fetch when language or getProducts changes

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true, // Add this line to enable arrows
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
      <div
        style={{
          paddingTop: "5em",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: 35 }}>{t("deals")}</h1>
        <button className="view-all">{t("ViewAll")}</button>
      </div>

      <div
        className="product-slider-container"
        style={{ padding: "1em 0 2em 0" }}
      >
        {loading ? (
          <Spin size="large" />
        ) : error ? (
          <div>{error}</div> // Show error message if any error occurs
        ) : (
          <Slider {...settings}>
            {products.slice(0, 10).map((product) => (
              // console.log("product", product),
              <div key={product.id} className="product-card">
                <ProductCard
                  {...product} // Pass all product properties as props
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </>
  );
};

export default ProductDeals;