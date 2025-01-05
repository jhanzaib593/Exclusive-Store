import React, { useState, useEffect } from "react";
import "./index.css";
import { Col, Row } from "antd";
import ProductSlider from "./product";
export default function CountdownTimer() {
  const [targetDate] = useState(() => {
    const initialDate = new Date();
    initialDate.setDate(initialDate.getDate() + 6);
    initialDate.setSeconds(initialDate.getSeconds() - 45);
    return initialDate;
  });

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="flash-sales">
      <div className="header">
        <h4 className="today">Today's</h4>
        <div className="timer">
          <Row>
            <Col sm={8} md={8} style={{ paddingTop: "1em" }}>
              <h2>Flash Sales</h2>
            </Col>
            <Col sm={16} md={16}>
              <div className="countdown">
                <div>
                  <p>Days</p>
                  <span>{timeLeft.days}</span> :
                </div>
                <span className="text-2xl">:</span>

                <div>
                  <p>Hours</p>
                  <span>{timeLeft.hours}</span>
                </div>
                <span className="text-2xl">:</span>

                <div>
                  <p>Minutes</p>
                  <span>{timeLeft.minutes}</span>
                </div>
                <span className="text-2xl">:</span>

                <div>
                  <p>Seconds</p>
                  <span>{timeLeft.seconds}</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
}
