import React from "react";
import "../subcss/Letter.css";
import img1 from "../images/letter/img1.png";
import img2 from "../images/letter/img2.png";
import img3 from "../images/letter/img3.png";
import img4 from "../images/letter/img4.png";
import img5 from "../images/letter/img5.png";
import img6 from "../images/letter/img6.png";
import { FaCircleExclamation } from "react-icons/fa6";

function Letter2() {
  const LetterCon2 = [
    {
      title: "국민행복제안신청",
      con: "국민신문고에 정부시책 또는 행정제도·운영의 개선을 목적으로 행정기관의 장에게 창의적인 의견 또는 고안을 제출하실 수 있습니다. 제출하신 국민제안은 실시 가능성, 창의성, 효율성 및 효과성, 적용 범위, 계속성, 직접적인 경비 절감의 추정금액 등의 심사 기준에 의거, 채택 심사 및 포상을 실시합니다. 제출하신 제안은 접수일로부터 1월 이내에 정해진 심사 기준에 의하여 채택 여부 결정하고 그 결과를 제안신청인에게 통보하여 드립니다.",
    },
    {
      title: "제안제도",
      con: "제안은 원래 민간에서 소속 직원으로부터 생산방법, 업무 효율성에 관한 개선방안을 받아 조직·경영 혁신의 수단으로 활용하던 것에서부터 비롯되었습니다. 반면 국민제안은 내부직원이 아닌 일반국민이 제출 주체가 된다는 점, 기업경영이 아닌 정부업무(중앙·지자체·교육청)에 관한 개선방안을 받는다는 점에서 민간기업의 제안제도와는 그 성격이 다소 다르다 할 수 있습니다. 기업제안이 보통 엄격한 심사기준과 혁신적인 아이디어를 요구하는 경향이 많다면, 국민제안은 기업제안에 비해 그 문턱이 낮고 소통의 성격, 즉 정부가 정책의 수요자인 국민으로부터 개선방안을 수렴하여 행정서비스의 수준을 향상시키겠다는 목적을 가지고 있습니다. 아울러 참여민주주의의 확산에 따라 다수 국민이 정책에 직접 참여하는 길을 열고, 정부와 국민이 머리를 맞대고 함께 대안을 만들어가는 민관 협력의 제도이기도 합니다.",
    },
    {
      title: "이용방법",
      con: "국민신문고에 정부시책 또는 행정제도·운영의 개선을 목적으로 행정기관의 장에게 창의적인 의견 또는 고안을 제출하실 수 있습니다. 제출하신 국민제안은 실시 가능성, 창의성, 효율성 및 효과성, 적용 범위, 계속성, 직접적인 경비 절감의 추정금액 등의 심사 기준에 의거, 채택 심사 및 포상을 실시합니다. 제출하신 제안은 접수일로부터 1월 이내에 정해진 심사 기준에 의하여 채택 여부 결정하고 그 결과를 제안신청인에게 통보하여 드립니다.",
    },
  ];

  const procedure = [
    {
      num: "01",
      title: "신청서 작성",
      con: "성명, 주소, 연락처, 통지방식, 제안제목과 내용 등 제안신청서 작성",
      img: img1,
    },
    {
      num: "02",
      title: "처리기관 선택 및 제출",
      con: "처리기관을 선택하여 제안 제출",
      img: img2,
    },
    {
      num: "03",
      title: "접수",
      con: "신청완료, 접수여부 알림 (이메일, 휴대전화 문자메세지 등)",
      img: img3,
    },
  ];

  const procedure2 = [
    {
      num: "04",
      title: "채택심사 및 실시",
      con: "소관기관에서 관련법령에 따라 채택여부 심사, 신청인이 선택한 통지방식(전자우편, 문자메시지, 서면)으로 심사결과 통보",
      img: img4,
    },
    {
      num: "05",
      title: "자체우수제안 선정",
      con: "채택제안 중 자체우수제안을 선정하고 이 중 중앙우수제안을 행정자치부장관에게 추천, 기관별 상황 등에 따라 제안인 포상 및 부상금 지급",
      img: img5,
    },
    {
      num: "06",
      title: "중앙우수제안 심사 및 포상",
      con: "중앙우수제안심사위원회, 전문가 의견 청취 등을 통해 중앙우수제안을 선정하고 행정안전부 장관이 정하는 기준에 의하여 서훈·표창·부상금 지급",
      img: img6,
    },
  ];

  const notice = [
    {
      con: "일반적으로 공지되었거나 이미 이용되고 있는 것",
    },
    {
      con: "타인이 취득한 특허권·실용신안권·디자인권·저작권에 속하는 것이거나 「공무원 직무발명의 처분·관리 및 보상 등에 관한 규정」에 의하여 보상이 확정된 것",
    },
    {
      con: "이미 채택된 제안이거나 그 기본구상이 이와 유사한 것",
    },
    {
      con: "일반 통념상 그 적용이 불가능하다고 판단되는 것",
    },
    {
      con: "단순한 주의 환기·진정·비판·건의 또는 불만의 표시인 것",
    },
    {
      con: "국가나 지방자치단체의 사무에 관한 사항이 아닌 것",
    },
  ];

  return (
    <div className="container">
      <ul className="con1box">
        {LetterCon2.map((item, index) => (
          <li key={`LetterCon2-${index}`}>
            <h5>{item.title}</h5>
            <p>{item.con}</p>
          </li>
        ))}
      </ul>
      <div className="con2">
        <h5>처리절차</h5>
        <ul className="con2box">
          {procedure.map((item, index) => (
            <li key={`procedure-${index}`}>
              <div className="con2top">
                <div className="con2sub">
                  <p className="num">{item.num}</p>
                  <p>{item.title}</p>
                </div>
                <img src={item.img} alt={item.title} />
              </div>
              <p>{item.con}</p>
            </li>
          ))}
        </ul>
        <ul className="con2boxbtm">
          {procedure2.map((item, index) => (
            <li key={`procedure2-${index}`}>
              <div className="con2btm">
                <div className="con2sub">
                  <p className="num">{item.num}</p>
                  <p>{item.title}</p>
                </div>
                <img src={item.img} alt={item.title} />
              </div>
              <p>{item.con}</p>
            </li>
          ))}
        </ul>
        <div className="con2notibox">
          <p>
            <FaCircleExclamation
              style={{
                verticalAlign: "middle",
                marginRight: "5px",
                height: "1.8rem",
                width: "1.8rem",
                color: "#57B7F2",
              }}
            />
            알아두세요 ! <span>단, 아래의 사항은 제안으로 보지 않습니다.</span>
          </p>
          <ul className="con2noti">
            {notice.map((item, index) => (
              <li key={`notice-${index}`}>{item.con}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="proposal">
        <dl>
          <dt>
            <h5>공개제안</h5>
          </dt>
          <dd>공개 제안 시스템이 국민신문고로 통합 운영됩니다.</dd>
          <dd>
            국민신문고를 통하여 이름과 주민등록번호의 실명확인으로 서비스를 이용하실 수 있습니다.
          </dd>
          <dd>
            보안경고창이 뜰 경우, 브라우저 메뉴에서 도구 - 인터넷옵션 - 보안 - 보안레벨
            '약간높음'으로 변경하시면 됩니다.
          </dd>
        </dl>
        <a href="https://www.epeople.go.kr/nep/prpsl/opnPrpl/opnpblPrpslList.npaid" target="_blank">
          국민신문고 <span>바로가기 ↗</span>
        </a>
      </div>
    </div>
  );
}

export default Letter2;
