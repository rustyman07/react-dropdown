import React from "react";
import MenuItem from "./MenuItem";

function Dropdown({ submenu, dropdown, depthLevel }) {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenu.map((submenu, index) => (
        <MenuItem item={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
}

export default Dropdown;
