"use client";

import CButton from "../features/corecomponents/cbutton";
import { ANALITIC } from "../features/utils/icons";

export default function Navbar() {
  return (
    <>
      <CButton
        onClick={() => console.log("clicked")}
        text="click"
        icon={ANALITIC}
        iconRight
      />
    </>
  );
}
