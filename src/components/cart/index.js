import React, { useState } from "react";
import { Table, Button, Input, Row, Col, Card, InputNumber } from "antd";
import "./index.css"; // Optional CSS file for custom styles
import Header from "../header";
import { TopBanner } from "../top-bar";

export const Cart = () => {
  const productarry = localStorage.getItem("cart");

  const initialValue = productarry ? JSON.parse(productarry) : [];
  const [cart, setCart] = useState(initialValue);

  const updateQuantity = (key, quantity) => {
    if (quantity === 0) {
      // If quantity is zero, remove the item from the cart
      const updatedCart = cart.filter((item) => item._id !== key);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Update the quantity of the item in the cart
      const updatedCart = cart.map((item) =>
        item._id === key ? { ...item, quantity } : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const quantity = item.quantity || 1; // Default to 1 if quantity is undefined
      const price = item.discountprice || item.productprice; // Use discountprice if available, otherwise productprice
      return total + price * quantity;
    }, 0);
  };

  return (
    <>
      <TopBanner />
      <Header />
      <div className="container">
        {/* Cart Table */}
        <Table
          dataSource={cart.map((item, index) => ({
            ...item,
            key: index,
          }))}
          className="cart-table custom-table"
          pagination={false}
          columns={[
            {
              title: "Product",
              dataIndex: "product",
              key: "product",
              render: (text, record) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={record.productimg}
                    alt={record.productname}
                    style={{ width: 50, marginRight: 10 }}
                  />
                  {record.productname}
                </div>
              ),
            },
            {
              title: "Price",
              dataIndex: "price",
              key: "price",
              render: (text, record) => {
                return `$${record.discountprice || record.productprice}`; // Check if discountprice exists, otherwise show productprice
              },
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
              key: "quantity",
              render: (quantity, record) => (
                <InputNumber
                  min={0}
                  defaultValue={quantity || 1} // Default to 1 if quantity is undefined
                  onChange={(value) => updateQuantity(record._id, value)}
                />
              ),
            },
            {
              title: "Subtotal",
              key: "subtotal",
              render: (_, record) => {
                const quantity = record.quantity || 1; // Use record.quantity or default to 1 if undefined
                const price = record.discountprice || record.productprice; // Use discountprice if available, otherwise productprice
                return `$${price * quantity}`; // Calculate subtotal
              },
            },
          ]}
          scroll={{ x: 800 }} // Enable horizontal scrolling for smaller screens
        />

        {/* Actions */}
        <div
          style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 10 }}
        >
          <Button type="default" style={{ flex: 1, minWidth: 150 }}>
            Return To Shop
          </Button>
          <Button type="primary" style={{ flex: 1, minWidth: 150 }}>
            Update Cart
          </Button>
        </div>

        {/* Coupon and Cart Summary */}
        <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
          <Col xs={24} md={12}>
            <Card>
              <h3>Apply Coupon</h3>
              <Input.Group compact>
                <Input style={{ width: "70%" }} placeholder="Coupon Code" />
                <Button type="primary">Apply Coupon</Button>
              </Input.Group>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card>
              <h3>Cart Total</h3>
              <p>Subtotal: ${calculateSubtotal()}</p>
              <p>Shipping: Free</p>
              <p>Total: ${calculateSubtotal()}</p>
              <Button type="primary" block>
                Proceed to Checkout
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
