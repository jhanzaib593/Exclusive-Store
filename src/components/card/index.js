import React from "react";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import "./index.css";
import { Card, Button, Tag, Tooltip, Rate } from "antd";
import { useTranslation } from "react-i18next";
const { Meta } = Card;

const ProductCard = (props) => {
  const { t, i18n } = useTranslation();
  const currenciesData = JSON.parse(localStorage.getItem("currencies")) || [];

  const formatPrice = (price, currency) => {
    if (!currency) {
      console.error("Currency code is required with currency style.");
      return price; // Return the raw price if currency is invalid
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  const addToCart = (data) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(data);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <Card
      hoverable
      cover={
        <div className="card-cover">
          {/* <Tag color="red" className="discount-tag">
            {`-${Math.round(
              ((props.price - props.discount_price) / props.price) * 100
            )}%`}
          </Tag> */}

          <img alt={props.productname} src={props.img} />
          {/* <div className="overlay-buttons">
            <Tooltip title="Add to Wishlist">
              <HeartOutlined className="icon-button" />
            </Tooltip>
            <Tooltip title="View Details">
              <EyeOutlined className="icon-button" />
            </Tooltip>
          </div> */}
        </div>
      }
    >
      <Meta
        title={
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                whiteSpace: "normal",
              }}
            >
              <p>{props.translations?.[i18n.language].name}</p>
              <p>
                {props.qty >= 1 ? (
                  <span className="stock"> {t("In Stock")}</span>
                ) : (
                  <span> {t("outstock")}</span>
                )}
              </p>
            </div>
          </>
        }
        description={
          <>
            <p className="sale_price">
              {/* ${props.discount_price}&nbsp; */}
              {formatPrice(
                props.discount_price * currenciesData.getExchangeRate,
                currenciesData.selectedCurrency
              )}
              &nbsp;
              <span>
                {formatPrice(
                  props.price * currenciesData.getExchangeRate,
                  currenciesData.selectedCurrency
                )}
              </span>
            </p>

            <Button
              type="primary"
              block
              className="add-to-cart"
              onClick={() => addToCart(props)}
            >
              {t("AddToCart")}
            </Button>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
