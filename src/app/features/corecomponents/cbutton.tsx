"use client";

import Image from "next/image";
import { CSSProperties, JSX } from "react";
import CIcon from "@/app/features/corecomponents/CIcon";

interface ICButtonProps {
  type:
    | "base-button"
    | "primary-button"
    | "secondary-button"
    | "round-base-button";
  text?: string;
  icon?: JSX.Element;
  iconLeft?: boolean;
  iconRight?: boolean;
  onClick?: () => void;
  buttonStyle?: CSSProperties;
  textStyle?: CSSProperties;
}

export default function CButton({
  type,
  text,
  icon,
  iconLeft,
  iconRight,
  onClick,
  buttonStyle,
  textStyle,
}: ICButtonProps) {
  return (
    <>
      <button className={type} style={buttonStyle} onClick={onClick}>
        {iconLeft && icon && <CIcon icon={icon} />}
        <div className="cbutton-text" style={textStyle}>
          {text}
        </div>
        {iconRight && icon && <CIcon icon={icon} />}
      </button>
    </>
  );
}
