import { Col, Row, Affix, Badge, Avatar } from "antd";
import "./index.css";
import React, { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcherDropdown";
import CurrencySelector from "../CurrencySelector";
import logo from "../../assets/img/logo.png";
import Navbar from "./navbar";

const Header = () => {
  const productarry = localStorage.getItem("cart");

  const initialValue = productarry ? JSON.parse(productarry) : [];

  const [top, setTop] = React.useState(0);
  const datacurrencies = JSON.parse(localStorage.getItem("currencies")) || [];

  const currencies = ["USD", "AED", "SAR"]; // Supported currencies
  const [selectedCurrency, setSelectedCurrency] = useState(
    datacurrencies.selectedCurrency || "USD"
  );
  const [exchangeRates, setExchangeRates] = useState({});

  const fetchExchangeRates = async (baseCurrency) => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      const data = await response.json();
      setExchangeRates(data.rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  useEffect(() => {
    fetchExchangeRates("USD"); // Fetch exchange rates with USD as the base currency
  }, []);
  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    window.location.reload();
  };

  const getExchangeRate = () => exchangeRates[selectedCurrency] || 1;
  const currenciesData = {
    selectedCurrency: selectedCurrency,
    getExchangeRate: getExchangeRate(),
  };
  localStorage.setItem("currencies", JSON.stringify(currenciesData));

  return (
    <>
      <Affix offsetTop={top}>
        <div
          style={{
            backgroundColor: "white",
            borderBottom: "1px solid #B3B3B3",
          }}
        >
          <div className="container">
            <Row style={{ padding: "12px 0" }}>
              <Col span={4} className="logo">
                <img src={logo} alt="logo" height={50} width={100} />
              </Col>
              <Col span={20} className="nav_bar">
                <div className="nav">
                  <Navbar />

                  <div className="header_icon">
                    <CurrencySelector
                      currencies={currencies}
                      selectedCurrency={selectedCurrency}
                      onCurrencyChange={handleCurrencyChange}
                    />
                    <span className="separator">|</span>
                    &nbsp;
                    <LanguageSwitcher />
                    <span className="separator">|</span>
                    <Link to="/cart">
                      <Badge
                        className="icon_cart"
                        style={{ margin: "auto" }}
                        count={initialValue.length}
                      >
                        <Avatar
                          className="icon_cart"
                          style={{
                            backgroundColor: "transparent",
                            color: "black",
                            fontSize: "25px",
                          }}
                          icon={<ShoppingCartOutlined />}
                        />
                      </Badge>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Affix>
    </>
  );
};
export default Header;
