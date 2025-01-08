import React, { useState } from "react";
import "./index.css"; // Custom CSS for styling
import Header from "../header";
import { TopBanner } from "../top-bar";
import { Breadcrumb } from "antd";

export const Cart = () => {
  const productArray = localStorage.getItem("cart");
  const initialValue = productArray ? JSON.parse(productArray) : [];
  const [cart, setCart] = useState(initialValue);

  const updateQuantity = (key, quantity) => {
    if (quantity === 0) {
      const updatedCart = cart.filter((item) => item._id !== key);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
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
        <Breadcrumb
          items={[
            {
              title: "Home",
              href: "/",
            },

            {
              title: "Cart",
            },
          ]}
          style={{ padding: "5em 0" }}
        />
        {/* Cart Table */}
        <table className="cart-table">
          <thead className="cart-table-header">
            <tr style={{ padding: "10em 0" }}>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <br />
          <br />
          <tbody>
            {cart.map((item, index) => (
              <>
                <tr key={index}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={item.productimg}
                        alt={item.productname}
                        style={{ width: 50, marginRight: 10 }}
                      />
                      {item.productname}
                    </div>
                  </td>
                  <td>${item.discountprice || item.productprice}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={item.quantity || 1}
                      onChange={(e) =>
                        updateQuantity(item._id, parseInt(e.target.value, 10))
                      }
                      style={{ width: "60px" }}
                    />
                  </td>
                  <td>
                    $
                    {(
                      (item.discountprice || item.productprice) *
                      (item.quantity || 1)
                    ).toFixed(2)}
                  </td>
                </tr>
                <br />
                <br />
              </>
            ))}
          </tbody>
        </table>

        {/* Actions */}
        <div className="actions">
          <button className="default-btn">Return To Shop</button>
          <button className="primary-btn">Update Cart</button>
        </div>

        {/* Coupon and Cart Summary */}
        <div className="coupon-summary">
          <div className="apply-coupon">
            <h3>Apply Coupon</h3>
            <input type="text" placeholder="Coupon Code" />
            <button className="primary-btn">Apply Coupon</button>
          </div>

          <div className="cart-total">
            <h3>Cart Total</h3>
            <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
            <p>Shipping: Free</p>
            <p>Total: ${calculateSubtotal().toFixed(2)}</p>
            <button className="primary-btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
