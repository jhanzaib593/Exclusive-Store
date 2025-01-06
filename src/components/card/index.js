import React from "react";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import "./index.css";
import { Card, Button, Tag, Tooltip, Rate } from "antd";
import { useTranslation } from "react-i18next";
const { Meta } = Card;

const ProductCard = (props) => {
  const { t } = useTranslation();

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
              ((props.productprice - props.discountprice) /
                props.productprice) *
                100
            )}%`}
          </Tag>

          <img alt={props.productname} src={props.productimg} />
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
        title={props.productname}
        description={
          <>
            <p className="sale_price">
              ${props.discountprice}&nbsp;
              <span>${props.productprice}</span>
            </p>
            <div style={{ fontSize: 14 }}>
              <Rate
                disabled
                className="stars"
                defaultValue={props.productstars}
              />
              &nbsp; ({props.productreviews})
            </div>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
