import React from "react";
import { Menu, Space } from "antd";
import Search from "antd/es/transfer/search";
import "./index.css";
import { useTranslation } from "react-i18next";

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
  const language = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();

  // Function to map categories into Menu items
  const createMenuItems = () =>
    categories.map((category, index) => ({
      key: `category-${index}`,
      label: category[language].name,
      children: category[language].subcategories
        ? category[language].subcategories.map((subcategory, subIndex) => ({
            key: `subcategory-${index}-${subIndex}`,
            label: subcategory,
          }))
        : null,
    }));

  const onClick = (e) => {
    console.log("Clicked: ", e.key);
  };

  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <Menu
      onClick={onClick}
      style={{
        backgroundColor: "#f9fafb",
      }}
      // defaultSelectedKeys={["category-0"]}
      // defaultOpenKeys={["category-0"]}
      mode="inline"
      items={[
        {
          key: "search",
          label: (
            <Space direction="vertical" style={{ width: "100%" }}>
              <Search
                placeholder={t("placeholder")}
                onSearch={onSearch}
                size="large"
                style={{}}
              />
            </Space>
          ),
        },
        ...createMenuItems(),
      ]}
    />
  );
};

export default SideBar;
