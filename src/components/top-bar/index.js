import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./index.css";
import LanguageSwitcher from "../LanguageSwitcherDropdown";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
export function TopBanner() {
  const { t } = useTranslation();
  return (
    <div className="topbanner">
      <Row>
        <Col sm={18} md={18}>
          <p style={{ margin: "auto" }}>
            {t("offer")}&nbsp;
            <Link to="/shop" style={{ color: "white", fontWeight: 600 }}>
              Shop Now
            </Link>
          </p>
        </Col>
        <Col sm={6} md={6}>
          <LanguageSwitcher />
        </Col>
      </Row>
    </div>
  );
}
