import Image from "next/image";

export default function InfoSection() {
  return (
    <div className="info-section">
      <div className="info"></div>
      <Image
        className="image"
        width={739}
        height={696}
        src={"/images/dergison1.png"}
        alt="info image"
      />
    </div>
  );
}
