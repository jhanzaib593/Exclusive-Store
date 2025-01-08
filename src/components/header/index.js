import { Col, Row, Affix, Input, Drawer, Button, Badge, Avatar } from "antd";
import "./index.css";
import React, { useState } from "react";
import {
  HeartOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const productarry = localStorage.getItem("cart");

  const initialValue = productarry ? JSON.parse(productarry) : [];

  const [top, setTop] = React.useState(0);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [isExpanded, setIsExpanded] = useState(false);

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
                <h2>{t("welcome")}</h2>
              </Col>
              <Col span={17} className="sreach_bar">
                <div className="nav">
                  <Link to="/" className="nav_link">
                    {t("Home")}
                  </Link>
                  <NavLink className="nav_link">{t("Contact")}</NavLink>
                  <NavLink className="nav_link">{t("About")}</NavLink>
                  <NavLink className="nav_link">{t("SignUp")}</NavLink>
                </div>
                <Input
                  placeholder={`${t("placeholder")}`}
                  className="search"
                  style={{
                    width: "40%",
                    borderRadius: "5px",
                    backgroundColor: "#F5F5F5",
                    border: "none",
                    margin: "10px 0",
                  }}
                  suffix={<SearchOutlined />}
                />
                <div className="header_icon">
                  {isExpanded && (
                    <Input
                      placeholder="Search..."
                      autoFocus
                      style={{
                        transition: "width 0.3s ease",
                        width: "100%",
                        borderRadius: "5px",
                        backgroundColor: "#F5F5F5",
                        border: "none",
                        margin: "10px 0",
                      }}
                      className="icon_cart search_icon"
                      suffix={
                        <SearchOutlined
                          style={{
                            fontSize: "25px",
                          }}
                        />
                      }
                      onBlur={() => setIsExpanded(false)} // Collapse when focus is lost
                    />
                  )}

                  {!isExpanded && (
                    <Button
                      type="default"
                      icon={
                        <SearchOutlined
                          className="icon_cart"
                          style={{ fontSize: "25px", border: "none" }}
                        />
                      }
                      onClick={() => setIsExpanded(true)} // Expand input when clicked
                    />
                  )}
                  <HeartOutlined
                    className="icon_cart"
                    style={{ fontSize: "25px" }}
                  />
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
              </Col>

              <Col span={3} className="h_drawer">
                <MenuFoldOutlined onClick={showDrawer} />
                <Drawer onClose={onClose} open={open}>
                  <div className="nav_d">
                    <NavLink className="nav_link nav_link_d">
                      {t("Home")}
                    </NavLink>
                    <NavLink className="nav_link nav_link_d">
                      {t("Contact")}
                    </NavLink>
                    <NavLink className="nav_link nav_link_d">
                      {t("About")}
                    </NavLink>
                    <NavLink className="nav_link nav_link_d">
                      {t("SignUp")}
                    </NavLink>
                  </div>
                </Drawer>
              </Col>
            </Row>
          </div>
        </div>
      </Affix>
    </>
  );
};
export default Header;
