import React from "react";
import "./Footer.scss";

import { FooterSection } from "./FooterSection";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__row footer__row_info">
        <FooterSection />
      </div>
      <div className="footer__row footer__row_copyright">Copyright, 2020</div>
    </div>
  );
}
