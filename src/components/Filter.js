import React from "react";
import "../css/filter.css";

export function Filter() {
  return (
    <div className="filterContainer">
      <ul> SORT BY </ul>
      <ul id="filter30Days"> 30 Days </ul>
      <ul id="filter3Months"> 3 Months </ul>
      <ul className="underlined" id="filterAll">
        {" "}
        ALL Events{" "}
      </ul>
      <ul> View Calendar </ul>
    </div>
  );
}

export default Filter;
