import React from "react";
import img from "../assets/globe.png";

export default function Header() {
  return (
    <div className="header__container">
      <img src={img} alt="globe icon" />
      <h1>my travel journal</h1>
    </div>
  );
}
