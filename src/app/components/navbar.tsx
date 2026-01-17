"use client";

import CButton from "@/app/features/corecomponents/cbutton";
import { ANALITICSVG, CILTSVG } from "../features/utils/icons";

export default function Navbar() {
  return (
    <>
      <CButton
        onClick={() => console.log("clicked")}
        text="click"
        icon={CILTSVG}
        iconLeft
      />
    </>
  );
}
