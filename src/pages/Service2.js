import React, { useState } from 'react';
import styles from '../subcss/Service2.module.css';

function Service2() {
    const subTabs = [
        { name: "사전준비", 
            content: (
                <div>
                    <div className={styles.prepHeader}>
                        <h5>평상시 <br/>
                            행동요령</h5>
                        <p>폭염은 열사병, 열경련 등의 온열질환을 유발할 수 있으며, 심하면 사망에 이르게 됩니다. 뿐만 아니라, 가축·수산물 폐사 등의 재산피해와 여름철 전력 급증 등으로 생활의 불편을 초래하기도 합니다. 더위가 잦은 여름철에는 다음 사항을 숙지하여 피해를 사전에 예방할 수 있도록 미리 준비합니다.</p>
                    </div>
                    <div className={styles.infoBox}>
                    <div className={styles.infoItem}>
                    <div className={styles.infoNumber}>01</div>
                    <div className={styles.infoTitle}>기상 정보 확인</div>
                        <div className={styles.infoDescription}>
                            여름철에는 TV, 라디오, 인터넷 등을 통해 무더위 관련 기상 상황을 수시로 확인하고, 주변 사람들과 정보를 공유합니다.
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.infoNumber}>02</div>
                        <div className={styles.infoTitle}>온열질환 대비</div>
                        <div className={styles.infoDescription}>
                        열사병 등 온열질환의 증상과 가까운 병원 연락처를 가족이나 이웃과 함께 사전에 파악하고, 대처 방법을 숙지합니다.
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.infoNumber}>03</div>
                        <div className={styles.infoTitle}>필수 용품 준비</div>
                        <div className={styles.infoDescription}>
                            에어컨, 선풍기 등의 냉방 기기를 사전에 점검합니다. <br/>
                            창문에 커튼이나 필름 등을 설치하여 직사광선을 차단합니다.<br/>
                            외출 시를 대비하여 넓은 모자, 햇빛 가리개, 선크림 등을 준비합니다.<br/>
                            정전에 대비하여 손전등, 비상 식음료, 부채, 휴대용 라디오 등을 미리 확인합니다.
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div className={styles.infoNumber}>04</div>
                        <div className={styles.infoTitle}>안전 수칙 숙지</div>
                        <div className={styles.infoDescription}>
                            냉방기기 사용 시 실내·외 온도 차를 5℃ 내외로 유지하여 냉방병을 예방합니다. <br/>
                            오후 2~5시 사이에는 실외 작업을 자제합니다.<br/>
                            카페인이 들어간 음료나 주류는 피하고, 생수나 이온음료를 마십니다.<br/>
                            음식이 쉽게 상할 수 있으므로 외부에 오랫동안 방치된 음식은 섭취하지 않습니다.
                        </div>
                    </div>
                      {/* <div className={styles.dex4}>
                        <span>04</span>
                        <div>안전 수칙 숙지</div>
                        <ul>
                            <li>냉방기기 사용 시 실내·외 온도 차를 5℃ 내외로 유지하여 냉방병을 예방합니다.</li>
                            <li>카페인이 들어간 음료나 주류는 피하고, 생수나 이온음료를 마십니다.</li>
                            <li>오후 2시에서 5시 사이에는 실외 작업을 자제합니다.</li>
                            <li>음식이 쉽게 상할 수 있으므로 외부에 오랫동안 방치된 음식은 섭취하지 않습니다.</li>
                        </ul>
                      </div> */}
                    </div>
                </div>
            )},
        { name: "발생 중", 
            content:(
                <div>
                    <div className={styles.prepHeader}>
                        <h5>폭염발생 시 <br/> 
                        행동요령</h5>
                        <p>TV, 라디오, 인터넷 등에서 폭염이 예보된 때에는 최대한 야외활동을 자제하고 주변의 독거노인 등 건강이 염려되는 분들의 안부를 살펴봅니다.</p>
                    </div>
                    <div className={styles.infoBoxContainer}>
                        <div className={[styles.infoBox1, styles.box].join(" ")}>
                            <div className={styles.small}>
                                <div>가정에서</div>
                                <ul>
                                    <li>야외 활동을 최대한 자제하고, 부득이한 경우 넓은 모자와 가벼운 옷차림을 하며 물병을 휴대합니다.</li>
                                    <li>냉방이 되지 않는 실내에서는 햇볕을 가리고 맞바람이 불도록 환기합니다.</li>
                                    <li>창문이 닫힌 자동차 안에 노약자나 어린이를 홀로 남겨두지 않습니다</li>
                                    <li>거동이 불편한 노인이나 환자를 남겨두고 장시간 외출할 경우, 친인척이나 이웃에게 부탁하고 수시로 안부를 확인합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={[styles.infoBox2, styles.box].join(" ")}>
                            <div className={styles.small}>
                                <div>회사에서</div>
                                <ul>
                                    <li>휴식 시간은 짧게 자주 가지며, 야외 행사나 스포츠 경기는 자제합니다.</li>
                                    <li>편한 복장으로 출근하여 체온을 낮추도록 노력합니다.</li>
                                    <li>건설 현장 등 실외 작업장에서는 '물, 그늘, 휴식'의 폭염 안전 수칙을 준수하고, 특히 오후 2~5시에는 '무더위 휴식 시간제'를 적극 시행합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={[styles.infoBox3, styles.box].join(" ")}>
                            <div className={styles.small}>
                                <div>학교에서</div>
                                <ul>
                                    <li>에어컨 등 냉방 장치 운영이 곤란한 경우 단축 수업이나 휴교 등 학사 일정을 조정하고, 식중독 사고가 발생하지 않도록 주의합니다.</li>
                                    <li>냉방이 되지 않는 실내에서는 햇볕이 들어오지 않도록 하고, 환기가 잘 되도록 선풍기를 켜고 창문이나 출입문을 열어둡니다.</li>
                                    <li>운동장에서의 체육 활동 및 소풍 등 각종 야외 활동을 자제합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={[styles.infoBox4, styles.box].join(" ")}>
                            <div className={styles.small}>
                                <div>축사에서</div>
                                <ul>
                                    <li>축사 창문을 개방하고 지속적인 환기를 실시하며, 적정 사육 밀도를 유지합니다.</li>
                                    <li>비닐하우스나 축사 천장 등에 물 분무 장치를 설치하여 복사열을 낮춥니다.</li>
                                    <li>양식 어류는 꾸준히 관찰하고, 얼음을 넣는 등 수온 상승을 억제합니다.</li>
                                    <li>가축·어류 폐사 시 신속하게 방역 기관에 신고하고 조치에 따릅니다.</li>
                                </ul>    
                            </div>
                        </div>
                        
                    </div>
                </div>
            )},
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
                                <td>폭염</td>
                                <td>
                                    일 최고 체감온도 33℃ 이상이 2일 이상 지속될 것으로 예상될 때<br/>
                                    급격한 체감온도 상승 또는 폭염 장기화 등으로 중대한 피해가 예상될 때
                                </td>
                                <td>
                                일 최고 체감온도 35℃ 이상이 2일 이상 지속될 것으로 예상될 때<br/>
                                급격한 체감온도 상승 또는 폭염 장기화 등으로 광범위한 지역에서 중대한 피해가 예상될 때
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
                                <th>정의 및 증상</th>
                                <th>대처요령</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>열사병</td>
                                <td>
                                    <p>체온을 조절하는 신경계(체온조절 중추)가 열 자극을 견디지 못해 그 기능을 상실한 질환
                                        <span>중추신경 기능장애(의식장애/혼수상태)</span>
                                        <span>땀이 나지 않아 건조하고 뜨거운 피부(40도 이상)</span>
                                        <span>심한 두통, 오한, 빈맥, 빈호흡, 저혈압</span>
                                    </p>
                                </td>
                                <td>
                                    <p>119에 즉시 신고하고 아래와 같이 조치합니다.
                                        <span>환자를 시원한 장소로 옮깁니다.</span>
                                        <span>환자의 옷을 느슨하게 하고 환자의 몸에 시원한 물을 적셔 부채나 선풍기 등으로 몸을 식힙니다.</span>
                                        <span>얼음주머니로 목, 겨드랑이 밑, 서혜부에 대어 체온을 낮춥니다.</span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>열탈진</td>
                                <td>
                                    <p>열로 인하여 땀을 많이 흘려 수분과 염분이 적절히 공급되지 못하는 경우 발생
                                        <span>땀을 많이 흘림(과도한 발한), 차고 젖은 피부, 창백함</span>
                                        <span>체온은 크게 상승하지 않음(≤40℃)</span>
                                        <span>극심한 무력감과 피로, 근육경련</span>
                                        <span>오심 또는 구토, 혼미, 어지럼증(현기증)</span>
                                    </p>
                                </td>
                                <td>
                                    <p>시원한 곳 또는 에어컨이 있는 장소에서 휴식합니다.</p>
                                    <p>물을 섭취하여 수분을 보충해줍니다.</p>
                                    <p>시원한 물로 샤워를 하거나 목욕을 합니다.</p>
                                    <p>증상이 1시간 이상 지속되거나 회복되지 않을 경우, 의료기관에 내원하여 적합한 진료를 받습니다.
                                        <span>병원에서 수액을 통해 수분과 전해질을 보충합니다.</span>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>열경련</td>
                                <td>
                                   <p>땀을 많이 흘려 체내 염분(나트륨)이 부족하여 근육경련이 발생하는 질환
                                    <span>근육경련(팔, 다리, 복부, 손가락)</span>
                                   </p>
                                   <p>특히 고온 환경에서 강한 노동이나 운동을 할 경우 발생</p>
                                </td>
                                <td>
                                    <p>시원한 곳에서 휴식합니다.</p>
                                    <p>물을 섭취하여 수분을 보충해줍니다.</p>
                                    <p>경련이 일어난 근육을 마사지합니다.</p>
                                    <p>아래의 경우, 바로 응급실에 방문하여 진료를 받아야 합니다.
                                    <span>1시간 넘게 경련이 지속</span>
                                    <span>기저질환으로 심장질환이 있는 경우</span>
                                    <span>평상시 저염분 식이요법을 한 경우</span>
                                   </p>
                                </td>
                            </tr>
                            <tr>
                                <td>열실신</td>
                                <td>
                                   <p>체온이 높아져 열을 외부로 발산하기 위해 체표면의 혈액량은 늘어나고 심부의 혈액량은 감소하여 뇌로 가는 혈약량이 부족하여 일시적으로 의식을 잃는 질환
                                    <span>실신(일시적 의식소실), 어지러움증</span>
                                   </p>
                                   <p>주로 앉아있거나 누워있는 상태에서 갑자기 일어나거나 오래 서있을 때 발생</p>
                                </td>
                                <td>
                                    <p>시원한 장소로 옮겨 평평한 곳에 눕힙니다.
                                    <span>다리를 머리보다 높게 올립니다.</span>
                                   </p>
                                    <p>의사소통이 될 경우, 물을 천천히 마시도록 합니다.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>열부종</td>
                                <td>
                                   <p>체온이 높아져 열을 외부로 발산하기 위해 체표면의 혈액량은 늘어나고 심부의 혈액량은 감소하여 이런 상태에서 오래 서 있거나 앉아있게 되면 혈액 내 수분이 혈관 밖으로 이동하면서 부종(몸이 붓는 증상)이 발생
                                    <span>중추신경 기능장애(의식장애/혼수상태)</span>
                                    <span>손, 발, 다리 등의 부종</span>
                                   </p>
                                </td>
                                <td>
                                    <p>시원한 장소로 옮겨 평평한 곳에 눕힙니다.
                                    <span>부종이 발생한 부위를 심장보다 높게 올립니다.</span>
                                   </p>
                                </td>
                            </tr>
                            <tr>
                                <td>열발진/땀띠</td>
                                <td>
                                   <p>땀관이나 땀관 구멍의 일부가 막혀서 땀이 원활히 표피로 배출되지 못하고 축적되어 작은 발진과 물집이 발생하는 질환
                                    <span>중추신경 기능장애(의식장애/혼수상태)</span>
                                    <span>여러 개의 붉은 뾰루지 또는 물집(목, 가슴상부, 사타구니, 팔,다리 안쪽)</span>
                                   </p>
                                </td>
                                <td>
                                    <p>환부를 시원하고 건조하게 유지합니다.</p>
                                    <p>발진용 분말가루 및 연고 등을 사용합니다.</p>
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
        <div className={styles.service2Container}>
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

  export default Service2;