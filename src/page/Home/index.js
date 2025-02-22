import React from "react";
import ImageCarousel from "../../components/banner";
import { Col, Row } from "antd";
import SideBar from "../../components/sidebar";
import OurBrand from "../../components/brand";
import ProductDeals from "../../components/flashSales/product";
import NewProduct from "../../components/newProduct";
import Collections from "../../components/collection";

export default function Home() {
  return (
    <>
      <div className="container">
        <Row>
          <Col sm={24} md={6}>
            <SideBar />
          </Col>

          <Col sm={24} md={18}>
            <ImageCarousel />
          </Col>
        </Row>
        <OurBrand />
        <ProductDeals />
        <NewProduct />
        <Collections />
      </div>
    </>
  );
}
