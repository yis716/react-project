import React, { useRef, useState } from "react";
import "../subcss/Letter.css";
import { TfiDownload, } from "react-icons/tfi";
import emailjs from "@emailjs/browser";
import { IoMdSend } from "react-icons/io";
import form01_1 from "../downloads/form01_1.hwp";
import form01_2 from "../downloads/form01_2.hwp";

function Letter1() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    from_name: "",
    email: "",
    title: "",
    message: "",
    agree: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_sirqbe2", "template_cyrdajk", form.current, "Z3rsYZzAjoK00Izk5").then(
      (result) => {
        console.log(result.text);
        alert("메일이 성공적으로 전송되었습니다.");
        setFormValues({
          from_name: "",
          email: "",
          title: "",
          message: "",
          agree: "",
        });
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        alert("메일 전송에 실패했습니다.");
      }
    );
  };

  const LetterCon1 = [
    {
      title: "기상현상증명",
      cont: "기온, 강수량, 바람 등의 기상현상에 대해 기간별 자료 및 통계자료를 타 기관에 제출할 수 있는 증빙자료로 활용할 수 있도록 서비스하고 있습니다. 기상청이 보유하고 있는 관측 및 통계자료에 의한 과거의 기상사실을 민원인의 신청에 의해 인쇄 및 복사, 수작업 및 응용처리 자료 등으로 증명합니다.",
      class: "LetterT",
    },
    {
      title: "기상현상증명 제공 사항",
      cont: "전국 기상관서에서 기압, 기온, 강수량, 풍향, 풍속 등을 측정 장비를 이용하여 측정한 결과 값에 대한 자료를 제공하고 있으며 그 종류는 다음과 같습니다. 기온, 강수량, 습도, 운량, 적설, 풍향, 풍속, 시정, 기압, 일조시간, 일사량 등이 있으며, 이에 대한 시간 ∙ 일 ∙ 월에 대한 관측값과 평균값, 30년간의 평년값 등을 제공하고 있습니다.",
      class: "LetterS",
    },
    {
      title: "용도",
      cont: "기상현상증명서는 법원, 경찰서, 보험회사, 관공서에 법적 근거서류 및 공사연기원 등 증거자료 제출용으로 사용하실 수 있습니다.",
      class: "LetterS",
      hasLink: true,
      linkText: "신청서 다운로드",
      linkUrl: form01_1,
    },
    {
      title: "기상정보제공",
      cont: "기온, 강수량, 바람 등의 기상현상에 대해 기간별 자료 및 통계자료를 학술 및 연구자료로 활용할 수 있도록 서비스하고 있습니다. 기상청이 보유하고 있는 관측 및 통계자료를 민원인의 신청에 의하여 인쇄 및 복사, 전산처리자료, 수작업 및 응용처리자료 등으로 제공합니다.",
      class: "LetterT",
    },
    {
      title: "용도",
      cont: "기상정보제공은 학술, 연구, 보고서 및 일지 작성 등 단순 기록 및 분석용으로 사용하실 수 있습니다.",
      class: "LetterS",
      hasLink: true,
      linkText: "신청서 다운로드",
      linkUrl: form01_2,
    },
  ];

  const LetterConList1 = LetterCon1.map((item, index) => {
    const isUsageItem = item.title === "용도";

    return (
      <div className="LetterBox" key={`letter-item-${index}`}>
        <div className="LetterR">
          <ul>
            <li className={item.class}>
              <dl>
                <dt>{item.title}</dt>
                <dd>
                  {item.cont}
                  {isUsageItem && item.hasLink && (
                    <a href={item.linkUrl} className="more-info-link" download>
                      {item.linkText} <TfiDownload className="download-icon" />
                    </a>
                  )}
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    );
  });

  const renderLabel = (text, name) => (
    <label>
      {text}
      {!formValues[name] && <span className="required-mark">*</span>}
    </label>
  );

  return (
    <div className="container">
      <div className="LetterBox">
        <h5>제공하는 민원서비스</h5>
        <div className="LetterR">{LetterConList1}</div>
      </div>

      <div className="mail">
        <div className="mailtitle">
          <h5>민원상담</h5>
          <p>국민의 민의가 모인 고충민원에 대한 사항을 상담해드립니다.</p>
        </div>
        <div className="Econtainer">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="Econ1">
              <div className="form-group ename">
                {renderLabel("이름", "from_name")}
                <input
                  type="text"
                  name="from_name"
                  value={formValues.from_name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group eemail">
                {renderLabel("이메일", "email")}
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group etitle">
              {renderLabel("제목", "title")}
              <input
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group emessage">
              {renderLabel("문의 내용", "message")}
              <textarea
                name="message"
                rows="5"
                value={formValues.message}
                onChange={handleInputChange}
                required></textarea>
            </div>
            <div className="EconBtm">
              <div className="form-agree">
                <input
                  type="checkbox"
                  className="submit-age"
                  value={formValues.agree}
                  onChange={handleInputChange}
                  style={{ width: "20px", height: "20px" }}
                  required
                />
                {renderLabel("개인정보 취급 방침 동의", "agree")}
              </div>
              <div className="form-submit">
                <button type="submit" className="submit-btn">
                  전송 <IoMdSend style={{ margin: "0 0 5px 5px", verticalAlign: "middle" }} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Letter1;
