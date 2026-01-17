"use client";

import Image from "next/image";
import { CSSProperties, JSX } from "react";
import CIcon from "@/app/features/corecomponents/CIcon";

interface ICButtonProps {
  text?: string;
  icon?: JSX.Element;
  iconLeft?: boolean;
  iconRight?: boolean;
  iconWidth?: number;
  iconHeight?: number;
  onClick?: () => void;
  buttonStyle?: CSSProperties;
  textStyle?: CSSProperties;
}

export default function CButton({
  text,
  icon,
  iconLeft,
  iconRight,
  iconWidth = 24,
  iconHeight = 24,
  onClick,
  buttonStyle,
  textStyle,
}: ICButtonProps) {
  return (
    <>
      <button className="cprimary-button" style={buttonStyle} onClick={onClick}>
        {iconLeft && icon && <CIcon icon={icon} />}
        <div className="cbutton-text" style={textStyle}>
          {text}
        </div>
        {iconRight && icon && <CIcon icon={icon} />}
      </button>
    </>
  );
}
