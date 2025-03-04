import React, { useState } from 'react';
import styles from '../subcss/Service4.module.css';

/** 아코디언 아이템 재사용 컴포넌트 */
function AccordionItem({ title, isOpen, onClick, children }) {
    return (
      <div className={styles.accordionItem}>
        {/* 아코디언 헤더(버튼) */}
        <button className={styles.accordionButton} onClick={onClick}>
          <span>{title}</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </button>
  
        {/* 아코디언 내용(열려 있을 때만 표시) */}
        {isOpen && (
          <div className={styles.accordionContent}>
            <ul>{children}</ul>
          </div>
        )}
      </div>
    );
  }

function Accordion({items}) {
    // 첫번째 열려있도록 초기값 설정
    const[openIndex, setOpenIndex] = useState(0);

    const handleClick = (index) => {
        //이미 열려 있는 템을 클릭하면(-1),
        //다른 아이템을 클릭하면 그 아이템만 열림
        setOpenIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <>
            {items.map((item, i) => (
                <AccordionItem 
                    key={i}
                    title={item.title}
                    isOpen={openIndex === i}
                    onClick={() => handleClick(i)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </>
    );
}


function Service4() {
    // --------------------------------------
    // 탭 1) "사전준비" 아코디언 데이터
    // --------------------------------------
    const prepareItems = [
      {
        title: '재난정보를 수신할 수 있도록 준비하고, 거주지역의 재해위험 요인을 미리 확인합니다.',
        content: (
          <>
            <li>재난정보는 TV, 라디오, 인터넷, 스마트폰 안전디딤돌 앱에서 수신합니다.</li>
            <li>과거 피해 이력 등을 확인하여 대피 경로, 대피소 등을 미리 파악합니다.</li>
          </>
        ),
      },
      {
        title: '가족이나 이웃과 함께 대피계획을 세웁니다.',
        content: (
          <>
            <li>지역의 대피 장소(행정복지센터, 학교 등)와 안전한 이동 방법, 대피요령을 미리 숙지합니다.</li>
            <li>가족이 각각 이동할 때를 대비하여 다시 만날 장소를 미리 정합니다.</li>
          </>
        ),
      },
      {
        title: '주변의 시설물을 점검합니다.',
        content: (
          <>
            <li>배수로, 빗물받이를 수시로 청소하고 비가 새거나 막힌 곳이 있는지 확인합니다.</li>
            <li>비탈면, 옹벽, 축대 등에 균열이 있는지 점검하고, 위험 시 시·군·구청에 신고합니다.</li>
          </>
        ),
      },
      {
        title: '재난 발생에 대비하여 비상용품을 미리 준비합니다.',
        content: (
          <>
            <li>전기·가스·수도 중단을 대비하여 식량·식수·생필품 등을 미리 비축해둡니다.</li>
            <li>응급약품, 손전등, 비상식량, 라디오, 담요 등을 한 곳에 준비해둡니다.</li>
          </>
        ),
      },
    ];
  
    // --------------------------------------
    // 탭 2) "폭우 예보 시" 아코디언 데이터
    // --------------------------------------
    const forecastItems = [
      {
        title: '외출을 자제하고 수시로 기상상황, 재난정보를 파악합니다.',
        content: (
          <>
            <li>거주지역 주변 위험상황(침수, 산사태 등)을 수시로 확인합니다.</li>
          </>
        ),
      },
      {
        title: '산간·계곡, 하천, 방파제 등 위험지역에서는 주변 사람들과 함께 안전한 곳으로 이동합니다.',
        content: (
          <>
            <li>등산, 야영, 물놀이, 낚시 등을 즉시 중단하고 안전한 곳으로 이동합니다.</li>
            <li>저지대, 상습침수지역, 산사태 위험지역 등에서도 미리 대피합니다.</li>
          </>
        ),
      },
      {
        title: '차량이나 시설물 보호 조치를 합니다.',
        content: (
          <>
            <li>하수구나 집 주변 배수구를 미리 점검하고 막힌 곳은 뚫어 둡니다.</li>
            <li>침수 예상 지하주차장, 건물 등에는 물막이 판 등을 설치합니다.</li>
          </>
        ),
      },
      {
        title: '가족과 함께 비상용품을 준비하여 재난에 대비합니다.',
        content: (
          <>
            <li>비상시 신속히 가져갈 수 있도록 배낭 등에 모아둡니다.</li>
            <li>상수도 공급 중단에 대비해 욕조 등에 물을 받아 둡니다.</li>
          </>
        ),
      },
    ];
  
    // --------------------------------------
    // 탭 3) "호우 특보 중" 아코디언 데이터
    // --------------------------------------
    const warningItems = [
      {
        title: '외출을 자제하고 기상상황 및 주변 위험상황을 파악합니다.',
        content: (
          <>
            <li>가족, 지인과 연락하여 안전을 확인하고 위험정보를 공유합니다.</li>
            <li>침수 위험지역(개울가, 하천변 등)에 접근하지 않습니다.</li>
          </>
        ),
      },
      {
        title: '위험지역에 절대 접근하지 않습니다.',
        content: (
          <>
            <li>침수된 도로, 지하차도, 교량 등은 통행을 금지하고 주변에도 알립니다.</li>
            <li>산간·계곡, 하천, 해안가 등 급류에 휩쓸릴 수 있는 지역에서 벗어납니다.</li>
          </>
        ),
      },
      {
        title: '건물, 집안에서는 안전수칙을 지킵니다.',
        content: (
          <>
            <li>가스 누출을 예방하기 위해 사전에 차단하고, 감전 위험이 있는 전기시설은 만지지 않습니다.</li>
            <li>정전 시 양초 대신 손전등, 휴대폰 불빛 등을 사용합니다.</li>
          </>
        ),
      },
      {
        title: '대피가 필요할 시 주변 약자와 함께 이동합니다.',
        content: (
          <>
            <li>어르신, 어린이, 장애인 등과 함께 신속히 대피합니다.</li>
          </>
        ),
      },
    ];
  
    // --------------------------------------
    // 탭 4) "호우 이후" 아코디언 데이터
    // --------------------------------------
    const afterItems = [
      {
        title: '가족과 지인의 안전 여부를 확인하고, 피해지역에는 접근하지 않습니다.',
        content: (
          <>
            <li>연락이 되지 않는 경우 경찰서에 신고합니다.</li>
            <li>침수된 도로나 교량은 파손되었을 수 있으므로 건너지 않습니다.</li>
          </>
        ),
      },
      {
        title: '집으로 복귀 후 피해 여부를 확인하고 신고합니다.',
        content: (
          <>
            <li>주택 등의 안전 여부를 확인 후 출입합니다.</li>
            <li>파손된 시설물은 시·군·구청이나 주민센터에 신고합니다.</li>
          </>
        ),
      },
      {
        title: '호우로 인한 2차 피해를 방지합니다.',
        content: (
          <>
            <li>물이 빠지는 중에는 오염된 경우가 많으므로 물에서 멀리 떨어집니다.</li>
            <li>수돗물이나 저장되었던 식수는 오염 여부를 확인한 후 사용합니다.</li>
          </>
        ),
      },
    ];
  
    // 각 탭 구성
    const subTabs = [
      {
        name: '사전준비',
        content: (
          <div>
            <div className={styles.prepHeader}>
              <h5>핵심 행동요령</h5>
              <p>호우는 하천 범람, 산사태, 침수 등을 통해 인명피해와 재산피해를 발생시킬 수 있기 때문에 가족이나 이웃과 함께 대비합니다.</p>
            </div>
            <div className={styles.infoBox}>
              <Accordion items={prepareItems} />
            </div>
          </div>
        ),
      },
      {
        name: '폭우 예보',
        content: (
          <div>
            <div className={styles.prepHeader}>
              <h5>호우특보 시 <br/>
              행동요령</h5>
              <p>TV, 라디오, 인터넷 등에서 호우특보가 예보된 때에는 거주 지역에 영향을 주는 시기를 미리 파악하고, 호우 발생 전에 필요한 조치를 합니다.</p>
            </div>
            <div className={styles.infoBox}>
              <Accordion items={forecastItems} />
            </div>
          </div>
        ),
      },
      {
        name: '호우 특보',
        content: (
          <div className={styles.infoBox}>
            <Accordion items={warningItems} />
          </div>
        ),
      },
      {
        name: '호우 이후',
        content: (
          <div className={styles.infoBox}>
            <Accordion items={afterItems} />
          </div>
        ),
      },
    ];
  
    // 현재 선택된 탭 인덱스
    const [selectedSubIndex, setSelectedSubIndex] = useState(0);
  
    const handleSubTabClick = (index, e) => {
      e.preventDefault();
      setSelectedSubIndex(index);
    };
  
    return (
      <div className={styles.Service4Container}>
        <ul className={styles.subTabMenu}>
          {subTabs.map((subItem, index) => (
            <li key={index}>
              <button
                className={selectedSubIndex === index ? styles.active : null}
                onClick={(e) => handleSubTabClick(index, e)}
              >
                {subItem.name}
              </button>
            </li>
          ))}
        </ul>
  
        <div className={styles.tabContent}>
          {/* 선택된 탭의 content 렌더링 */}
          <p>{subTabs[selectedSubIndex].content}</p>
        </div>
      </div>
    );
  }

export default Service4;
