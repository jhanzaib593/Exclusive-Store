import React from "react";
import ImageCarousel from "../../components/banner";
import { Col, Row } from "antd";
import SideBar from "../../components/sidebar";
import CountdownTimer from "../../components/flashSales";
import Categories from "../../components/categories";

export default function Home() {
  return (
    <>
      <div className="container">
        <Row>
          <Col sm={24} md={8}>
            <SideBar />
          </Col>

          <Col sm={24} md={16} style={{ margin: "auto" }}>
            <ImageCarousel />
          </Col>
        </Row>

        <CountdownTimer />
        <Categories />
      </div>
    </>
  );
}
