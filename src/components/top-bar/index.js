import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import "./index.css";
export function TopBanner() {
  return (
    <div className="topbanner">
      <p style={{ margin: "auto" }}>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF
        50%!&nbsp;
        <Link to="/shop" style={{ color: "white", fontWeight: 600 }}>
          Shop Now
        </Link>
      </p>
    </div>
  );
}
