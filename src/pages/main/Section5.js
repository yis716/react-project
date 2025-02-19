import React from "react";
import "../../css/Section5.css";
import img1 from "../../images/main/sec5img1.png";
import img2 from "../../images/main/sec5img2.png";

function Section5() {
  
  return (
    <section className="Section5">
      <div className="Section5_head">
        <h3>국민참여</h3>
        <p>소통과 참여로 국민과 함께 만들어 가겠습니다.</p>
      </div>

      <ul>
        <li>
          <div className="info_left">
            <h4>민원이용안내</h4>
            <p>민원관련 사항은 국민 신문고를 통해{"\n"}통합 이용가능합니다.</p>
            <a className="more" href="/Letter">
              자세히보기 {">"}
            </a>
          </div>
          <div className="imgbox">
            <img src={img1} alt="민원이용안내 이미지" />
          </div>
        </li>
        <li>
          <div className="info_left">
            <h4>기상민원</h4>
            <p>언제 어디서나 필요한 민원을 신청 및 발급 받을 수 있도록 제공합니다.</p>
            <a className="more" href="/Letter">
              자세히보기 {">"}
            </a>
          </div>
          <div className="imgbox">
            <img src={img2} alt="기상민원 이미지" />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Section5;
