import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Function to handle language change
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    window.location.reload();
  };

  // Menu items for dropdown
  const menu = (
    <Menu onClick={(e) => changeLanguage(e.key)}>
      <Menu.Item key="en">English</Menu.Item>
      <Menu.Item key="ar">العربية</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button>
          {i18n.language === "en" ? "English" : "العربية"} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default LanguageSwitcher;
