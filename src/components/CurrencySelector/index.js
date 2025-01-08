import { Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";
import "./index.css";

const CurrencySelector = ({
  currencies,
  selectedCurrency,
  onCurrencyChange,
}) => {
  return (
    <div className="currency-selector">
      <Select
        id="currency"
        defaultValue={selectedCurrency}
        onChange={onCurrencyChange}
        style={{ backgroundColor: "transparent" }}
      >
        {currencies.map((currency) => (
          <Option key={currency} value={currency}>
            {currency}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CurrencySelector;
