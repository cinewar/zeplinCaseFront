import Image from "next/image";
import CIcon from "../features/corecomponents/CIcon";
import { PROMOTIONSVG, RIGHTSVG } from "../features/utils/icons";
import CButton from "../features/corecomponents/cbutton";

export default function NoticeSection() {
  return (
    <div className="notice-section">
      <div className="notice-wrapper">
        <Image
          className="left-image"
          alt="article1"
          width={514}
          height={439}
          src={"/images/article1.png"}
        />
        <div className="notice-texts">
          <span className="icon">
            <CIcon icon={PROMOTIONSVG} />
          </span>
          <div className="up-title">Makale Çağrısı</div>
          <h2 className="title">Türkiye Ulusal Dijital Veri ve Altyapıları</h2>
          <p>
            Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve
            özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük
            veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm
            odaklı özgün, güncel ve disiplinlerarası akademik
            çalışmalar değerlendirilecektir.
          </p>
          <div className="button-wrapper">
            <CButton
              icon={RIGHTSVG}
              iconRight
              text="Makale Gönder"
              type="send-button"
            />
          </div>
        </div>
        <div className="right-image">
          <Image
            alt="article1"
            width={306}
            height={465}
            src={"/images/article2.png"}
          />
        </div>
      </div>
    </div>
  );
}
