import React from "react";
import "./footer.scss";

import { footerContactItems } from "./footerContactItems";

export function FooterColumn() {
  return (
    <ul className="footer__list-item">
      {footerContactItems.map(function (item) {
        return (
          <li className="footer__item">
            <a
              key={item.itemName}
              href={item.href}
            >
             {item.itemName}
            </a>
          </li>
      );
      })}
    </ul>
  );
}
