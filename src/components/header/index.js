import { Col, Row, Affix, Input, Drawer, Button } from "antd";
import "./index.css";
import React, { useState } from "react";
import {
  HeartOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [top, setTop] = React.useState(0);
  const [open, setOpen] = useState(false);

  console.log(setTop);
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
                <h2>Exclusive</h2>
              </Col>
              <Col span={17} className="sreach_bar">
                <div className="nav">
                  <NavLink className="nav_link">Home</NavLink>
                  <NavLink className="nav_link">Contact</NavLink>
                  <NavLink className="nav_link">About</NavLink>
                  <NavLink className="nav_link">Sign Up</NavLink>
                </div>
                <Input
                  placeholder="What are you looking for?"
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
                  <ShoppingCartOutlined
                    className="icon_cart"
                    style={{ fontSize: "25px" }}
                  />
                </div>
              </Col>

              <Col span={3} className="h_drawer">
                <MenuFoldOutlined onClick={showDrawer} />
                <Drawer onClose={onClose} open={open}>
                  <div className="nav_d">
                    <NavLink className="nav_link nav_link_d">Home</NavLink>
                    <NavLink className="nav_link nav_link_d">Contact</NavLink>
                    <NavLink className="nav_link nav_link_d">About</NavLink>
                    <NavLink className="nav_link nav_link_d">Sign Up</NavLink>
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
