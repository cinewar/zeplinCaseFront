"use client";

import CButton from "@/app/features/corecomponents/cbutton";
import {
  AUTHORSVG,
  HOMESVG,
  KURULSVG,
  MESSAGESVG,
  SEARCHSVG,
} from "../features/utils/icons";
import Image from "next/image";
import CIcon from "../features/corecomponents/CIcon";

export default function Navbar() {
  return (
    <>
      <div className="cheader">
        <div className="logo-section">
          <Image src="/images/logo.png" width={283} height={91} alt="logo" />
        </div>
        <div className="buttons-section">
          <div className="info">
            <div className="email">
              <CIcon icon={MESSAGESVG} />
              <div>profuture@gmail.com</div>
            </div>
            <div className="magazine-info">
              <div>
                <span className="label">ISSN:</span>
                <span className="text">345-255</span>
              </div>
              <div>
                <span className="label">Başlangıç:</span>
                <span className="text">2025</span>
              </div>
              <div>
                <span className="label">Periyot:</span>
                <span className="text">Yılda 2 sayı</span>
              </div>
            </div>
          </div>
          <div className="navbar">
            <span className="home-icon">
              <CIcon icon={HOMESVG} />
            </span>
            <div className="contact-us">
              <div className="about-section">
                <CButton type="base-button" text="Amaç ve Kapsam" />
                <CButton
                  type="base-button"
                  text="Etik İlkeler ve Yayın Politikası"
                />
                <CButton type="base-button" text="Makale Çağrıları" />
                <CButton type="base-button" text="Sayılar" />
                <CButton type="base-button" text="İletişim" />
              </div>
              <div className="apply-section">
                <CButton
                  iconLeft
                  icon={KURULSVG}
                  type="primary-button"
                  text="Dergi Kurulu"
                />
                <CButton
                  iconLeft
                  icon={AUTHORSVG}
                  type="secondary-button"
                  text="Yazar Rehberi"
                />
                <CButton icon={SEARCHSVG} iconLeft type="round-base-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CButton
        onClick={() => console.log("clicked")}
        text="click"
        icon={CILTSVG}
        iconLeft
      /> */}
    </>
  );
}
