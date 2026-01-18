import { CSSProperties } from "react";

interface IBadgeProps {
  text?: string;
  badgeStyle?: CSSProperties;
  type?:
    | "new-badge"
    | "new-edition-badge"
    | "city-badge"
    | "environment-badge"
    | "climate-badge"
    | "text-badge";
}

export default function CBadge({ text, type, badgeStyle }: IBadgeProps) {
  return (
    <span style={badgeStyle} className={type}>
      {text}
    </span>
  );
}
