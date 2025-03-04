import React, { useState } from 'react';
import styles from '../subcss/Service1.module.css';

function Service1() {
    const subTabs = [
        { name: "사전준비", 
            content: (
                <div>
                    <div className={styles.prepHeader}>
                        <h5>평상시 <br/>
                             행동요령</h5>
                        <p>한파는 저체온증, 동상, 동창 등의 한랭질환을 유발할 수 있으며, 심하면 사망에 이르게 됩니다. 뿐만 아니라 농·축·수산 분야의 재산피해와 전력 급증으로 생활불편을 초래하기도 합니다. 겨울철에는 다음 사항을 숙지하여 가족이나 이웃과 함께 피해를 사전에 예방할 수 있도록 미리 준비합니다.</p>
                    </div>
                    <div className={styles.infoBox}>
                        <div>한파 주의보</div>
                        <ul>
                            <li>아침 최저기온이 전날보다 10℃ 이상 하강하여 3℃ 이하이면서 <br/>
                                평년값보다 3℃ 이상 낮을 것으로 예상될 때</li>
                            <li>아침 최저기온 -12℃ 이하가 2일 이상 지속될 것으로 예상될 때</li>
                            <li>급격한 저온현상으로 중대한 피해가 예상될 때</li>
                        </ul>
                    
                    </div>
                    <div className={styles.infoBox}>
                        <div>한파 경보</div>
                        <ul>
                            <li>학교 및 교육기관에서는 교직원과 함께 한파 대비 교육을 실시합니다.</li>
                            <li>건물의 단열 상태를 점검하고 보온을 위한 단속을 강화합니다.</li>
                            <li>학생들의 실외활동을 최소화하고 따뜻한 옷을 착용하도록 지도합니다.</li>
                        </ul>
                    </div>
                </div>
            ) },
        { name: "발생 중", 
            content: (
                <div>
                    <ul className={styles.sww}>
                        <span>⊙ 일반 가정에서는 가족들과 함께</span>
                        <li>야외활동은 되도록 자제하고, 부득이 외출을 하는 경우에는 내복, 목도리, 모자, 장갑 등으로 노출 부분의 보온에 유의해야 합니다.</li>
                        <li>외출 후에는 손발을 씻고 과도한 음주나 무리한 일은 피하도록 합니다. 또한, 당뇨환자, 만성폐질환자 등은 미리 독감 예방접종을 하여야 합니다.</li>
                        <li>심한 한기, 기억상실, 방향감각 상실, 불분명한 발음, 심한 피로 등을 느낄 때는 저체온 증세를 의심하고 바로 병원으로 가야 합니다.</li>
                        <li>동상에 걸렸을 때는 비비거나 갑자기 불에 쬐어서는 안 되며, 따뜻한 물로 세척 후에 보온을 유지한 채로 즉시 병원으로 가야 합니다.</li>
                        <li>외출 시에는 되도록 대중교통을 이용하고, 가족에게 행선지와 시간 계획을 알려둡니다.</li>
                        <li>거동이 불편한 노인, 신체허약자, 환자 등을 남겨두고 장시간 외출할 경우에는 친인척, 이웃 등에 보호를 부탁합니다.</li>
                    </ul>
                    <ul className={styles.sww}>
                        <span>⊙ 자동차 운전 중에는 가족이나 동승자가 함께</span>
                        <li>도로 결빙에 대비하여 스노체인, 염화칼슘, 삽 등 월동용품을 미리 구비하고, 부동액, 축전지, 윤활유 등 자동차 상태를 사전에 점검합니다.</li>
                        <li>운전 전에는 앞 유리의 성에를 완전히 제거하고, 운전 중에는 평소보다 저속 운전하고 차간 거리를 충분히 확보하여 사고를 예방합니다.</li>
                        <li>미끄러운 길이나 빙판길, 커브길 등에서는 되도록 가속과 멈춤을 하지 말고, 속도를 미리 줄이도록 합니다.</li>
                        <li>차량 이동 중 고립되었을 때에는 가능한 수단을 통해 구조 연락을 취하고, 동승자와 함께 체온을 유지하고 돌아가며 휴식을 취하도록 합니다.</li>
                        <li>반드시 깨어있어야 하며 야간에는 실내등을 켜거나 색깔 있는 옷을 눈 위에 펼쳐 놓아 구조요원이 쉽게 찾을 수 있도록 합니다.</li>
                    </ul>
                    <ul className={styles.sww}>
                        <span>⊙ 농·어촌에서는 가족이나 지역 주민과 함께</span>
                        <li>비닐하우스 등 동해 피해 방지를 위해 난방, 온실커튼, 축열 주머니 등 미리 동해 방지 조치를 취합니다.</li>
                        <li>축사 등은 쌓인눈에 의한 붕괴 등에 대비하여 보수·보강하고, 샛바람 방지를 위한 보온덮개와 난방기 등을 준비합니다.</li>
                        <li>양식장은 사육지 면적의 1% 이상을 별도 확보하여 월동장을 설치하고, 방풍망 등으로 보온조치 합니다.</li>
                        <li>장기 한파 피해가 예상될 때에는 양식어류는 조기 출하하여 피해를 예방합니다.</li>
                    </ul>
                </div>
                
            )
        },
        { name: "특보", 
            content: (
                <table className={styles.infoTable}>
                    <thead>
                        <tr>
                            <th>종류</th>
                            <th>주의보</th>
                            <th>경보</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>한파</td>
                            <td>
                                아침 최저기온이 전날보다 10℃ 이상 하강하여 3℃ 이하이면서 평년값보다 3℃ 이상 낮을 것으로 예상될 때<br/>
                                아침 최저기온 -12℃ 이하가 2일 이상 지속될 것으로 예상될 때<br/>
                                급격한 저온현상으로 중대한 피해가 예상될 때
                            </td>
                            <td>
                                아침 최저기온이 전날보다 15℃ 이상 하강하여 3℃ 이하이면서 평년값보다 3℃ 이상 낮을 것으로 예상될 때<br/>
                                아침 최저기온 -15℃ 이하가 2일 이상 지속될 것으로 예상될 때<br/>
                                급격한 저온현상으로 광범위한 지역에서 중대한 피해가 예상될 때
                            </td>
                        </tr>
                    </tbody>
                </table>
        ) },
        { name: "상식", 
            content: (
                <table className={styles.infoTable}>
                    <thead>
                        <tr>
                            <th>종류</th>
                            <th>증상</th>
                            <th>대처요령</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>저체온증</td>
                            <td>
                                - 말이 어눌해지거나 기억 장애 발생<br/>
                                - 점점 의식이 흐려짐<br/>
                                - 지속적인 피로감을 느낌<br/>
                                - 팔, 다리의 심한 떨림 증상
                            </td>
                            <td>
                                1. 신속히 실내로 이동 후 119 신고<br/>
                                2. 젖은 옷을 벗기고 따뜻한 담요나 침낭으로 몸을 감쌉니다.<br/>
                                3. 겨드랑이, 배 위에 핫팩이나 더운 물통 등을 둡니다.<br/>
                                4. 의식이 있는 경우에는 따뜻한 음료가 도움이 될 수 있으나
                                의식이 없는 경우는 주의합니다.
                            </td>
                        </tr>
                        <tr>
                            <td>동상</td>
                            <td>
                                1도: 찌리는 듯한 통증, 붉어지고 가려움, 부종<br/>
                                2도: 피부가 검붉어지고 물집이 생김<br/>
                                3도: 피부와 피하조직 괴사, 감각 소실<br/>
                                4도: 근육 및 뼈까지 괴사
                            </td>
                            <td>
                                ※병원을 방문하여 진료를 받는 것이 우선<br/>
                                1. 38~42도씨의 따뜻한 물로 해당 부위를 데웁니다.<br/>
                                2. 손, 발: 손가락, 발가락 사이에 소독된 거즈를 끼웁니다.<br/>
                                3. 동상부위를 약간 높에 유지합니다.<br/>
                                4. 다리, 발 동상환자는 들 것으로 운반합니다.
                            </td>
                        </tr>
                        <tr>
                            <td>손상</td>
                            <td>
                                - 낙상에 의한 손상<br/>
                                * 미끄러짐, 넘어짐, 떨어짐 등에 의한 탈구, 골절, 타박상 등
                            </td>
                            <td>
                                1. 홀로 거동이 어려울 경우 빠르게 119로 신고합니다.<br/>
                                2. 환자가 편안해 하는 자세에서 움직이지 않게 고정하고 도움을 청합니다. <br/>
                                * 필요시 부목 등을 이용하여 고정 할 수 있음.
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
         }
    ];

    const [selectedSubIndex, setSelectedSubIndex] = useState(0);

    const handleSubTabClick = (index, e) => {
        e.preventDefault();
        setSelectedSubIndex(index);
    };

    return (
        <div className={styles.service1Container}>
            {/* <h4>한파 행동요령</h4> */}
            <ul className={styles.subTabMenu}>
                {subTabs.map((subItem, index) => (
                    <li key={index}>
                        <button href="#" 
                           className={selectedSubIndex === index ? styles.active : null} 
                           onClick={(e) => handleSubTabClick(index, e)}>
                            {subItem.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.tabContent}>
                <p>{subTabs[selectedSubIndex].content}</p>
            </div>
        </div>
    );
}

export default Service1;
