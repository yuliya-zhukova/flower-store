import React from "react";
import "./footer.scss";

import { FooterColumn } from "./FooterColumn";

import { footerColumnNames } from "./footerColumnNames";

export function FooterSection() {
  return (
    <>
      {footerColumnNames.map(function (name) {
        return (
          <div className="footer__column">
            <div class="footer__columnName">{name}</div>
            <FooterColumn id={name} />
          </div>
        );
      })}
    </>
  );
}
