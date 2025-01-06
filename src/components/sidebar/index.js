import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./index.css";

const categories = [
  {
    en: {
      name: "Woman's Fashion",
      subcategories: ["Dresses", "Shoes", "Bags", "Accessories"],
    },
    ar: {
      name: "أزياء النساء",
      subcategories: ["فساتين", "أحذية", "حقائب", "إكسسوارات"],
    },
  },
  {
    en: {
      name: "Men's Fashion",
      subcategories: ["Shirts", "Shoes", "Watches", "Accessories"],
    },
    ar: {
      name: "أزياء الرجال",
      subcategories: ["قمصان", "أحذية", "ساعات", "إكسسوارات"],
    },
  },
  {
    en: {
      name: "Electronics",
    },
    ar: {
      name: "الإلكترونيات",
    },
  },
  {
    en: {
      name: "Home & Lifestyle",
    },
    ar: {
      name: "المنزل والحياة",
    },
  },
  {
    en: {
      name: "Medicine",
    },
    ar: {
      name: "الطب",
    },
  },
  {
    en: {
      name: "Sports & Outdoor",
    },
    ar: {
      name: "الرياضة والهواء الطلق",
    },
  },
  {
    en: {
      name: "Baby's & Toys",
    },
    ar: {
      name: "ألعاب الأطفال",
    },
  },
  {
    en: {
      name: "Groceries & Pets",
    },
    ar: {
      name: "البقالة والحيوانات الأليفة",
    },
  },
  {
    en: {
      name: "Health & Beauty",
    },
    ar: {
      name: "الصحة والجمال",
    },
  },
];

const SideBar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  const renderMenu = () => {
    // Get the current language from localStorage
    const language = localStorage.getItem("i18nextLng");

    return (
      <Menu mode="vertical" className="sidebar-menu">
        {categories.map((category, index) => {
          const categoryName = category[language]?.name;
          const subcategories = category[language]?.subcategories;

          return subcategories ? (
            <Menu.SubMenu
              key={index}
              title={<span className="menu-item">{categoryName}</span>}
            >
              {subcategories.map((subcategory, subIndex) => (
                <Menu.Item key={`${index}-${subIndex}`}>
                  {subcategory}
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item key={index}>
              <span className="menu-item">{categoryName}</span>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

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