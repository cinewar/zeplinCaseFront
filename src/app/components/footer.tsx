import CButton from "../features/corecomponents/cbutton";
import CIcon from "../features/corecomponents/CIcon";
import {
  EMAILSVG,
  IDCARDSVG,
  LOCATIONSVG,
  MESSAGESVG,
} from "../features/utils/icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <div className="contact">
          <div className="personal">
            <span>
              <CButton icon={IDCARDSVG} iconLeft type="round-base-button" />
            </span>
            <div className="texts">
              <div className="label">Dergi Editörü</div>
              <div className="name">Prof. Dr. Elif Başkaya Acar </div>
              <div className="email">
                <span>
                  <CIcon icon={EMAILSVG} />
                </span>
                <span>elif@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="email">
            <CButton icon={MESSAGESVG} iconLeft type="round-base-button" />
            <div className="texts">
              <div className="label">Mail Adresi</div>
              <div className="email">
                <span>elif@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="location">
            <span>
              <CButton icon={LOCATIONSVG} iconLeft type="round-base-button" />
            </span>
            <span className="label">
              Profuture Teknoloji Yayınevi Ahmet Kemal Mahallesi 1245. Cadde No:
              10 Çankaya/Ankara
            </span>
          </div>
        </div>
        <div className="privacy">
          Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak
          gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler yalnızca
          bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından
          doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim
          sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş
          sayılır.
        </div>
      </div>
      <div className="rights">
        Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025
      </div>
    </div>
  );
}
