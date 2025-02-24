import React from "react";
import "../subcss/Letter.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, { accordionSummaryClasses } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: "rotate(90deg)",
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));


function Letter3() {

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const civilServiceInfoList = [
    {
      title: "민원이용안내",
      contents: [
        "국민신문고 시스템 이용 문의 : 1600-8172, 070-4140-1458, 평일 09:00~18:00",
        "정부민원안내 콜센터 : 국번없이 110번, 365일 24시간 상담가능, 수어상담 평일 09:00~18:00",
        "기상청 대표전화 : (02)2181-0900, (042)481-7500",
        "일기예보 문의 : 국번없이 131번(기상콜센터, 유료)",
        "기상자료, 기상자료 문의/신청 : (042)481-7503/기상청 전자민원 (http://minwon.kma.go.kr)",
      ],
    },
    {
      title: "민원신청",
      contents: [
        "국민의 민의가 모인 고충민원에 대한 사항을 신청하실 수 있습니다.",
        "질의 및 상담은「질의응답」을 통해 하실 수 있습니다.",
        "국민신문고를 통하여 이름과 주민등록번호의 실명확인으로 서비스를 이용하실 수 있습니다.",
        "보안경고창이 뜰 경우, 브라우저 메뉴에서 도구>인터넷옵션>보안>'약간높음'(보안레벨)으로 변경하시면 됩니다.",
      ],
    },
    {
      title: "민원 처리에 관한 법률",
      contents: [
        "특허법 : 특허심판에 관한 사항",
        "행정심판법 : 행정심판에 관한 사항",
        "국세심판법 : 국세심판에 관한 사항",
        "감사원법 : 감사원의 심사청구나 재심의 청구",
        "환경분쟁조정법 : 환경 분쟁의 알선·조정 등에 관한 사항",
        "노동위원회법: 노동관계에 있어서 판정 및 조정업무에 관한 사항",
        "국가인권위원회법 : 국가인권위원회의 인권 침해나 차별 등에 대한 진정에 관한 사항",
        "부패방지 및 국민권익위원회의 설치와 운영에 관한 법률 : 국민권익위원회의 타기관 민원처리에 관한 조사·심의 등",
      ],
    },
  ];

  const civilServiceTypes = [
    { type: "법령에 관하여 설명이나 해석을 요구하는 질의민원", period: "14일 이내" },
    { type: "제도·절차 등 법령 외에 사항에 관하여 설명이나 해석을 요구하는 질의민원", period: "7일 이내" },
    { type: "행정제도 및 운영의 개선을 요구하는 민원", period: "14일 이내" },
    { type: "행정기관 등의 위법·부당하거나 소극적인 처분 및 불합리한 행정 제도로 인하여 국민의 권리를 침해하거나 불편, 부담을 주는 사항에 관한 민원", period: "7일 이내" },
  ];

  return (
    <div className="container3">
      <ul className="con31box">
        {civilServiceInfoList.map((section, sectionIndex) => (
          <li key={`section-${sectionIndex}`}>
            <h5>{section.title}</h5>
            <ul className="con31in">
              {section.contents.map(
                (content, contentIndex) =>
                  content && <li key={`content-${sectionIndex}-${contentIndex}`}>{content}</li>
              )}
            </ul>
          </li>
        ))}
      </ul>

      <div className="tablewrap">
        <h5>민원 처리기간</h5>
        <p>
          일반적으로 접수일로부터 7일에서 14일 이내에 처리되나 토요일·공휴일은 제외되며, 민원의
          성격이나 해당 민원을 처리하는 기관의 규정에 따라 일부 달라질 수 있습니다. 아울러 부득이한
          사유로 처리기간 내에 민원을 처리하기 곤란하다고 인정되는 경우에는 해당 처리기간의 범위에서
          처리기간을 연장할 수 있습니다.
        </p>
        <table className="Ltable">
          <thead>
            <tr>
              <th className="cases">민원유형</th>
              <th>처리기간</th>
            </tr>
          </thead>
          <tbody>
            {civilServiceTypes.map((item, index) => (
              <tr key={`service-type-${index}`}>
                <td>{item.type}</td>
                <td className="period">{item.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="qna">
        <h5>자주하는 질문</h5>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          slotProps={{ heading: { component: "p" } }}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography component="span">현상일수는 어떻게 산출하나요?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              현상일수는 눈, 진눈깨비, 싸락눈, 우박, 안개, 서리, 결빙, 연무, 황사, 뇌전이 관측된
              일수를 월별로 산출합니다.
              <br />
              <br />※ 눈일수는 눈, 소낙눈, 가루눈이 나타난 일수를 포함한다.
              <br />※ 우박일수는 어는 비, 싸락우박, 우박이 나타난 일수를 포함한다.
              <br />※ 안개일수는 시정 1km 미만의 안개와 낮은 안개가 나타난 일수를 포함한다.
              <br />※ 뇌전일수는 뇌전, 천둥이 나타난 일수를 포함한다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          slotProps={{ heading: { component: "p" } }}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography component="span">기상현상기호 종류는 무엇이 있나요?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              기상현상기호는 국제기상전보식에 의해 기상현상을 기호로 표시하는 것입니다.
              <br /> 현상별 기호표를 첨부하였으니 첨부파일을 참고하시기 바랍니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          slotProps={{ heading: { component: "p" } }}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography component="span">민원발급자료에 신청인 정보가 없어요</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              2019년 3월 4일부터 개인정보 보호 수준 개선을 위해 민원발급자료의 신청인 정보는
              삭제되어 공란으로 제공됩니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          slotProps={{ heading: { component: "p" } }}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography component="span">어떤 자료를 신청할 수 있나요?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              기상청 전자민원 사이트에서 발급받으실 수 있는 민원자료는
              <br />
              ①기상현상증명, ②기상자료제공, ③지진관측증명 이 있습니다.
              <br />
              기상현상증명과, 기상자료제공으로 발급받을 수 있는 자료목록을 첨부하였으니 참고하시기
              바랍니다.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          slotProps={{ heading: { component: "p" } }}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography component="span">
              기상현상증명에 원하는 지점 자료가 없을 때는 어떻게 하나요?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              원하는 지점에 관측자료가 없어 기상현상증명서를 발급받을 수 없는 경우, 기상감정을
              활용할 수 있습니다.
              <br />
              <br /> ▶ 기상감정: 특정지점의 기상현상 추정 및 기상현상이 특정사건에 미친 정도,
              피해규모 추정
              <br /> (예) 바람에 의해 날아간 물체가 시설물 피해를 입힌 경우, 강풍의 영향정도를 감정
              자연구조물(나무 등)에 의해 농작물 생육 피해를 입은 경우, 일조량의 영향정도를 감정
              관측자료가 없는 지역의 강풍, 낙뢰 등 기상현상의 추정이 필요한 경우 등 ※ 기상감정사:
              기상현상을 과학적인 방법으로 추정하여 기상감정을 제공하는 사람 (「기상산업진흥법」
              제18조에 따라 기상청장으로부터 면허를 받은 사람) <br />※ 기상감정업: 기상감정사를
              인력으로 두고 「기상산업진흥법」 제6조에 따라 등록된 기상사업자로 특정수요자를
              대상으로 기상감정을 제공하는 사업
              <br />
              <br /> ▶ 기상감정 관련 안내
              <br /> (사)한국기상산업협회: www.kmia.biz (사)한국기상감정업협회: 02-821-3653
              기상감정사업자: 기상청 행정홈페이지- 주요업무- 기상산업진흥- 기상사업자제도 및
              기상사업자 현황- 하단 기상사업자 현황
              <br />
              <br /> ▶ 활용사례: 손해보상 관련 증빙, 법원 제출(기상감정사에 감정 관련 증언 요청) 등
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Letter3;
