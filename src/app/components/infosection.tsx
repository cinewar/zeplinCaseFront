import Image from "next/image";
import CButton from "../features/corecomponents/cbutton";
import { RIGHTSVG } from "../features/utils/icons";

export default function InfoSection() {
  return (
    <div className="info-section">
      <div className="info">
        <div className="content">
          <div className="up-title">Dergi Amacı ve Kapsamı</div>
          <h2 className="title">Profuture Teknoloji Dergisi</h2>
          <p>
            Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan;
            teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri
            ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir
            araya getiren, uluslararası hakemli ve açık erişimli bir akademik
            yayındır.
          </p>
        </div>
        <CButton
          type="tertiary-button"
          text="Detay"
          iconRight
          icon={RIGHTSVG}
        />
      </div>
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
