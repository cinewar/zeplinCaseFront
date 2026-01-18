import React, { CSSProperties, ReactNode } from "react";
import CBadge from "./cbadge";

interface ICCardProps {
  badge?: boolean;
  badgetype?:
    | "new-badge"
    | "new-edition-badge"
    | "city-badge"
    | "environment-badge"
    | "climate-badge";
  badgetext?: string;
  stick?: boolean;
  sticktext?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export default function CCard({
  children,
  badge,
  badgetext,
  badgetype,
  sticktext,
  stick,
  style,
}: ICCardProps) {
  return (
    <div style={style} className="ccard">
      {badge && (
        <CBadge
          badgeStyle={{ position: "absolute", top: 16, right: 16 }}
          text={badgetext}
          type={badgetype}
        />
      )}
      {stick && <div className="stick">{sticktext}</div>}
      {children}
    </div>
  );
}
