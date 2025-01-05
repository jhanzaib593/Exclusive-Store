import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./index.css";

const categories = [
  {
    name: "Woman's Fashion",
    subcategories: ["Dresses", "Shoes", "Bags", "Accessories"],
  },
  {
    name: "Men's Fashion",
    subcategories: ["Shirts", "Shoes", "Watches", "Accessories"],
  },
  { name: "Electronics" },
  { name: "Home & Lifestyle" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

const SideBar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  const renderMenu = () => (
    <Menu mode="vertical" className="sidebar-menu">
      {categories.map((category, index) =>
        category.subcategories ? (
          <Menu.SubMenu
            key={index}
            title={<span className="menu-item">{category.name}</span>}
          >
            {category.subcategories.map((subcategory, subIndex) => (
              <Menu.Item key={`${index}-${subIndex}`}>{subcategory}</Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={index}>
            <span className="menu-item">{category.name}</span>
          </Menu.Item>
        )
      )}
    </Menu>
  );

  return (
    <div>
      {/* Mobile Drawer */}
      <Drawer
        title="Categories"
        placement="left"
        onClose={closeDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        {renderMenu()}
      </Drawer>

      <Button
        icon={<MenuOutlined />}
        onClick={showDrawer}
        className="mobile-menu-button"
      />

      {/* Desktop Sidebar */}
      <div className="desktop-sidebar">{renderMenu()}</div>
    </div>
  );
};

export default SideBar;
