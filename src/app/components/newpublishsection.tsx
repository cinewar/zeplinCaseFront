import Image from "next/image";
import CButton from "../features/corecomponents/cbutton";
import CCard from "../features/corecomponents/CCard";
import {
  CALENDARSVG,
  CILTSVG,
  DOWNLOADSVG,
  EYESVG,
  LEFTSVG,
  NUMBERSVG,
  PDFSVG,
  RIGHTSVG,
} from "../features/utils/icons";
import CIcon from "../features/corecomponents/CIcon";
import CBadge from "../features/corecomponents/cbadge";

export default function NewPublishSection() {
  return (
    <div className="new-publish-section">
      <div className="directing">
        <div className="pagination">
          <div className="texts">
            <div className="up-title">Sayılar</div>
            <h2 className="title">Dergiler</h2>
          </div>
          <div className="buttons">
            <CButton
              disabled
              icon={LEFTSVG}
              iconLeft
              type="pagination-button"
            />
            <CButton icon={RIGHTSVG} iconLeft type="pagination-button" />
          </div>
        </div>
        <CButton
          text="Tümünü Görüntüle"
          icon={RIGHTSVG}
          iconRight
          type="tertiary-button"
        />
      </div>
      <div className="cards">
        <CCard badge badgetext="new" badgetype="new-badge">
          <div className="card-content">
            <Image
              className="image"
              width={175}
              height={260}
              src={"/images/maskgroup.png"}
              alt="card image"
            />
            <div className="content">
              <div className="content-texts">
                <CIcon icon={PDFSVG} />
                <CBadge type="text-badge" text="Dergi" />
                <h6 className="title">Teknoloji ve Dijital Dergisi</h6>
                <div className="row-items">
                  <div className="item">
                    <CIcon icon={CILTSVG} />
                    <span className="label">Cilt:</span>
                    <span className="text">1</span>
                  </div>
                  <div className="item">
                    <CIcon icon={NUMBERSVG} />
                    <span className="label">Sayı:</span>
                    <span className="text">1</span>
                  </div>
                </div>
                <div className="item">
                  <CIcon icon={CALENDARSVG} />
                  <span className="text">Aralık 2022</span>
                </div>
              </div>
              <div className="buttons">
                <CButton icon={EYESVG} iconLeft type="round-primary-button" />
                <CButton icon={DOWNLOADSVG} iconLeft type="round-base-button" />
                <CButton icon={RIGHTSVG} iconLeft type="round-base-button" />
              </div>
            </div>
          </div>
        </CCard>
        <CCard badge badgetext="new" badgetype="new-badge">
          <div className="card-content">
            <Image
              className="image"
              width={175}
              height={260}
              src={"/images/maskgroup.png"}
              alt="card image"
            />
            <div className="content">
              <div className="content-texts">
                <CIcon icon={PDFSVG} />
                <CBadge type="text-badge" text="Dergi" />
                <h6 className="title">Teknoloji ve Dijital Dergisi</h6>
                <div className="row-items">
                  <div className="item">
                    <CIcon icon={CILTSVG} />
                    <span className="label">Cilt:</span>
                    <span className="text">1</span>
                  </div>
                  <div className="item">
                    <CIcon icon={NUMBERSVG} />
                    <span className="label">Sayı:</span>
                    <span className="text">1</span>
                  </div>
                </div>
                <div className="item">
                  <CIcon icon={CALENDARSVG} />
                  <span className="text">Aralık 2022</span>
                </div>
              </div>
              <div className="buttons">
                <CButton icon={EYESVG} iconLeft type="round-primary-button" />
                <CButton icon={DOWNLOADSVG} iconLeft type="round-base-button" />
                <CButton icon={RIGHTSVG} iconLeft type="round-base-button" />
              </div>
            </div>
          </div>
        </CCard>
        <CCard
          badge
          badgetext="new"
          badgetype="new-badge"
          stick
          sticktext="son sayı"
        >
          <div className="card-content">
            <Image
              className="image"
              width={175}
              height={260}
              src={"/images/maskgroup.png"}
              alt="card image"
            />
            <div className="content">
              <div className="content-texts">
                <CIcon icon={PDFSVG} />
                <CBadge type="text-badge" text="Dergi" />
                <h6 className="title">Teknoloji ve Dijital Dergisi</h6>
                <div className="row-items">
                  <div className="item">
                    <CIcon icon={CILTSVG} />
                    <span className="label">Cilt:</span>
                    <span className="text">1</span>
                  </div>
                  <div className="item">
                    <CIcon icon={NUMBERSVG} />
                    <span className="label">Sayı:</span>
                    <span className="text">1</span>
                  </div>
                </div>
                <div className="item">
                  <CIcon icon={CALENDARSVG} />
                  <span className="text">Aralık 2022</span>
                </div>
              </div>
              <div className="buttons">
                <CButton icon={EYESVG} iconLeft type="round-primary-button" />
                <CButton icon={DOWNLOADSVG} iconLeft type="round-base-button" />
                <CButton icon={RIGHTSVG} iconLeft type="round-base-button" />
              </div>
            </div>
          </div>
        </CCard>
      </div>
    </div>
  );
}
