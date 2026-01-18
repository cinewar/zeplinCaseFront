"use client";

import Image from "next/image";
import { CSSProperties, JSX } from "react";
import CIcon from "@/app/features/corecomponents/CIcon";

interface ICButtonProps {
  type:
    | "base-button"
    | "primary-button"
    | "secondary-button"
    | "round-base-button"
    | "round-primary-button"
    | "tertiary-button"
    | "pagination-button";
  text?: string;
  icon?: JSX.Element;
  iconLeft?: boolean;
  iconRight?: boolean;
  onClick?: () => void;
  buttonStyle?: CSSProperties;
  textStyle?: CSSProperties;
  disabled?: boolean;
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
  disabled,
}: ICButtonProps) {
  return (
    <>
      <button
        disabled={disabled}
        className={type}
        style={buttonStyle}
        onClick={onClick}
      >
        {iconLeft && icon && <CIcon icon={icon} />}
        <div className="cbutton-text" style={textStyle}>
          {text}
        </div>
        {iconRight && icon && <CIcon icon={icon} />}
      </button>
    </>
  );
}
