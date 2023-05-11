import React from "react";
import { data } from "./data";
import MenuItem from "./MenuItem";

function Navbar() {
  return (
    <nav>
      <ul className="menus">
        {data.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItem item={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
