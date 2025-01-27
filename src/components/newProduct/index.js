import React, { useEffect, useState } from "react";
import { Row, Col, Spin } from "antd";
import { useTranslation } from "react-i18next";
import ProductCard from "../card"; // Import the ProductCard component
import "./index.css";

const NewProduct = () => {
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

  useEffect(() => {
    getProducts();
  }, [i18n.language]); // Re-fetch when language changes

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

      <div style={{ padding: "1em 0 2em 0" }}>
        {loading ? (
          <Spin size="large" />
        ) : error ? (
          <div>{error}</div> // Show error message if any error occurs
        ) : (
          <Row gutter={[16, 12]} justify="start">
            {products.slice(0, 8).map((product) => (
              <Col
                key={product.id}
                xs={24} // Full width on extra small screens
                sm={12} // Two columns on small screens
                md={6} // Three columns on medium screens
                lg={6} // Four columns on large screens
                className="new-product-card"
              >
                <ProductCard {...product} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
};

export default NewProduct;
