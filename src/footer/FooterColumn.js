import React from "react";
import "./footer.scss";

import { footerContactItems } from "./footerContactItems";

export function FooterColumn() {
  return (
    <>
      {footerContactItems.map(function (item) {
        return <div>{item.itemName}</div>;
      })}
    </>
  );
}
