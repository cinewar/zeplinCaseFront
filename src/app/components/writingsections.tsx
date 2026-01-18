import Image from "next/image";
import CCard from "../features/corecomponents/CCard";
import CButton from "../features/corecomponents/cbutton";
import {
  AUTHORSVG,
  DOWNLOADSVG,
  EMAILSVG,
  EYESVG,
  PDFSVG,
  RIGHTSVG,
  STICKYNOTESSVG,
} from "../features/utils/icons";
import CBadge from "../features/corecomponents/cbadge";
import CIcon from "../features/corecomponents/CIcon";

export default function WritingSection() {
  return (
    <div className="writing-section">
      <div className="image-wrapper">
        <CCard
          stick
          sticktext="Son Sayı"
          style={{
            border: "5px solid #FFD9DA",
            boxShadow: "1px 4px 10px 0px rgba(191,191,191,191.24)",
          }}
        >
          <Image
            className="image"
            src={"/images/image1.png"}
            alt="image1"
            width={333}
            height={500}
          />
          <div className="buttons">
            <CButton icon={DOWNLOADSVG} iconLeft type="round-base-button" />
            <CButton
              type="primary-button"
              iconLeft
              icon={EYESVG}
              text="Görüntüle"
            />
          </div>
        </CCard>
      </div>
      <div className="writing-wrapper">
        <div className="title-wrapper">
          <div className="texts">
            <div className="up-title">Profuture Teknoloji Dergisi</div>
            <h2 className="title">Güncel Yazılar</h2>
          </div>
          <CButton
            text="Tümünü Görüntüle"
            icon={RIGHTSVG}
            iconRight
            type="tertiary-button"
          />
        </div>
        <CCard
          style={{
            border: "1px solid #DFE3F1",
            boxShadow: "1px 4px 10px 0px rgba(191,191,191,191.24)",
            marginBottom: 10,
          }}
        >
          <div className="badges">
            <CBadge text="iklim" type="environment-badge" />
            <CBadge text="Araştırma Makalesi" type="text-badge" />
          </div>
          <div className="content">
            <div className="texts-wrapper">
              <div className="content-title-texts">
                <CIcon icon={PDFSVG} />
                <h6 className="title">
                  Türkiye’nin Teknoloji Politikaları ve Döngüsel Ekonomi
                </h6>
              </div>
              <div className="subtexts">
                <div className="item">
                  <CButton
                    icon={STICKYNOTESSVG}
                    iconLeft
                    type="round-subtitle-button"
                  />
                  <span className="label">Sayfa:</span>
                  <span className="text">12-28</span>
                </div>
                <div className="item">
                  <CButton
                    icon={AUTHORSVG}
                    iconLeft
                    type="round-subtitle-button"
                  />
                  <span className="label">
                    Elif Başkaya Acar, Emre Taran, Halil Başar
                  </span>
                </div>
              </div>
            </div>
            <div className="buttons">
              <CButton icon={EMAILSVG} iconLeft type="round-base-button" />
              <CButton icon={DOWNLOADSVG} iconLeft type="round-base-button" />
              <CButton
                type="primary-button"
                iconLeft
                icon={EYESVG}
                text="Görüntüle"
              />
            </div>
          </div>
        </CCard>
        <CCard
          style={{
            border: "1px solid #DFE3F1",
            boxShadow: "1px 4px 10px 0px rgba(191,191,191,191.24)",
            marginBottom: 10,
          }}
        >
          <div className="badges">
            <CBadge text="iklim" type="environment-badge" />
            <CBadge text="Araştırma Makalesi" type="text-badge" />
          </div>
          <div className="content">
            <div className="texts-wrapper">
              <div className="content-title-texts">
                <CIcon icon={PDFSVG} />
                <h6 className="title">
                  Türkiye’nin Teknoloji Politikaları ve Döngüsel Ekonomi
                </h6>
              </div>
              <div className="subtexts">
                <div className="item">
                  <CButton
                    icon={STICKYNOTESSVG}
                    iconLeft
                    type="round-subtitle-button"
                  />
                  <span className="label">Sayfa:</span>
                  <span className="text">12-28</span>
                </div>
                <div className="item">
                  <CButton
                    icon={AUTHORSVG}
                    iconLeft
                    type="round-subtitle-button"
                  />
                  <span className="label">
                    Elif Başkaya Acar, Emre Taran, Halil Başar
                  </span>
                </div>
              </div>
            </div>
            <div className="buttons">
              <CButton icon={EMAILSVG} iconLeft type="round-base-button" />
              <CButton icon={DOWNLOADSVG} iconLeft type="round-base-button" />
              <CButton
                type="primary-button"
                iconLeft
                icon={EYESVG}
                text="Görüntüle"
              />
            </div>
          </div>
        </CCard>
        <CCard
          style={{
            border: "1px solid #DFE3F1",
            boxShadow: "1px 4px 10px 0px rgba(191,191,191,191.24)",
            marginBottom: 10,
          }}
        >
          <div className="badges">
            <CBadge text="iklim" type="environment-badge" />
            <CBadge text="Araştırma Makalesi" type="text-badge" />
          </div>
          <div className="content">
            <div className="texts-wrapper">
              <div className="content-title-texts">
                <CIcon icon={PDFSVG} />
                <h6 className="title">
                  Türkiye’nin Teknoloji Politikaları ve Döngüsel Ekonomi
                </h6>
              </div>
              <div className="subtexts">
                <div className="item">
                  <CButton
                    icon={STICKYNOTESSVG}
                    iconLeft
                    type="round-subtitle-button"
                  />
                  <span className="label">Sayfa:</span>
                  <span className="text">12-28</span>
                </div>
                <div className="item">
                  <CButton
                    icon={AUTHORSVG}
                    iconLeft
                    type="round-subtitle-button"
                  />
                  <span className="label">
                    Elif Başkaya Acar, Emre Taran, Halil Başar
                  </span>
                </div>
              </div>
            </div>
            <div className="buttons">
              <CButton icon={EMAILSVG} iconLeft type="round-base-button" />
              <CButton icon={DOWNLOADSVG} iconLeft type="round-base-button" />
              <CButton
                type="primary-button"
                iconLeft
                icon={EYESVG}
                text="Görüntüle"
              />
            </div>
          </div>
        </CCard>
        <CCard
          style={{
            border: "1px solid #DFE3F1",
            boxShadow: "1px 4px 10px 0px rgba(191,191,191,191.24)",
            marginBottom: 10,
          }}
        >
          <div className="badges">
            <CBadge text="iklim" type="environment-badge" />
            <CBadge text="Araştırma Makalesi" type="text-badge" />
          </div>
          <div className="content">
            <div className="texts-wrapper">
              <div className="content-title-texts">
                <CIcon icon={PDFSVG} />
                <h6 className="title">
                  Türkiye’nin Teknoloji Politikaları ve Döngüsel Ekonomi
                </h6>
              </div>
              <div className="subtexts">
                <div className="item">
                  <CButton
                    icon={STICKYNOTESSVG}
                    iconLeft
                    type="round-subtitle-button"
                  />
                  <span className="label">Sayfa:</span>
                  <span className="text">12-28</span>
                </div>
                <div className="item">
                  <CButton
                    icon={AUTHORSVG}
                    iconLeft
                    type="round-subtitle-button"
                  />
                  <span className="label">
                    Elif Başkaya Acar, Emre Taran, Halil Başar
                  </span>
                </div>
              </div>
            </div>
            <div className="buttons">
              <CButton icon={EMAILSVG} iconLeft type="round-base-button" />
              <CButton icon={DOWNLOADSVG} iconLeft type="round-base-button" />
              <CButton
                type="primary-button"
                iconLeft
                icon={EYESVG}
                text="Görüntüle"
              />
            </div>
          </div>
        </CCard>
      </div>
    </div>
  );
}
