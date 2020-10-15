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
            <h4 className="footer__columnName">{name}</h4>
            <FooterColumn id={name} />
          </div>
        );
      })}
    </>
  );
}
