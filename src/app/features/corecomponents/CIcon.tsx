import { JSX, ReactElement, SVGProps } from "react";

interface ICIconProps {
  icon: JSX.Element;
}

export default function CIcon({
  icon,
  ...props
}: ICIconProps & SVGProps<SVGSVGElement>): ReactElement {
  return icon;
}
