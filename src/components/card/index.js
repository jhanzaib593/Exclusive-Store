import React from "react";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import "./index.css";
import { Card, Button, Tag, Tooltip, Rate } from "antd";
const { Meta } = Card;

const ProductCard = (props) => {
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
          <Button type="primary" block className="add-to-cart">
            Add To Cart
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
