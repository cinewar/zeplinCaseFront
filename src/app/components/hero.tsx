import CButton from "../features/corecomponents/cbutton";
import CIcon from "../features/corecomponents/CIcon";
import {
  CALENDARSVG,
  CILTSVG,
  NUMBERSVG,
  RIGHTSVG,
} from "../features/utils/icons";

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="content">
          <h2>Profuture Teknoloji Dergisi </h2>
          <h1>Son Sayı Yayında</h1>
          <p>
            Protufure teknoloji mekanizmaları değişikliği alanlarında özgün
            akademik çalışmalar içeren yeni sayıya şimdi erişin.
          </p>
          <div className="hero-info">
            <div className="item">
              <CIcon icon={CILTSVG} />
              <span className="label">Cilt:</span>
              <span className="text">5</span>
            </div>
            <div className="item">
              <CIcon icon={NUMBERSVG} />
              <span className="label">Sayı:</span>
              <span className="text">7</span>
            </div>
            <div className="item">
              <CIcon icon={CALENDARSVG} />
              <span className="text">Haziran 2025</span>
            </div>
          </div>
        </div>
        <div>
          <CButton
            type="primary-button"
            iconRight
            icon={RIGHTSVG}
            text="Dergiyi Görüntüle"
          />
        </div>
      </div>
    </div>
  );
}
