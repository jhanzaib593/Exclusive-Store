import React from "react";
import { Carousel, Button, Row, Col } from "antd";
import "./index.css";
import { DoubleRightOutlined } from "@ant-design/icons";

const ImageCarousel = () => {
  return (
    <div className="slider-container">
      <Carousel autoplay dots>
        {/* First Slide */}

        <div className="slide">
          <Row className="slide-content" justify="center" align="middle">
            {/* Text Section */}
            <Col xs={24} md={12} className="text-container">
              <div className="series">
                <img
                  src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfzxwLVUDvoJg~vZJ4lygyHcSh4DLf5TDwS1axk-YTvyeLJJyBg2fBnHt5xLwSsggLRwANQH11GhcLu39AjEi1P2gjKkDQrznfX3cdzNjUqRVoENRxPgHI8~LtChAbqb88Lie69iU9ZRzhHNhhoDSPlrBNQQLr7jFXkPBbv~FO-FVUrAYB58bKhVJVfxDKzgKBviZotQ6k~2rPeDlIKJ3AxGvgOMzfDSt4XPDg-MYKXL0Qxl6kO96~CVBbY3bLTjK7u~cOFsEXYO~5lYSdcEEaO5Bz4zcdEiDUTGbXXEBFR94NgEam--xyrNcdan8qsxa~Nmh1q5YKq0SaDtveN53A__"
                  alt="iPhone 14"
                  className="series-logo"
                />
                <h2 className="series-title">iPhone 14 Series</h2>
              </div>
              <h1 className="discount-text">Up to 10% off Voucher</h1>
              <div className="btn-shop">
                <Button type="primary" size="large" className="shop-now">
                  Shop Now
                </Button>
                <DoubleRightOutlined className="DoubleRightOutlined" />
              </div>
            </Col>

            {/* Image Section */}
            <Col xs={24} md={12} className="image-container">
              <img
                src="https://s3-alpha-sig.figma.com/img/dc40/ba89/7215f42e5883a64157f0aa3a4d1a866a?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hnxHKXvTjrf1aTa00TJ8RBOfLdLn2n99NF75Gqm4UAWwTEx9aDn59MAKGJq~S-BizY80V91SQduEl939PX4z4NxHFmAsPp1DYHZZBVj20E6xXAt6vI6jnQf2sK4UDkzECpw16TE6hThObV-zM7uMNVC9fZdJ8QWL99RGYxU~FIj9fzZa99wCSZ2NHiPAcEIYnB4kmiCkKdU~hEIG2IynqZaCsWi1vF4WR8LF36HI~d-yDxRBPgBZTLUSSjJPcbQHPO1dgLEOaZ9dQaH~VpY2OTrD7jJsKyj58oXydQKc40sIAOAWsnbvY7nZ8-bLoTeQfrOVWBrOEiimTzXzKPcjzQ__"
                alt="iPhone 14"
                className="slider-image"
              />
            </Col>
          </Row>
        </div>

        {/* Second Slide */}

        <div className="slide">
          <Row className="slide-content" justify="center" align="middle">
            {/* Text Section */}
            <Col xs={24} md={12} className="text-container">
              <div className="series">
                <img
                  src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfzxwLVUDvoJg~vZJ4lygyHcSh4DLf5TDwS1axk-YTvyeLJJyBg2fBnHt5xLwSsggLRwANQH11GhcLu39AjEi1P2gjKkDQrznfX3cdzNjUqRVoENRxPgHI8~LtChAbqb88Lie69iU9ZRzhHNhhoDSPlrBNQQLr7jFXkPBbv~FO-FVUrAYB58bKhVJVfxDKzgKBviZotQ6k~2rPeDlIKJ3AxGvgOMzfDSt4XPDg-MYKXL0Qxl6kO96~CVBbY3bLTjK7u~cOFsEXYO~5lYSdcEEaO5Bz4zcdEiDUTGbXXEBFR94NgEam--xyrNcdan8qsxa~Nmh1q5YKq0SaDtveN53A__"
                  alt="Apple"
                  className="series-logo"
                />
                <h2 className="series-title">Apple Watch Ultra 2</h2>
              </div>
              <h1 className="discount-text">Up to 10% off Voucher</h1>
              <div className="btn-shop">
                <Button type="primary" size="large" className="shop-now">
                  Shop Now
                </Button>
                <DoubleRightOutlined className="DoubleRightOutlined" />
              </div>
            </Col>

            {/* Image Section */}
            <Col xs={24} md={12} className="image-container">
              <img
                src="https://www.apple.com/in/apple-watch-ultra-2/images/meta/apple-watch-ultra-2__epn0vw7597qu_og.png"
                alt="Ultra 2"
                className="slider-image"
              />
            </Col>
          </Row>
        </div>

        {/* Third Slide */}

        <div className="slide">
          <Row className="slide-content" justify="center" align="middle">
            {/* Text Section */}
            <Col xs={24} md={12} className="text-container">
              <div className="series">
                <img
                  src="https://s3-alpha-sig.figma.com/img/1126/a357/e5011a6f245df4c38eae015c7c9ccbe7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfzxwLVUDvoJg~vZJ4lygyHcSh4DLf5TDwS1axk-YTvyeLJJyBg2fBnHt5xLwSsggLRwANQH11GhcLu39AjEi1P2gjKkDQrznfX3cdzNjUqRVoENRxPgHI8~LtChAbqb88Lie69iU9ZRzhHNhhoDSPlrBNQQLr7jFXkPBbv~FO-FVUrAYB58bKhVJVfxDKzgKBviZotQ6k~2rPeDlIKJ3AxGvgOMzfDSt4XPDg-MYKXL0Qxl6kO96~CVBbY3bLTjK7u~cOFsEXYO~5lYSdcEEaO5Bz4zcdEiDUTGbXXEBFR94NgEam--xyrNcdan8qsxa~Nmh1q5YKq0SaDtveN53A__"
                  alt="apple"
                  className="series-logo"
                />
                <h2 className="series-title">Apple Vision Pro</h2>
              </div>
              <h1 className="discount-text">Up to 10% off Voucher</h1>
              <div className="btn-shop">
                <Button type="primary" size="large" className="shop-now">
                  Shop Now
                </Button>
                <DoubleRightOutlined className="DoubleRightOutlined" />
              </div>
            </Col>

            {/* Image Section */}
            <Col xs={24} md={12} className="image-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsyPhLTaACyOAy4sRjDTyoYCW9m-H6ZJY7PQ&s"
                alt="apple vision pro"
                className="slider-image"
              />
            </Col>
          </Row>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
