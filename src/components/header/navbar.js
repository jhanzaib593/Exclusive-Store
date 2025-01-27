import React from "react";
import { Button, Dropdown, Space, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "./index.css";

const Navbar = () => {
  const { t } = useTranslation();
  const supportsMenu = (
    <Menu>
      <Menu.Item key="1">
        <a rel="noopener noreferrer" href="/">
          {t("Contact")}
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a rel="noopener noreferrer" href="/">
          {t("Contact")}
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a rel="noopener noreferrer" href="/">
          {t("FAQs")}
        </a>
      </Menu.Item>
      <Menu.Item key="4">
        <a rel="noopener noreferrer" href="/">
          {t("Chat With Us")}
        </a>
      </Menu.Item>
      <Menu.Item key="5">
        <a rel="noopener noreferrer" href="/">
          {t("Warranty")}
        </a>
      </Menu.Item>
      <Menu.Item key="6">
        <a rel="noopener noreferrer" href="/">
          {t("Return Request")}
        </a>
      </Menu.Item>
    </Menu>
  );
  const accountMenu = (
    <Menu>
      <Menu.Item key="1">
        <a rel="noopener noreferrer" href="/">
          {t("Login")}
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a rel="noopener noreferrer" href="/">
          {t("Register")}
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <NavLink className="nav_link">{t("Contact")}</NavLink>
      <span className="separator">|</span>

      <Space direction="vertical">
        <Space wrap>
          <Dropdown
            className="dropdown"
            overlay={supportsMenu}
            placement="bottomRight"
            arrow
          >
            <Button>
              {t("Support")} <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </Space>
      <span className="separator">|</span>

      <a href="/" className="request">
        {t("Request")}
      </a>
      <span className="separator">|</span>

      <Space direction="vertical">
        <Space wrap>
          <Dropdown
            className="dropdown"
            overlay={accountMenu}
            placement="bottomRight"
            arrow
          >
            <Button>
              <UserOutlined /> {t("Account")} <DownOutlined />
            </Button>
          </Dropdown>
        </Space>
      </Space>
      <span className="separator">|</span>
    </div>
  );
};

export default Navbar;
