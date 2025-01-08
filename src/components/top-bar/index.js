import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./index.css";
import LanguageSwitcher from "../LanguageSwitcherDropdown";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import CurrencySelector from "../CurrencySelector";
export function TopBanner() {
  const { t } = useTranslation();
  const datacurrencies = JSON.parse(localStorage.getItem("currencies")) || [];

  const av = datacurrencies.selectedCurrency;

  const currencies = ["USD", "AED", "SAR"]; // Supported currencies
  const [selectedCurrency, setSelectedCurrency] = useState(av);
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
    <div className="topbanner">
      <Row>
        <Col sm={16} md={16}>
          <p>
            {t("offer")}&nbsp;
            <Link to="/shop" style={{ color: "white", fontWeight: 600 }}>
              Shop Now
            </Link>
          </p>
        </Col>
        <Col sm={8} md={8} style={{ display: "flex" }}>
          <LanguageSwitcher />
          &nbsp;
          <CurrencySelector
            currencies={currencies}
            selectedCurrency={selectedCurrency}
            onCurrencyChange={handleCurrencyChange}
          />
        </Col>
      </Row>
    </div>
  );
}
