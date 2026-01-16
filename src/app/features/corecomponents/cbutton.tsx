"use client";

import Image from "next/image";
import { CSSProperties } from "react";

interface ICButtonProps {
  text?: string;
  icon?: string;
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
      <button className="cbutton" style={buttonStyle} onClick={onClick}>
        {iconLeft && (
          <Image
            alt="icon left"
            src={icon ?? ""}
            width={iconWidth}
            height={iconHeight}
          />
        )}
        <div className="cbutton-text" style={textStyle}>
          {text}
        </div>
        {iconRight && (
          <Image
            className="cbutton-icon"
            alt="icon right"
            src={icon ?? ""}
            width={24}
            height={24}
          />
        )}
      </button>
    </>
  );
}
