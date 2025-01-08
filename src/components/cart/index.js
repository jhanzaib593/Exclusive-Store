import React, { useState } from "react";
import "./index.css"; // Custom CSS for styling
import Header from "../header";
import { TopBanner } from "../top-bar";
import { Breadcrumb } from "antd";
import { useTranslation } from "react-i18next";

export const Cart = () => {
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
      const price = item.discount_price || item.price; // Use discountprice if available, otherwise productprice
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

        {/* Check if cart is empty */}
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is currently empty.</p>
            <button className="default-btn">Continue Shopping</button>
          </div>
        ) : (
          <>
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
                            src={item.img}
                            alt={item.translations?.[i18n.language].name}
                            style={{ width: 50, marginRight: 10 }}
                          />
                          {item.translations?.[i18n.language].name}
                        </div>
                      </td>
                      {/* <td>${item.discount_price || item.price}</td> */}
                      <td>
                        {formatPrice(
                          (item.discount_price || item.price) *
                            currenciesData.getExchangeRate,
                          currenciesData.selectedCurrency
                        )}
                      </td>

                      <td>
                        <input
                          type="number"
                          min="0"
                          value={item.quantity || 1}
                          onChange={(e) =>
                            updateQuantity(
                              item._id,
                              parseInt(e.target.value, 10)
                            )
                          }
                          style={{ width: "60px" }}
                        />
                      </td>
                      {/* <td>
                        $
                        {(
                          (item.discount_price || item.price) *
                          (item.quantity || 1)
                        ).toFixed(2)}
                      </td> */}
                      <td>
                        $
                        {formatPrice(
                          (item.discount_price || item.price) *
                            (item.quantity || 1) *
                            currenciesData.getExchangeRate,
                          currenciesData.selectedCurrency
                        )}
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
                <p>
                  Subtotal:
                  {formatPrice(
                    calculateSubtotal().toFixed(2) *
                      currenciesData.getExchangeRate,
                    currenciesData.selectedCurrency
                  )}
                </p>
                <p>Shipping: Free</p>
                <p>
                  Total:{" "}
                  {formatPrice(
                    calculateSubtotal().toFixed(2) *
                      currenciesData.getExchangeRate,
                    currenciesData.selectedCurrency
                  )}
                </p>
                <button className="primary-btn">Proceed to Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
