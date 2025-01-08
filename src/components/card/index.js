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
          <Tag color="red" className="discount-tag">
            {`-${Math.round(
              ((props.price - props.discount_price) / props.price) * 100
            )}%`}
          </Tag>

          <img alt={props.productname} src={props.img} />
          <div className="overlay-buttons">
            <Tooltip title="Add to Wishlist">
              <HeartOutlined className="icon-button" />
            </Tooltip>
            <Tooltip title="View Details">
              <EyeOutlined className="icon-button" />
            </Tooltip>
          </div>

          <Button
            type="primary"
            block
            className="add-to-cart"
            onClick={() => addToCart(props)}
          >
            {t("AddToCart")}
          </Button>
        </div>
      }
    >
      <Meta
        title={props.translations?.[i18n.language].name}
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
            <div style={{ fontSize: 14 }}>
              <Rate disabled className="stars" defaultValue={props.stars} />
              &nbsp; ({props.reviews})
            </div>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
